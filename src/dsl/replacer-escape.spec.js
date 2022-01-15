import {describe, expect, it} from '@jest/globals';
import replacer from './replacer.dsl.js';


// eslint-disable-next-line max-lines-per-function
describe('replacer escapes', () => {

    const replace = replacer();
    const SKIP = null;

    it.skip.each([
        // result, matched, directives, text
        [''],
        ['', null],
        ['', []],
        ['', {}],
        ['fg.red', SKIP, '', 'fg.red'],
        ['fg.red', SKIP, 'fg@.red', 'fg.red'],
        ['\x1b[31m\x1b[0m', SKIP, 'fg.red', ''],
        ['\x1b[31mfg.red\x1b[0m', SKIP, 'fg.red', 'fg.red'],
        ['\x1b[31mfg.red\x1b[0m', SKIP, 'fg.red', 'before @:} after'],
        // ['\x1b[44m blue background \x1b[0m', SKIP, ' bg.blue ', ' blue background '],
        // ['\x1b[41m\x1b[33m red bg and yellow fg \x1b[0m', SKIP, ' bg.red + fg.yellow', ' red bg and yellow fg '],
    ])(
        'into %p from %p, %p, %p',
        expect(replace).toMapExact,
    );

});
