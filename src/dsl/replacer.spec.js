import {describe, expect, it} from '@jest/globals';
import replacer from './replacer.dsl.js';


// eslint-disable-next-line max-lines-per-function
describe('replace', () => {

    it(
        'is a function',
        () => void expect(replacer).toBeFun(),
    );

    it.each([
        // result, ...args
        [void (1)],
        [null],
        [''],
        [[]],
        [{}],
        [{box: {a: 1, b: 2, c: 3}}],
        [{box: {a: 1, b: 2, c: 3}, syntax: {and: '/'}}],
    ])(
        'returns replace function %p for %p',
        $ => expect(replacer($)).toBeFun(),
    );

    describe('returns function replace that', () => {

        const replace = replacer();

        it(
            'is a function',
            () => void expect(replace).toBeFun(),
        );

        it.each([
            // result, matched, directives, text
            [''],
            ['', null],
            ['', []],
            ['', {}],
            ['\x1b[31m red foreground \x1b[0m', '(: fg.red : red foreground :)', ' fg.red ', ' red foreground '],
            ['\x1b[44m blue background \x1b[0m', '(: bg.blue : blue background :)', ' bg.blue ', ' blue background '],
            ['\x1b[41m\x1b[33m red bg and yellow fg \x1b[0m', '(: bg.red + fg.yellow : red bg and yellow fg :)', ' bg.red + fg.yellow', ' red bg and yellow fg '],
        ])(
            'replaces into %p from %p',
            (...$$) => {

                const [expected, ...args] = $$;
                const actual = replace(...args);

                expect(actual).toBe(expected);
            },
        );


    });

});
