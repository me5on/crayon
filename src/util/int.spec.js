/* eslint-disable symbol-description,no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import int from './int.util.js';


describe('int', () => {

    it(
        'is a function',
        () => void expect(int).toBeFun(),
    );

    it.each([
        // result, ...args
        [NaN, null],
        [NaN, void (1), null],
        [NaN, []],
        [NaN, ['no', 'spaces', 'allowed']],
        [NaN, ['spaces', ' ', 'allowed']],
    ])(
        'returns NaN for %p',
        (_, $) => expect(int($)).toBeNaN(),
    );

    it.each([
        // result, ...args
        [1, [1, 2, 3]],
        [456, 456],
        [789, '789.1'],
    ])(
        'returns int %p for %p',
        expect(int).toMapExact,
    );

});
