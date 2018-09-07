import React, { Component } from 'react';

class FavoriteFood extends Component {
	render(props) {

		return (<p>{this.props.food}</p>);
	}
}
export default FavoriteFood;