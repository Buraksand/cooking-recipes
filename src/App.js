import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

//import Components
import Navbar from "./components/Navbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
