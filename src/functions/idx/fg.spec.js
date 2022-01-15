/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import fg from './fg.idx.js';


describe('idx/fg', () => {

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
        ['\x1b[38;5;3m', 3.14],
        ['\x1b[38;5;1m', 1],
    ])(
        'returns string %p for %p',
        expect(fg).toMapExact,
    );

});
