import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import AppShell from '../src/components/AppShell';

test('<AppShell>', t => {
	const wrapper = shallow(<AppShell/>);
	t.not(wrapper, null);
});
