import "./App.css";
import NavBarTop from "./components/NavBarTop";
import { Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import Movie from "./pages/Movie";
import Char from "./pages/Char";

function App() {
  return (
    <>
      <NavBarTop />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/character">
            <Char />
          </Route>
          <Route exact path="/">
            <Movie />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
