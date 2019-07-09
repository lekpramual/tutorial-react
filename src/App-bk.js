import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
    return (
        <div className="App">
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
                </div>
            </Router>
        </div>
    );
}

export default App;


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
const Topics = () => (
    <div>
        <h2>Topics</h2>
    </div>
)