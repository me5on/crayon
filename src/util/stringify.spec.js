/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import stringify from './stringify.util.js';


describe('stringify', () => {

    it(
        'is a function',
        () => void expect(stringify).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['123', 123],
        ['  ', '  '],
    ])(
        'returns string %p for %p',
        expect(stringify).toMapExact,
    );

});
