import Container from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Container', () => {
    var wrapper = shallow(<Container />);

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render the correct react version in the title', () => {
        var pageTitle = wrapper.find('#page-title');
        expect(pageTitle.text()).toContain('Animals Ap - React version: 16.12.0');
    })
});
