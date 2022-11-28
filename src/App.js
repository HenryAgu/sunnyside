import { useState } from "react"

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Adventure from "./components/Adventure";
import Nfts from "./components/Nfts";
import Footer from "./components/Footer";
import Place from "./components/Place";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Construction from "./components/Construction";


function App() {
    return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Hero/>
              <Adventure/>
              <Nfts/>
            </Route>
            <Route exact path="/place-to-stay">
              <Place/>
            </Route>
            <Route exact path="/nfts">
              <Construction/>
            </Route>
            <Route exact path="/community">
              <Construction/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
