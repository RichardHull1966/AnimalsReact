import React, { Component, version } from 'react';
import './App.css';
import Animals from './components/animals.component';
import CatCreate from "./components/cats/create.component";
import CatEdit from "./components/cats/edit.component";
import HamsterCreate from "./components/hamsters/create.component";
import HamsterEdit from "./components/hamsters/edit.component";
import { Route, BrowserRouter as Router } from 'react-router-dom';

const REACT_VERSION = version;

export default class Container extends Component {
    render() {
        return (
            <div>
                <h2 id='page-title'>Animals Ap - React version: { REACT_VERSION }</h2>
                <Router>
                    <Route exact path="/" component={Animals} />
                    <Route path="/cats/create" component={CatCreate} />
                    <Route path="/cats/edit/:id" component={CatEdit} />
                    <Route path="/hamsters/create" component={HamsterCreate} />
                    <Route path="/hamsters/edit/:id" component={HamsterEdit} />
                </Router>
            </div>
        );
    }
}
