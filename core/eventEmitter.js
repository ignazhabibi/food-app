"use strict";

//Event Emitter (reusable mixin object / revealing module pattern)
export const eventEmitterMixin = (function() {

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