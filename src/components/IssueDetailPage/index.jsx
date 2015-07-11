_ = require('lodash');

var React = require('react');
var Router = require('react-router');

var IssueItem = require('../IssueItem.jsx');
var IssueActions = require('../../actions/IssueActions');

var Loader = require('react-loader');
var IssueExtra = require('./IssueExtra.jsx');

module.exports = React.createClass({
    mixins: [Router.State],

    getInitialState: function(){
        return this.matchParams();
    },

    componentWillMount: function(){
        if ((!this.props.issues)&&(!this.props.loaded)) IssueActions.getIssuelist(this.state);
    },

    matchParams: function(){
        var params = this.getParams();
        params.page = params.page||1;
        return _.merge(params, this.getQuery());
    },

    render: function(){
        var params = _.clone(this.state);
        params.issue = _.findWhere(this.props.issues, {number: parseInt(this.state.number)});

        return <div>
            <div><label></label></div>
            <Loader loaded={this.props.loaded} >
                <IssueItem {...params} />
                <IssueExtra {...params} />
            </Loader>
        </div>
    }
});