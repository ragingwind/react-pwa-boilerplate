import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Main from '../src/components/Main';

test('<Main>', t => {
	const wrapper = shallow(<Main/>);
	t.is(wrapper.contains(<li>Web Manifest</li>), true);
});
