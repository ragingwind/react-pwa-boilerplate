import React from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Contact extends React.Component {
	render() {
		return (
			<div>
				<Card shadow={0} style={{width: '80%', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Contact</CardTitle>
					<CardText>
						This is the contact section
					</CardText>
					<CardActions border>
						<Button colored>Get Started</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default Contact;
