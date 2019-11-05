import React, { Component, version } from 'react';
import './App.css';
import Animals from './components/animals.component';
import withRouter from "react-router-dom/es/withRouter";

const REACT_VERSION = version;

class Container extends Component {
    render() {
        return (
            <div>
                <h2>Animals Ap - React version: { REACT_VERSION }</h2>
                <Animals />
            </div>
        );
    }
}

export default withRouter(Container);
