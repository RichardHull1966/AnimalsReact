import React, { Component } from 'react';
import Cats from "./cats/cats.component";
import Hamsters from "./hamsters/hamsters.component";
import { withRouter } from "react-router-dom";

class Animals extends Component {
    render() {
        return (
            <div>
                <Cats />
                <Hamsters />
            </div>
        )
    }
}

export default withRouter(Animals);
