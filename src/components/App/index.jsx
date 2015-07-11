var  React =  require('react');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var reactBootstrap = require('react-bootstrap');
var Navbar = reactBootstrap.Navbar;
var Link = Router.Link;

var HomePage = require('../HomePage');
var IssueStore = require('../../stores/IssueStore');

module.exports = React.createClass({

    getInitialState: function(){
        return {}
    },

    _onLoad: function(){
        this.setState({loaded: false});
    },

    _onChange: function() {
        this.setState({loaded: IssueStore.getLoaded(), issues: IssueStore.getAll(), status: IssueStore.getStatus()});
    },

    componentDidMount: function() {
        IssueStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        IssueStore.removeChangeListener(this._onChange);
    },

    render: function(){
        return (
            <div className="container">
                <Navbar brand={ <Link to="home">Issues viewer</Link>}>
                </Navbar>
                <RouteHandler {...this.state} />
            </div>
        );
  }
});

