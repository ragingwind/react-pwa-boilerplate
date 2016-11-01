import React from 'react';
import AppShell from './AppShell';

import './App.css';

class App extends React.Component {
	handleSearchKeywordChanged(e) {

	}

	render() {
		return (
			<AppShell title="PWA with React" onChange={this.handleSearchKeywordChanged}>
				{this.props.children}
			</AppShell>
		);
	}
}

export default App;
