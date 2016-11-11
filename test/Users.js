import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Users from '../src/components/Users';

test(t => {
	const wrapper = shallow(<Users/>);
	t.is(wrapper.find('div').children().length, 3);
});

test('<Users>', t => {
	const wrapper = shallow(<Users/>);
	wrapper.setProps({
		params: {
			id: 'jimmy'
		}
	});
	t.is(wrapper.find('div').children().length, 1);
});
