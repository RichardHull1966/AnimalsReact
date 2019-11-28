import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { MemoryRouter } from 'react-router';

import {configure, mount, shallow} from 'enzyme';
import Animals from "./components/animals.component";
import Container from './App';
import Cats from "./components/cats/cats.component";
import Hamsters from "./components/hamsters/hamsters.component";
import CatCreate from "./components/cats/create.component";
import HamsterCreate from "./components/hamsters/create.component";

const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>;
module.exports = rrd;

configure({ adapter: new Adapter() });

describe('Container', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Container/>
        </MemoryRouter>);

    it('should render the correct react version in the title', () => {
        var pageTitle = wrapper.find('#page-title');
        expect(pageTitle.text()).toContain('Animals Ap - React version: 16.12.0');
    });

    it('renders Animals component by default', () => {
        const animals = wrapper.find(Animals);
        expect(animals).toHaveLength(1);
    });
});
