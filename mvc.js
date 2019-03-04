/* eslint-disable no-console */

"use strict";

//Mock Data
const ENTRIES = ["Banane", "Apfel", "Pfirsich"];


//Event Emitter (reusable mixin object / revealing module pattern)
const eventEmitterMixin = (function() {

    const _listenersByEvent = new Map();
    //Key value pairs {"eventName1": [listener1, listener2...]}

    function addListenerToEvent(eventName, listener) {
        if (!_listenersByEvent.has(eventName)) {
            _listenersByEvent.set(eventName, []);
        }
        _listenersByEvent
            .get(eventName)
            .push(listener);
    }

    function emitEvent(eventName, data) {
        const listeners = _listenersByEvent.get(eventName);
        if (listeners) {
            for (let listener of listeners) {
                listener(data);
            }
        }
    }    

    return {
        //public API object
        on: addListenerToEvent,
        emit: emitEvent
    };  
})();


//Model
class ListModel {
    constructor(items = []) {
        //Mixin Event Emitter public API object 
        Object.assign(this, eventEmitterMixin);

        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
        this.emit("item-added", item);
    }
}


//View
class ListView {
    constructor(model) {
        //Mixin Event Emitter public API object
        Object.assign(this, eventEmitterMixin);

        this.model = model;
        this.addBtn = document.getElementById("add-item");
        
        this.addBtn.addEventListener("click", 
            () => this.emit("add-btn-clicked"));

        this.on("item-added", 
            (item) => this.addListItem(item));
        //Arrow function used for correct lexical this (avoiding the self = this thing)!  
    }

    initListView() {
        const items = this.model.getItems();
        const displayContainer = document.getElementById("ul-list");

        for (let item of items) {
            let liElement = document.createElement("li");
            liElement.innerHTML = item;
            displayContainer.appendChild(liElement);
        }
    }

    addListItem(item) {
        const displayContainer = document.getElementById("ul-list");
        const liElement = document.createElement("li");
        liElement.innerHTML = item;
        displayContainer.appendChild(liElement);
    }
}


//Controller
class ListController {
    constructor(model, view) {
        //Mixin Event Emitter public API object
        Object.assign(this, eventEmitterMixin);

        this.model = model;
        this.view = view;

        this.on("add-btn-clicked", 
            () => this.addItem());
    }

    addItem() {
        const item = document.getElementById("item-content");
        this.model.addItem(item.value);
    }
}



const foodDiaryModel = new ListModel(ENTRIES);
const foodDiaryView = new ListView(foodDiaryModel);
const foodDiarycontroller = new ListController(foodDiaryModel, foodDiaryView);
foodDiaryView.initListView();