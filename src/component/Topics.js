import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Topics extends Component {
    // state = {
    //     Id: ''
    // }
    render() {
        return (
            <h1>Topics :</h1>
            // <h1>Topics : {this.props.match.params.Id}</h1>
        );
    }
}

export default withRouter(Topics);
