import React, { Component } from 'react';
import Cats from "./cats/cats.component";
import Hamsters from "./hamsters/hamsters.component";
import { withRouter } from "react-router-dom";

class Animals extends Component {
    render() {
        return (
            <div>
                <Cats positiveTraits={'Cute'} negativeTraits={'Arrogant'}>
                    Cats
                </Cats>
                <Hamsters positiveTraits={'Cheap'} negativeTraits={'Scratchy'}>
                    Hamsters
                </Hamsters>
            </div>
        )
    }
}

export default withRouter(Animals);
