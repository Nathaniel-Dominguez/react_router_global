import React, { Component } from 'react';

class FavoriteMovie extends Component {

	render(props) {
		return (
			<div>
				<h1>Title: {this.props.title}</h1>
				<h3>About: {this.props.about}</h3>
			</div>
		);
	}
}

export default FavoriteMovie;