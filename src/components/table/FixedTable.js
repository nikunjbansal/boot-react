/*
* @Author: nikunjb
* @Date:   2016-05-18 00:57:56
* @Last Modified by:   nikunjb
* @Last Modified time: 2016-05-18 17:02:33
*/

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell, ColumnGroup} from 'fixed-data-table';

class VotesRadioDiv extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            
        };
        return (
            <div style={style}>
                <span>Votes</span>
                <input type="radio" name="voteType" align="left" value="percent" />Percent
                <input type="radio" name="voteType" value="oFace" />OFace
            </div>
        );
    }
}

class VotesDivisionDiv extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var divStyle = {
            textAlign: 'center'
        };
        var spanStyle = {
            margin: '0px 50px 0px 0px',
            border: '1px solid',
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <span style={spanStyle} width={50}>Yes</span>
                <span style={spanStyle}>No</span>
                <span style={spanStyle}>Unvoted</span>
            </div>
        );
    }
}

class TreeCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var data=this.props.custodians, rowIndex=this.props.rowIndex;
        return (
            <Cell>
                <div>
                    {((custodians, rowIndex)=>{
                        if(custodians[rowIndex] != undefined) {
                            var name = [];
                            name.push(<div onClick={this.props.collapsable} key={'Cust'+rowIndex}><p>{custodians[rowIndex].memberName}</p></div>);
                            return name;
                        }
                    })(data, rowIndex)}
                </div>
            </Cell>
        );
    }
}

export default class FixedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custodians: [
                {
                    memberName: 'Mike',
                    level: 'cust',
                    id: 'DV111',
                    Oface: 20000,
                    UnVoted: '20%'
                },
                {
                    memberName: 'Dave',
                    level: 'cust',
                    id: 'DV111',
                    Oface: 20000,
                    UnVoted: '20%'
                }
            ]
        };
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(index) {
        this.setState({
            custodians: [
                {
                    memberName: 'Mike',
                    level: 'cust',
                    id: 'DV111',
                    Oface: 20000,
                    UnVoted: '20%'
                },
                {
                    memberName: 'SLMA 2008-1 CL A',
                    level: 'deal',
                    id: '63938',
                    Oface: 20000,
                    UnVoted: '20%',
                    isVisible: 1
                },
                {
                    memberName: 'Dave',
                    level: 'cust',
                    id: 'DV111',
                    Oface: 20000,
                    UnVoted: '20%'
                }
            ]
        });
    }

    render() {
        var custodians = this.state.custodians;
        var deals = this.state.deals;
            return (
              <Table
                rowHeight={50}
                rowsCount={Object.keys(custodians).length}
                width={800}
                height={5000}
                headerHeight={50}
                groupHeaderHeight={70}>
                <ColumnGroup
                    header={<Cell>
                                <div>
                                    <div>djisjdjdisjd</div>
                                    <div>djisjdjdisjd</div>
                                </div>
                        </Cell>}
                    width={400}>
                    <Column
                      header={<Cell>Col 1</Cell>}
                      cell={({rowIndex}) => (
                        <TreeCell custodians={custodians} rowIndex={rowIndex} collapsable={this.toggleExpand}/>
                      )}
                      width={200}
                    />
                    <Column
                      header={<Cell>Col 2</Cell>}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['Oface']}
                                </Cell>
                            );
                        }
                      }}
                      width={200}
                    />
                </ColumnGroup>
                <ColumnGroup
                    header={<Cell>
                                <div>
                                    <VotesRadioDiv />
                                    <VotesDivisionDiv />
                                </div>
                        </Cell>}
                    width={150}>
                    <Column
                      header={<Cell>Col 3</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                    <Column
                      header={<Cell>Col 3dede</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                    <Column
                      header={<Cell>Col 3</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                    <Column
                      header={<Cell>Col 3</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                    <Column
                      header={<Cell>Col 3</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                    <Column
                      header={<Cell>Col 3</Cell>}
                      flexGrow={1}
                      cell={({rowIndex}) => {
                        if(custodians[rowIndex] != undefined) {
                            return (
                                <Cell>
                                  Data: {custodians[rowIndex]['UnVoted']}
                                </Cell>
                            );
                        }
                      }}
                      width={50}
                    />
                </ColumnGroup>
              </Table>
            );
}
}
