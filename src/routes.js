import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/App';
import Main from './components/Main';

function routeUsers(s, cb) {
	System.import('./components/Users').then(component => {
		cb(null, component.default || component);
	});
}

function routeContact(s, cb) {
	System.import('./components/Contact').then(component => {
		cb(null, component.default || component);
	});
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main}/>
		<Route path="users" getComponent={routeUsers}/>
		<Route path="users/:id" getComponent={routeUsers}/>
		<Route path="contact" getComponent={routeContact}/>
	</Route>
);
