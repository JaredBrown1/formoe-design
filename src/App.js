import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import NavBar from "./components/nav-bar";
import Home from "./components/home";
import About from "./components/about";
import Certifications from "./components/certifications";
import Services from "./components/services";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/Services" component={Services} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
