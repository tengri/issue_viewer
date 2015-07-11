var _ = require('lodash');

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var moment = require('moment');
moment.lang('ru');

module.exports = React.createClass({
    render: function(){
        var issue = this.props.issue;
        var params = {login: this.props.login, repo: this.props.repo, number: issue.number};

        return  <div className="media">
            <div className="media-left">
                <a href={issue.user.html_url}>
                    <img className="media-object img-circle" src={issue.user.avatar_url} width="50px" alt="" />
                </a>
                </div>
                <div className="media-body">
                    <Link to="issue_detail" params={params} >
                        <h4 className="media-heading">{'#'+issue.number+'. '+ issue.title}</h4>
                    </Link>
                    <h4>
                        <small>
                            { issue.user.login + ' прокоментировал ' + moment(issue.created_at).fromNow() }
                        </small>
                    </h4>
                </div>
        </div>

    }
});

