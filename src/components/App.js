import React from 'react';
import AppShell from './AppShell';

class App extends React.Component {
	handleSearchKeywordChanged(e) {
		console.log('Search for', e.target.value);
	}

	render() {
		return (
			<AppShell title="PWA with React" onChange={this.handleSearchKeywordChanged}>
				{this.props.children}
			</AppShell>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.node
};

export default App;
