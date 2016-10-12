/*
* @Author: nikunjb
* @Date:   2016-05-20 16:39:11
* @Last Modified by:   nikunjb
* @Last Modified time: 2016-05-20 16:39:14
*/

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import SidePane from './SidePane';
import MainApp from './MainApp';

import changeStep from '../actions/changeStep';

function mapStateToProps(state) {
    return {
        step: state.mainStore.step,
        code: state.mainStore.code,
        selectedIndex: state.mainStore.selectedIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changeStep: function() {
                dispatch(changeStep())
            }
        }
    };
}

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <SidePane {...this.props.step} change={this.props.actions.changeStep}/>
                <MainApp  {...this.props} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);