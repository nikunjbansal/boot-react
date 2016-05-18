import React, { Component } from 'react';
import { render } from 'react-dom';
import FixedTable from './table/FixedTable';

import 'fixed-data-table/dist/fixed-data-table.css';

export class App extends React.Component {
	render() {
		return (
        <FixedTable />
	);
	}
}

render(<App/>, document.querySelector("#myApp"));
