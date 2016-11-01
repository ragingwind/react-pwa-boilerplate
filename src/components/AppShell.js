import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router/lib/Link';
import {Layout, Header, Navigation, Content, Textfield, Drawer} from 'react-mdl';

export default class AppShell extends React.Component {
	constructor(props) {
		super(props);

		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick(e) {
		const link = e.currentTarget;

		// open external url on a new tab
		if (link.target === '_blank') {
			e.preventDefault();
			window.open(link.href);
		}

		// close drawer opened
		ReactDOM.findDOMNode(this.refs.layout).MaterialLayout.toggleDrawer()
	}

	render() {
		return (
			<Layout fixedHeader fixedDrawer ref="layout">
				<Header title={this.props.title || ''}>
					<Textfield onChange={this.props.onChange} label="Search" expandable expandableIcon="search"/>
				</Header>
				<Drawer title="Menu">
					<Navigation>
						<Link to="/users" onClick={this.handleLinkClick}>Users</Link>
						<Link to="/contact" onClick={this.handleLinkClick}>Contact</Link>
						<Link href="https://github.com" target="_blank" onClick={this.handleLinkClick}>Github</Link>
					</Navigation>
				</Drawer>
				<Content style={{paddingTop: '30px'}}>
					{this.props.children}
				</Content>
			</Layout>
		);
	}
}
