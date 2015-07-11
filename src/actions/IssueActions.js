var request = require('superagent');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/ActionTypes');

var apiUrl = 'https://api.github.com/repos/';
var config = require('../config');

module.exports = {

    getIssueItem: function(params){
        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_ISSUES
        });

        request.get(apiUrl+params.login + '/' + params.repo + '/issues/' + params.number + '?per_page=' + 1 +
            '&page=' + (params.page||1))
            .end(function(err){
                console.log('err: ', err);
                AppDispatcher.dispatch({
                    type: ActionTypes.GET_ISSUES,
                    status: data.status,
                    issues: (error)? null: data.body
                });
            });
    },

    getIssuelist: function(params) {
        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_ISSUES
        });

        request.get(apiUrl + params.login + '/'+ params.repo+'/issues' + '?per_page=' + config.per_page +
            '&page=' + (params.page||1))
        .end(function(error, data){

                AppDispatcher.dispatch({
                    type: ActionTypes.GET_ISSUES,
                    status: data.status,
                    issues: (error)? null: data.body
                });
            });
    }
};