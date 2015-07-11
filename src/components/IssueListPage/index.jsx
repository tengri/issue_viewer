var _ = require('lodash');

var React = require('react');
var Router = require('react-router');

var IssueList = require('./IssueList.jsx');
var IssuesActions = require('../../actions/IssueActions');

var Loader = require('react-loader');
var SearchForm = require('../SearchForm');
var Pagination = require('./Pagination.jsx');

module.exports = React.createClass({
    mixins: [Router.State],

    getInitialState: function(){
        return this.matchParams();
    },

    componentWillMount: function(){
        if ((!this.props.issues)&&(!this.props.loaded))
            IssuesActions.getIssuelist(this.state);
    },

    componentWillReceiveProps: function(){
        var params = this.matchParams();
        this.setState(params);
    },

    matchParams: function(){
        var params = this.getParams();
        params.page = params.page||1;
        params = _.merge(params, this.getQuery());
        return params;
    },

    render: function(){
        return <div>
            <SearchForm />
            <Loader loaded={(this.props.loaded)} >
                {this.props.status==404?<div> Репозиторий с таким именем у данного пользователя не найдено ;( </div>
                    :<IssueList issues={this.props.issues} {...this.state} />}
                <Pagination {...this.state}  />
            </Loader>
        </div>
    }
});

