import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    // const div = document.createElement('div');

    shallow(<App />);
    // ReactDOM.render(<App />, div);
});
