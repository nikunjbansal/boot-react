/*
* @Author: nikunjb
* @Date:   2016-05-20 16:46:13
* @Last Modified by:   nikunjb
* @Last Modified time: 2016-05-20 16:57:23
*/

'use strict';

import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap';

export default class NavBarComponent extends Component {
    constructor() {
        super();
        this.state = {
            activeKey: '/'
        }
    }
    componentDidMount() {
        var defaultKey = '/';
        var hash = window.location.hash;
        var found = hash.match(/#\/(.*?)\?/);
        if(found.indexOf('new_regs') !== -1) {
            defaultKey = 'new_regs';
        } else if(found.indexOf('dashboard_data') !== -1) {
            defaultKey = 'dashboard_data';
        } else if(found.indexOf('cumulative_data') !== -1) {
            defaultKey = 'cumulative_data';
        }
        this.handleSelect(defaultKey);
    }
    handleSelect(selectedKey) {
        //event.preventDefault();
        hashHistory.push(selectedKey);
        this.setState({activeKey: selectedKey});
    }
    isSelected(value) {
        return (value === this.state.activeKey) ? 'active' : '';
    }
    render() {
        return (
                <span>
                    <ul className="nav nav-pills msgCenter-nav-justified disp_inlb dealcenter_nav">
                        <li className={this.isSelected('/')}>
                            <a onClick={this.handleSelect.bind(this,'/')}>Graphs</a>
                        </li>
                        <li className={this.isSelected('new_regs')}>
                            <a onClick={this.handleSelect.bind(this,'new_regs')}>New Registrants
                            </a>
                        </li>
                        <li className={this.isSelected('dashboard_data')}>
                            <a onClick={this.handleSelect.bind(this,'dashboard_data')}>
                                Data
                            </a>
                        </li>
                        <li className={this.isSelected('cumulative_data')}>
                            <a onClick={this.handleSelect.bind(this,'cumulative_data')}>
                                Cumulative Data
                            </a>
                        </li>
                    </ul>
                </span>
        );
    }
}