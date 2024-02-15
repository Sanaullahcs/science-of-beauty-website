import React, { useEffect } from "react";
// import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Blogs from "./pages/Blogs";

function App() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/Services" component={Services} />
        <Route path="/Packages" component={Packages} />
        <Route path="/Blogs" component={Blogs} />
      </Switch>
    </Router>
  );
}
export default App;
