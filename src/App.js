import Navbar from "./Components/Navbar";
import "./Styles/CakeDetails.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Search from "./Components/Search";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
