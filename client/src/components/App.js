import React from 'react';
// Browser router is brain
//route determines which componet to show
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
// lets create dummy componets // react router goes recursively check all routes so when user clicks
// survey dashboard is shown it matches the path and shows local hos sees
//  only pass exact as property jsx assumes exact=true

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
// web  pack is module loader all js files and make it one file it also process loaders into web pack
// called css files
const App = () => {
  // browser router can have maximum one div childern
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Landing} />
          <Route eaxct path="/surveys" componet={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
