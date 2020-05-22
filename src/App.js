import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Medico from './components/Medico';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Intro} />
      <Route exact path="/medico" component={Medico} />
    </div>
  );
}

export default App;
