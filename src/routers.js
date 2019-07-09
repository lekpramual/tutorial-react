import React from 'react';
import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import {Home,About} from './containers'; 

function Routers() {
    return (
        <div>
            <Router>
              <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link exact to="/about">About</Link></li>
              </ul>
              <hr/>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Router>
        </div>
      );
}

export default Routers;