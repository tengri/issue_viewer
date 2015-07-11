var _ = require('lodash');
var ActionTypes = require('../constants/ActionTypes');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var http = require('superagent');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'issues_change';

var _issues = [];
var _status = "";
var _loaded = false;

var IssueStore = _.merge({}, EventEmitter.prototype, {

    getStatus: function(){
        return _status;
    },

    getLoaded: function(){
        return _loaded
    },

    getAll: function() {
        return _issues;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

IssueStore.dispatchToken = AppDispatcher.register(function(action) {
    console.log('action: ', action);
    switch(action.type) {
        case ActionTypes.GET_ISSUES:
            console.log('GET_ISSUES');
            _issues = action.issues;
            _status = action.status;
            _loaded = true;
            IssueStore.emitChange();
            break;
        case ActionTypes.LOAD_ISSUES:
            _loaded = false;
            IssueStore.emitChange();
            break;
    }
});

module.exports = IssueStore;
