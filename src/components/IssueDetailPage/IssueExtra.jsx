var React = require('react');

module.exports = React.createClass({
    render: function(){
        return <div>{this.props.issue.body}</div>
    }
});