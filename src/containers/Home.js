import React, { Component } from 'react';
import {Home as Homes,About} from '../components';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col col-lg-6">
                    <Homes/>
                </div>
                <div className="col col-lg-6">
                    <About/>
                </div>
                
            </div>
        );
    }
}

export default Home;