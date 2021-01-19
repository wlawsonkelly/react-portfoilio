import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"
import Home from "./pages/Home/index"
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
    return (
    <HashRouter>           
        <div>
            <Nav />
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/bio" component={Bio} />
                <Route exact path = "/contact" component={Contact} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
            </div>
        </HashRouter>
    );
}



export default App;

