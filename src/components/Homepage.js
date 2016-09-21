import React, { Component } from 'react';


export default class Homepage extends Component {
	render () {
		console.log('HOMEPAGE RENDER', this.props);

		return <h1>Homepage</h1>
	}
}
