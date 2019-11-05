import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Animals from './App';
import CatCreate from './components/cats/create.component';
import CatEdit from './components/cats/edit.component';
import HamsterCreate from './components/hamsters/create.component';
import HamsterEdit from './components/hamsters/edit.component';

const routing = (
    <Router>
        <Route exact path="/" component={Animals} />
        <Route path="/cats/create" component={CatCreate} />
        <Route path="/cats/edit/:id" component={CatEdit} />
        <Route path="/hamsters/create" component={HamsterCreate} />
        <Route path="/hamsters/edit/:id" component={HamsterEdit} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
