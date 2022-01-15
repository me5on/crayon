/* eslint-disable symbol-description,no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import fuse from './fuse.util.js';


describe('fuse', () => {

    it(
        'is a function',
        () => void expect(fuse).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', null],
        ['', void (1), null],
        ['', null, null],
        ['', []],
        ['Symbol()', [Symbol()]],
        ['Symbol(asdf)', [Symbol('asdf')]],
        ['123', [1, 2, 3]],
        ['nospacesallowed', ['no', 'spaces', 'allowed']],
        ['spaces allowed', ['spaces', ' ', 'allowed']],
    ])(
        'returns fused string %p for possible array %p',
        expect(fuse).toMapExact,
    );

});
