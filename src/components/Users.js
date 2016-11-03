import React from 'react';
import Link from 'react-router/lib/Link';
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

const dummyUsers = {
	'jimmy': {
		fullName: 'Jimmy Moon',
		age: 30
	},
	'jane': {
		fullName: 'Jane yoo',
		age: 29
	},
	'john': {
		fullName: 'John Doh',
		age: 67
	}
};

class User extends React.Component {
	render() {
		return (
			<Card shadow={0} style={{width: '80%', margin: 'auto', marginTop: '30px'}}>
				<CardTitle>User: {this.props.id}</CardTitle>
				<CardText style={{fontSize: '1em'}}>
					This is <Link style={{color:'rgba(0,0,0, 0.54)'}} to={`/users/${this.props.id}`}>{this.props.fullName}</Link> section
				</CardText>
			</Card>
		);
	}
}

class Users extends React.Component {
	constructor() {
		super();

		this.state = {
			users: dummyUsers
		};
	}

	render() {
		let users = {};

		if (this.props.params.id) {
			users[this.props.params.id] = this.state.users[this.props.params.id];
		} else {
			users = this.state.users;;
		}

		const children = Object.keys(users).map((u, i) => {
			return <User key={`${u}-${i}`} id={u} {...users[u]}></User>;
		});

		return (
			<div>{children}</div>
		);
	}
}

export default Users;
