/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import template from './template.util.js';


describe('template', () => {

    it(
        'is a function',
        () => void expect(template).toBeFun(),
    );

    it.each([
        // result, strings, expressions
        [''],
        ['', void (1)],
        ['', null],
        ['  ', '  '],
        ['', 123],
        ['123', '123'],
        ['123', [1, 2, 3]],
        ['a1b2c', ['a', 'b', 'c'], [1, 2, 3, 4]],
    ])(
        'returns string %p for %p',
        expect(template).toMapExact,
    );

});
