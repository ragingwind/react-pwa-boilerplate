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
							<li>Application Shell powered by <a href="https://react-mdl.github.io">react-mdl</a></li>
							<li>Supporting PRPL pattern</li>
							<li>Baked in ES2015, Optimized build and testing</li>
						</ul>
						<b>Looking for more Web App layouts? Check <a href="https://react-mdl.github.io">react-mdl</a> layouts. You can <a href="https://react-mdl.github.io/react-mdl/components/layout/">preview</a> them live</b>
					</CardText>
				</Card>
			</div>
		);
	}
}

export default Main;
