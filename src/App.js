import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExcerciseList from './components/ExcerciseList';
import EditExcercise from './components/EditExcercise';
import CreateExcercise from './components/CreateExcercise';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">

        <br />
        
        <Route exact path="/" component={ExcerciseList} />
        <Route exact path="/edit/:id" component={EditExcercise} />
        <Route exact path="/create" component={CreateExcercise} />
        <Route exact path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
