
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Complains from './Complains';

import Navbar from './Narbar';

function App() {
  return (
    <>
    <Navbar />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/compalains" component={Complains} />
     <Redirect to="/" />
      
     
   </Switch>
   </>
  );
}

export default App;
