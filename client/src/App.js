import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
// import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import "./App.css";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' component={Saved} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
