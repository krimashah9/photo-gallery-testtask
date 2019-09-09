import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import MainContainer from './component/MainContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/gallery" exact component={MainContainer}/>
          <Route path="/my-collections" exact component={MainContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
