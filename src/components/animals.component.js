import React, { Component } from 'react';
import Cats from "./cats/cats.component";
import Hamsters from "./hamsters/hamsters.component";

export default class Animals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCatsLoaded: false,
            cats: []
        };
    }
    render() {
        return (
            <div>
                <Cats />
                <Hamsters />
            </div>
        )
    }
}

