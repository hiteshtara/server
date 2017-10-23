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
          <Route path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
