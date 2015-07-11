var React = require('react/addons');

var IssueActions = require('../../actions/IssueActions');
var IssueStore = require('../../stores/IssueStore');

var Router = require('react-router');

var reactBootstrap = require('react-bootstrap');
var Input = reactBootstrap.Input;
var Grid = reactBootstrap.Grid;
var Row = reactBootstrap.Row;
var Col = reactBootstrap.Col;
var Button = reactBootstrap.Button;

module.exports = React.createClass({
    mixins: [React.addons.LinkedStateMixin, Router.Navigation, Router.State],

    getInitialState: function(){
        var params = this.getParams();
        return {login: params['login']||'', repo: params['repo']||'', loginChanged: false, repoChanged: false}
    },

    searchIssues: function(e){
        e.preventDefault();
        this.setState({loaded: false});
        IssueActions.getIssuelist(this.state);
        this.transitionTo('issue_list', this.state);
    },

    strValid: function(valueName){
        let length = this.state[valueName].length;
        return (length !== 0)&&(length < 39);
    },

    validateInput(valueName) {
        if ((!this.state[valueName+'Changed']) || (this.strValid(valueName))) return 'success';
        return 'error';
    },

    markInput: function(valueName){
        return function(){
            var change = {};
            change[valueName+'Changed'] = true;
            this.setState(change);
        }.bind(this);
    },

    formValid: function(){
        return ( this.strValid('login'))&&( this.strValid('repo'));
    },

    render: function(){
        return (
            <form className="form">
                <fieldset>
                    <Grid>
                        <Row className='show-grid'>
                            <Col md={4}>
                                <Input bsStyle={this.validateInput('login')} onBlur={this.markInput('login')} type="text" placeholder="Имя пользователя" valueLink={this.linkState('login')} />
                            </Col>
                            <Col md={4}>
                                <Input bsStyle={this.validateInput('repo')} onBlur={this.markInput('repo')} type="text" placeholder="Репозиторий" valueLink={this.linkState('repo')} />
                            </Col>
                            <Col md={4}>
                                <Button bsStyle='primary' className={this.formValid()?'':'disabled'} onClick={this.searchIssues} >Найти</Button>
                            </Col>
                        </Row>
                    </Grid>
                </fieldset>
            </form>
        )
    }

});