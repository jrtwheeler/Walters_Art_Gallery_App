import React, { useState, useEffect } from "react";
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
  // Get user from database and set user state
  const [user, setUser] = useState({});
  useEffect(() => {
    API.getUser().then((response) => setUser(response.data.user));
  }, []);

  return (
    <Router>
      <div>
        <NavigationBar user={user} />
        <Hero>
          <h1>Walters Art Gallery</h1>
          <h4>Search. View. Collect.</h4>
        </Hero>
        <Wrapper>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route path="/collections">
              <Collections user={user} />
            </Route>
            <Route path="/">
              <Landing user={user} />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
