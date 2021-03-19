import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import About from "./pages/About";
import history from "./utils/history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:customListName">
          <List />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
