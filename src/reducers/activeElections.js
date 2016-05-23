/*
* @Author: NikunjB
* @Date:   2016-05-23 14:03:20
* @Last Modified by:   NikunjB
* @Last Modified time: 2016-05-23 14:36:32
*/

'use strict';

var activeElections = {
    data: [
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

export default function activeElections(state=activeElections, action) {
    switch(action.type) {
        case 'EXPAND_ENTITY':
        default:
            return Object.assign(true, {}, state);
    }
}