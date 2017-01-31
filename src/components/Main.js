import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Main extends React.Component {
	render() {
		return (
			<div>
				<Card>
					<CardHeader><h3>Welcome!</h3></CardHeader>
					<CardText style={{fontSize: '1em'}}>
						You now have:
						<ul>
							<li>Web Manifest</li>
							<li>Service worker for caching and offline</li>
							<li>Application Shell powered by <a href="https://material-ui.com">material-ui</a></li>
							<li>Supporting PRPL pattern by webpack 2 code splitting</li>
							<li>Baked in ES2015, Optimized build and testing by ava and xo</li>
						</ul>
					</CardText>
				</Card>
			</div>
		);
	}
}

export default Main;
