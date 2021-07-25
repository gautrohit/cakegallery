import Navbar from "./Components/Navbar";
import "./Styles/CakeDetails.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Search from "./Components/Search";
import { Switch, Route } from "react-router";
import PageNotFound from "./Components/PageNotFound";
import { useState } from "react";
import CakeDetails from "./Components/CakeDetails";
import Cake from "./Components/Cake";
import Cart from "./Components/Cart";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.token ? true : false
  );

  function loggedIn() {
    setUserLoggedIn(true);
  }

  return (
    <div className="App">
      <Navbar userLoggedIn={userLoggedIn} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login">
          <Login loggedIn={loggedIn} />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/search" component={Search} />
        <Route path="/cake" component={Cake} />
        <Route path="/cart" component={Cart} />
        <Route path="**" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
