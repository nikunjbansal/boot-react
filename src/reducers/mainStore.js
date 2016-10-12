/*
* @Author: NikunjB
* @Date:   2016-05-23 14:03:20
* @Last Modified by:   NikunjB
* @Last Modified time: 2016-05-23 14:36:32
*/

'use strict';

var mainStore = {
    code: [
        'void  function2(void) {',
        '\tchar small[12];',
        '\tfgets(small,12,stdin);',
        '\tprintf("%s\n", small);',
        '}',
        'function1() {  ',
        ' ',
        'function2();printf("Good Bye");'
    ],
    step: {
        sidePane: {
            title: 'Dynamic Title',
            text: 'The CODE window loads a sample C program, which accepts a string input from the user, and prints this value to STDIO. The main() method is the entry point of the sample C program, which  upon execution, pushes the value of %ebp register on the stack. This is set to NULL'
        },
        main: {
            selectedStart: 0,
            selectedEnd: 1,
            assembly: [
                '0x80484c8 (function1):         pushl  %ebp',
                '0x80484c9 (function1+1):     movl   %esp,%ebp'
            ]
        }
    },
    selectedIndex: 5
};

export default function mainStore(state=mainStore, action) {
    switch(action.type) {
        case 'CHANGE_CURRENT_STEP': {
            var store = Object.assign(true, {}, state);

            store.step.sidePane.text = 'The test() function is then invoked by main() using the "call" instruction.   The call instruction, will call the test method which is mapped on address 0x80484a0.   However, before branching out to the "test" method, it first saves the next instruction\'s address 0x80484d0 on the stack.   It saves this address, to branch back to the execution, once test() method has finished execution';
            store.selectedIndex = 7;

            store.step.main.assembly.push(
                '0x80484cb (function1+3): call 0x80484a0 (function2)',
                '0x80484d0 (function1+8): call 0x80583c9 (printf)',
                '0x80484e4 (function1+13): leave'
            );

            store.step.main.selectedStart = 2,
            store.step.main.selectedEnd = 4;

            return store;

        }
        default:
            return Object.assign(true, {}, state);
    }
}