"use strict";

//Event Emitter (reusable mixin object / revealing module pattern)
export const eventEmitterMixin = (function() {

    const listenersByEvent = new Map();
    //Key value pairs {"eventName1": [listener1, listener2...]}

    function addListenerToEvent(eventName, listener) {
        if (!listenersByEvent.has(eventName)) {
            listenersByEvent.set(eventName, []);
        }
        listenersByEvent
            .get(eventName)
            .push(listener);
    }

    function emitEvent(eventName, data) {
        const listeners = listenersByEvent.get(eventName);
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