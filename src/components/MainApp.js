import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

var style = {
	'width': '75%',
	'border': '2px solid black',
	'display': 'inline-block'
};

export default class MainApp extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={style}>
				<Code {...this.props}/>
				<Assembly {...this.props} />
			</div>
		);
	}
}

class Code extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='centerDiv'>
				<div>
					{'Code'}
				</div>
				<div>
					{((props, code)=>{
						return code.map(function(elem, index) {
							let className = '';
							if(index == props.selectedIndex) {
								className = 'highlight';
							}
							return (
								<p key={index} className={className}>
									{elem}
								</p>
							);
						})
					})(this.props, this.props.code)}
				</div>
			</div>
		);
	}
}

class Assembly extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div>
					{'Assembly'}
				</div>
				<div>
					{((main, code)=>{
						return code.map(function(elem, index) {
							var className = '';
							if(index>=main.selectedStart && index <= main.selectedEnd) {
								className = 'colorText';
							}
							return <p key={elem} className={className}>{elem}</p>
						})
					})(this.props.step.main, this.props.step.main.assembly)}
				</div>
			</div>
		);
	}
}