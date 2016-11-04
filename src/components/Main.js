import React from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';

class Main extends React.Component {
	render() {
		return (
			<div>
			<Card shadow={0} style={{width: '80%', margin: 'auto', marginTop: '30px'}}>
				<CardTitle><h3>Welcome!</h3></CardTitle>
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
