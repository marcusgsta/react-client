import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import Admin from './admin';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<Admin />);
});
