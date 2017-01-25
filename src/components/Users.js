import React from 'react';
import Link from 'react-router/lib/Link';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const dummyUsers = {
	jimmy: {
		fullName: 'Jimmy Moon',
		age: 30
	},
	jane: {
		fullName: 'Jane yoo',
		age: 29
	},
	john: {
		fullName: 'John Doh',
		age: 67
	}
};

class User extends React.Component {
	render() {
		return (
			<Card style={{marginBottom: '0.4em'}}>
				<CardHeader title={`User: ${this.props.id}`}/>
				<CardText style={{fontSize: '1em'}}>
					This is <Link style={{color: 'rgba(0,0,0, 0.54)'}} to={`/users/${this.props.id}`}>{this.props.fullName}</Link> section
				</CardText>
			</Card>
		);
	}
}

User.propTypes = {
	id: React.PropTypes.string,
	fullName: React.PropTypes.string
};

class Users extends React.Component {
	constructor() {
		super();

		this.state = {
			users: dummyUsers
		};
	}

	render() {
		let users = {};

		if (this.props.params && this.props.params.id) {
			users[this.props.params.id] = this.state.users[this.props.params.id];
		} else {
			users = this.state.users;
		}

		const children = Object.keys(users).map((u, i) => {
			return <User key={`${u}-${i}`} id={u} {...users[u]}/>;
		});

		return (
			<div>{children}</div>
		);
	}
}

Users.propTypes = {
	params: React.PropTypes.object
};

export default Users;
