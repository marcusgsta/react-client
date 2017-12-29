import React from 'react';
import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    // const div = document.createElement('div');

    shallow(<App />);
    // ReactDOM.render(<App />, div);
});
