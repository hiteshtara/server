import React from 'react';
// Browser router is brain
//route determines which componet to show
import { BrowserRouter, Route } from 'react-router-dom';

// lets create dummy componets
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  // browser router can have maximum one div childern
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          // react router goes recursively check all routes so when user clicks
          /survey dashboard is shown it matches the path and shows local host //
          sees only / //pass exact as property jsx assumes exact=true
          <Route exact path="/" component={Landing} />
          <Route eaxct path="/surveys" componet={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
