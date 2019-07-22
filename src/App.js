import React from 'react';
import { withRouter } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from './component/searchPage';
import SearchResultPage from './component/searchResultPage';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={withRouter(SearchPage)} />
          <Route path="/search/" component={SearchResultPage} />
        </Switch>
      </Router>
    )
    // return (
    //   <SearchResultPage 
    //     keyword={this.state.keyword}
    //     onSearch={this.onSearch}
    //   />
    // );
    // }
  }
}
