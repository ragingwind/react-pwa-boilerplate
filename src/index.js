import createHashHistory from 'history/lib/createHashHistory';
import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import withScroll from 'scroll-behavior/lib/withStandardScroll';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import routes from './routes';
import './theme.css';
import './index.css';

const history = withScroll(useRouterHistory(createHashHistory)());

render(<Router history={history} routes={routes}/>, document.getElementById('app'));
