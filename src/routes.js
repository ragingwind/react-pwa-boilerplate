import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/App';
import Main from './components/Main';

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Main}/>
	<Route path="users" getComponent={(s, cb) => {
    System.import('./components/Users').then((component) => {
      cb(null, component.default || component);
    });
  }}/>
  <Route path="users/:id" getComponent={(s, cb) => {
    System.import('./components/Users').then((component) => {
      cb(null, component.default || component);
    });
  }}/>
  <Route path="contact" getComponent={(s, cb) => {
    System.import('./components/Contact').then((component) => {
      cb(null, component.default || component);
    });
  }}/>
</Route>
