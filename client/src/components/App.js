import React, { Component } from 'react';
// Browser router is brain
//route determines which componet to show
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
// lets create dummy componets // react router goes recursively check all routes so when user clicks
// survey dashboard is shown it matches the path and shows local hos sees
//  only pass exact as property jsx assumes exact=true

const Dashboard = () => <h2>Proposal Development </h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

// web  pack is module loader all js files and make it one file it also process loaders into web pack
// called css files
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
