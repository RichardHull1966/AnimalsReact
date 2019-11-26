import Container from './App';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<Container />);
    });
});
