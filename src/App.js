import React, { Component, version } from 'react';
import './App.css';
import Animals from './components/animals.component'

const REACT_VERSION = version;

export default class Container extends Component {
    render() {
        return (
            <div>
                <h2>Animals Ap - React version: { REACT_VERSION }</h2>
                <Animals />
            </div>
        );
    }
}
