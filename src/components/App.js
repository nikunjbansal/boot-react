/*
* @Author: nikunjb
* @Date:   2016-05-20 16:39:11
* @Last Modified by:   nikunjb
* @Last Modified time: 2016-05-20 16:39:14
*/

'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavBarComponent from './NavBarComponent';

export default class App extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="AppContainer col-sm-12 sec">
                <div className="inner_content01">
                    <NavBarComponent />
                    <div className="tab-content dv-deal">    
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}