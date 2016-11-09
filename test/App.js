import test from 'ava'
import React from 'react'
import {mount} from 'enzyme';

import App from '../src/components/App'
import './lib/with-dom';

test(t => {
	const wrapper = mount(<App />)
	t.is(wrapper.find('.mdl-layout').is('.mdl-layout'), true);
	t.is(wrapper.find('.mdl-layout__content').length, 1);
});
