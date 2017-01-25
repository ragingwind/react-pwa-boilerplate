import React from 'react';
import {Card, CardHeader, CardText, CardMedia, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Contact extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader title="Contact"/>
				<CardMedia>
					<img src="http://www.getmdl.io/assets/demos/welcome_card.jpg" alt=""/>
				</CardMedia>
				<CardText>
					This is the contact section
				</CardText>
				<CardActions>
					<FlatButton label="Get Touch"/>
				</CardActions>
			</Card>
		);
	}
}

export default Contact;
