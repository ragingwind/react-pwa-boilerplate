import React from 'react';
import {render} from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import {Router, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = useRouterHistory(createHashHistory)();

render(<Router history={history} routes={routes}/>, document.getElementById('app'));
