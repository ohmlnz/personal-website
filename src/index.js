import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Homepage from './Homepage';
import Details from './Details';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/details" component={Details}/>
      <Route exact path="*" component={NotFound}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
