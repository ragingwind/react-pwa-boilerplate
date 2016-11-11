import test from 'ava'
import React from 'react'
import {mount} from 'enzyme';

import './lib/with-dom';
import AppShell from '../src/components/AppShell'

test(t => {
	const wrapper = mount(<AppShell />);
	t.is(wrapper.find('.mdl-layout__header-row').is('.mdl-layout__header-row'), true);
	t.is(wrapper.find('.mdl-layout').length, 1);
	t.is(wrapper.find('Layout').length, 1);
});
