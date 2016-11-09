import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme';

import Contact from '../src/components/Contact';

test(t => {
	const wrapper = shallow(<Contact />);
	t.is(wrapper.contains('This is the contact section'), true);
});
