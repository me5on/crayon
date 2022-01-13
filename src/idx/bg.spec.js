/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import bg from './bg.idx.js';


describe('idx/bg', () => {

    it(
        'is a function',
        () => void expect(bg).toBeFun(),
    );

    it.each([
        ['', null],
        ['', void (1), null],
        ['', '', void (1), null],
        ['', 'not a number'],
        ['', -2],
        ['', NaN],
        ['\x1b[48;5;3m', 3.14],
        ['\x1b[48;5;1m', 1],
    ])(
        'returns string %p for %p',
        expect(bg).toMapExact,
    );

});
