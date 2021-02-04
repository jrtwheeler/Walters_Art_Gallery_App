import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Collections from "./pages/Collections";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";

function App() {
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
            {/* <Route component={}/>  catchall route for 404*/}
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
