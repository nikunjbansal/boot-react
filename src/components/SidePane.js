import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class SidePane extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={style}>
				<h3>{'Introduction to Stack'}</h3>
				<h6>{this.props.sidePane.title}</h6>
				<p>{this.props.sidePane.text}</p>
				<a onClick={this.props.change}>Step</a>
			</div>
		);
	}
}

var style = {
	'width': '24%',
	'border': '2px solid black',
	'float': 'left',
	'display': 'inline-block',
	'height': '500px'
};