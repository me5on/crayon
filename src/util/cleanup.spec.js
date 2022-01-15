/* eslint-disable symbol-description,no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import cleanup from './cleanup.util.js';


describe('cleanup', () => {

    it(
        'is a function',
        () => void expect(cleanup).toBeFun(),
    );

    it.each([
        // result, escaped, text
        [''],
        ['', null],
        ['', void (1), null],
        ['', null, null],
        ['', [], []],
        ['', '', ''],
        ['abc', /(.*)/gu, 'abc'],
        ['123', /x(\d*)x(\d*)x/gu, 'x123x456x'],
        ['B 1 M 2 M 3 M 4 E 5 E', /X(B|M|E|A|.)/gu, 'B 1 XM 2 XM 3 M 4 XE 5 E'],
    ])(
        'returns cleanupd string %p for possible array %p',
        expect(cleanup).toMapExact,
    );

});
