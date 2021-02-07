import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Collections from "./pages/Collections";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import API from "./utils/API";

function App() {
  const [user, setUser] = useState({});
  API.getUser().then((response) => setUser(response.data.user));
  console.log(user);
  // could pass username to navbar OR pass prop saying whether there's a user/ "logged in" flag
  // in navbar vonditionally render links based on whether someone is logged in/logged out

  return (
    <Router>
      <div>
        <NavigationBar />
        <Hero>
          <h1>Walters Art Gallery</h1>
          <h4>Search. View. Collect.</h4>
        </Hero>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/logout" component={Landing} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
