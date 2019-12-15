import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Global Includes
import { Header, Navbar, Footer } from "./pages/includes/index";

// Pages
import { Home } from "./pages/index";

import Projects from "./pages/includes/projects";
import Resume from "./pages/includes/resume";
import Contact from "./pages/includes/contact";

function App() {
  return (
    <Router>
      <div className="App justify-content-stretch bg-img">
          <Home />
          <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          </Switch>

      </div>
    </Router>
  );
}

export default App;
