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
        'returns replace function %p for %p, %p, %p',
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
            ['\x1b[31m red foreground \x1b[0m', {dir: ' fg.red ', txt: ' red foreground '}],
            ['\x1b[44m blue background \x1b[0m', {dir: ' bg.blue ', txt: ' blue background '}],
            [
                '\x1b[41m\x1b[33m red bg and yellow fg \x1b[0m',
                {dir: ' bg.red + fg.yellow', txt: ' red bg and yellow fg '},
            ],
        ])(
            'replaces into %p from %p, %p, %p',
            expect(replace).toMapExact,
        );

    });
});
