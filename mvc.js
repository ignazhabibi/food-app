"use strict";

import {eventEmitterMixin} from "../core/eventEmitter.js";

//Model
export class ListModel {
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
export class ListView {
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
        const displayContainer = document.getElementById("today");

        for (let item of items) {
            let liItem = document.createElement("data-list-item");
            let liIcon = document.createElement("data-list-icon");
            let liContent = document.createElement("data-list-content");
            let liSequence = document.createElement("data-list-sequence");
            liContent.innerHTML = `<h3>${item}</h3>`;
            displayContainer.appendChild(liItem);
            liItem.appendChild(liIcon);
            liItem.appendChild(liContent);
            liItem.appendChild(liSequence);
        }
    }

    addListItem(item) {
        const displayContainer = document.getElementById("today");
        let liItem = document.createElement("data-list-item");
        let liIcon = document.createElement("data-list-icon");
        let liContent = document.createElement("data-list-content");
        let liSequence = document.createElement("data-list-sequence");
        liContent.innerHTML = `<h3>${item}</h3>`;
        displayContainer.appendChild(liItem);
        liItem.appendChild(liIcon);
        liItem.appendChild(liContent);
        liItem.appendChild(liSequence);
    }
}

//Controller
export class ListController {
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