import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Homepage from './Homepage';
import Details from './Details';
import NotFound from './NotFound';

const anchors = ['/', '/#intro', '/#about', '/#portfolio', '/#skills', '/#contact'];

const App = () => (
  <Router>
    <Switch>
      {anchors.map((path, i) => (
        <Route exact path={path} component={Homepage} key={i}/>
      ))}
      <Route exact path="/details" component={Details}/>
      <Route exact path="*" component={NotFound}/>
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
