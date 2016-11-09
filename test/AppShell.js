import test from 'ava'
import React from 'react'
import {mount} from 'enzyme';

import './lib/with-dom';
import AppShell from '../src/components/AppShell'

test(t => {
	const wrapper = mount(<AppShell />)
	t.is(wrapper.find('.mdl-layout__drawer').is('.mdl-layout__drawer'), true);
	t.is(wrapper.find('.mdl-layout__content').length, 1);
});
