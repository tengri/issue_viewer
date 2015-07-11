var React = require('react');

var reactBootstrap = require('react-bootstrap');
var Pagination = reactBootstrap.Pagination;

var Grid = reactBootstrap.Grid;
var Row = reactBootstrap.Row;
var Col = reactBootstrap.Col;

var Router = require('react-router');
var Link = Router.Link;

var IssueActions = require('../../actions/IssueActions');

module.exports = React.createClass({
    mixins: [Router.Navigation, Router.State],

    refreshIssues: function(){
        IssueActions.getIssuelist(this.props);
    },

    render: function(){
        var linkQuantity = 7;
        var page = this.props.page;
        page= page||1;
        page = parseInt(page);
        var beginPage = page - 3;
        if (beginPage<1) beginPage = 1;
        var pageLinks = _.times(linkQuantity, i => {
                var thisPage = beginPage + i;
                return <li className={(thisPage===page)?'active':''} >
                    <Link to="issue_list" params={this.props} query={{page: beginPage+i}}
                          onClick={this.refreshIssues}>
                        {thisPage}
                    </Link>
                </li>
            }
        );
        return(<div>
                {
                    this.props.issues? <Grid>
                            <Row>
                                <Col lg={6} xsOffset={3}>
                                    <ul className="pagination">
                                        <li className={(this.props.page==1)?'hide':''} >
                                            <Link to="issue_list" params={this.props} query={{page: parseInt(this.props.page)-1}}
                                                  onClick={this.refreshIssues} >
                                                <span aria-hidden="true">Назад</span>
                                            </Link>
                                        </li>
                                        {pageLinks}
                                        <li>
                                            <Link to="issue_list" params={this.props} query={{page: parseInt(this.props.page)+1}}
                                                  onClick={this.refreshIssues} >
                                                <span aria-hidden="true">Вперед</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Grid>:<div></div>
                }
        </div>


        )
    }
});
