import React from 'react';
import {BrowserRouter as Router,Route,Switch, } from "react-router-dom";
import Home from './Pages/Home';
import TodoListPage from './Pages/TodoListPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/todo" component={TodoListPage}/>
      </Switch>
    </Router>
  );
}

export default App;
