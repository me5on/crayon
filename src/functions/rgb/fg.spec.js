/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import fg from './fg.rgb.js';


describe('rgb/fg', () => {

    it(
        'is a function',
        () => void expect(fg).toBeFun(),
    );

    it.each([
        ['', null],
        ['', void (1), null],
        ['', '', void (1), null],
        ['', 'not a number'],
        ['', -2],
        ['', NaN],
        ['', 1, 2],
        ['', null, 2, 3],
        ['', 1, 'not a number', 3],
        ['\x1b[38;2;3;1;4m', 3.14, 1.4, 4],
        ['\x1b[38;2;1;2;3m', 1, 2, 3],
    ])(
        'returns string %p for %p',
        expect(fg).toMapExact,
    );

});
