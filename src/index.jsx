import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>Welcome to the world of React</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
