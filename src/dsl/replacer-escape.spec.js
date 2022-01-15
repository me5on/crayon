import {describe, expect, it} from '@jest/globals';
import replacer from './replacer.dsl.js';


// eslint-disable-next-line max-lines-per-function
describe('replacer escapes', () => {


    const replace = replacer();
    const SKIP = null;

    it.each([
        // result, matched, directives, text
        [''],
        ['', null],
        ['', []],
        ['', {}],
        ['\x1b[31m red foreground \x1b[0m', SKIP, ' fg.red ', ' red foreground '],
        ['\x1b[44m blue background \x1b[0m', SKIP, ' bg.blue ', ' blue background '],
        ['\x1b[41m\x1b[33m red bg and yellow fg \x1b[0m', SKIP, ' bg.red + fg.yellow', ' red bg and yellow fg '],
    ])(
        'replaces into %p from %p, %p, %p',
        (...$$) => {

            const [expected, ...args] = $$;
            const actual = replace(...args);

            expect(actual).toBe(expected);
        },
    );


});
