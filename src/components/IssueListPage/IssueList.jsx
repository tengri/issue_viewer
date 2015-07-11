var _ = require('lodash');
var React = require('react');

var IssueItem = require('../IssueItem.jsx');

module.exports = React.createClass({
    render: function(){
        var issues = this.props.issues;
        var markup;

        if (_.isArray(issues)) markup = (issues.length===0)? <div>Обращения к репозиторию отсутсвуют</div>
            : issues.map((issue, index)=>
              <IssueItem issue={issue} {...this.props} />
        );
        return (
            <div>
                {issues?(<div>
                {markup}
                </div>):<div>Обращений не найдено ;(</div>}
            </div>
        )
    }
});