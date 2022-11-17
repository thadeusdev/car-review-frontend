
import React from "react";
import "./App.css";
import "./John.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import AddCar from "./AddCar"
import SignIn from "./SignIn";
import Signup from "./Signup";
import ReviewForm from "./ReviewForm";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cars" component={AddCar} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/reviews" component={ReviewForm} />
            <Route exact path="/display" component={Display} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;