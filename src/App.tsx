import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from 'containers/Home';

function App() {
  return (
    <div className="App">
      <Router>    
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/test" component={Test}/> */}
            </Switch>        
          </Router> 
    </div>
  );
}

export default App;
