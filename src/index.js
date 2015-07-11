import React from 'react';

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var HomePage = require('./components/HomePage');
var App = require('./components/App');


var routes = (
    <Route handler={App}>
        <Route name="home" path="/" handler={HomePage} />
        <Route name="issue_list" path="/:login/:repo/issues" handler={require('./components/IssueListPage')} />
        <Route name="issue_detail" path="/:login/:repo/issues/:number" handler={require('./components/IssueDetailPage')} />
        <NotFoundRoute handler={require('./components/NotFoundPage.jsx')} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.getElementById('root'));
});