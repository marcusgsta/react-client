import React from 'react';
import { shallow } from 'enzyme';
import Chat from './chat';

it('renders without crashing', () => {
    shallow(<Chat />);
});

it('updateScroll', () => {
    let wrapper = shallow(<Chat/>);

    wrapper.instance().updateScroll = jest.fn();
    wrapper.update();
    wrapper.instance().updateScroll();
    expect(wrapper.instance().updateScroll).toBeCalled();
});
