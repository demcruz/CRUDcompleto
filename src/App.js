import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Navbar from './components/layouts/Navbar';

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import AddUser from './components/pages/AddUser'
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import EditUser from './components/pages/EditUser';
import User from './components/pages/User';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/addUser" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
        
      </div>

    </Router>

    
  );
}

export default App;
