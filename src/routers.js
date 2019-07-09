import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Container
import Topics from './container/Topics';

export const Routers = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link exact to="/about">About</Link></li>
                    <li><Link exact to="/topics">Topics</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/topics" component={Topics} />
                <Route exact path="/topics/:Id" component={Topics} />
            </div>
        </Router>
    )
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)
