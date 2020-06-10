import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
