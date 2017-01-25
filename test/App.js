import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/components/App';

test('<App>', t => {
	const wrapper = shallow(<App/>);
	t.not(wrapper, null);
});
