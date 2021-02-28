import React from "react";
import Question from "./question/App";
import Shop from "./shop/App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/question">
          <Question />
        </Route>
      </Switch>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      Home
      <nav>
        <ul>
          <li>
            <Link to="/shop"> Shop </Link>
          </li>
          <li>
            <Link to="/question">Question</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
