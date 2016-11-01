import React from 'react';
import Route from 'react-router/lib/Route';
import App from './components/App';

module.exports = <Route path="/" component={App}>
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
