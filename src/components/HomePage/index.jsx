var React = require('react');

var IssueActions = require('../../actions/IssueActions');
var IssueStore = require('../../stores/IssueStore');

var SearchForm = require('../SearchForm');

module.exports = React.createClass({
    render: function(){
        return <div>
            <SearchForm />
        </div>
    }
});