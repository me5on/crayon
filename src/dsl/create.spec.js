import {describe, expect, it} from '@jest/globals';
import create from './create.dsl.js';


// eslint-disable-next-line max-lines-per-function
describe('create', () => {

    it(
        'is a function',
        () => void expect(create).toBeFun(),
    );

    it.each([
        // result, ...args
        [void (1)],
        [null],
        [''],
        [{}],
        [{box: null, syntax: null}],
        [{box: '', syntax: ''}],
    ])(
        'returns function for for %p',
        () => void expect(create).toBeFun(),
    );

    describe('generates crayon for trivial values that', () => {

        it(
            'is a function',
            () => void expect(create()).toBeFun(),
        );

        const crayon = create();
        // noinspection SpellCheckingInspection
        it.each([
            // result, ...args
            [''],
            ['', null],
            ['', void (1), null],
            ['', null, null],
            ['', []],
            ['[object Object]', {}],
            ['regular text', 'regular text'],
            ['\x1b[2m DIM \x1b[0m', '{:cc.dim:: DIM :}'],
            ['\x1b[35mmagenta FG\x1b[0m', '{:fg.magenta::magenta FG:}'],
            ['\x1b[40mBlackBG\x1b[0m', '{:bg.black::BlackBG:}'],
            ['\x1b[37m\x1b[42mwhite on green\x1b[0m', '{:fg.white+bg.green::white on green:}'],
        ])(
            'returns created string %p for %p',
            expect(crayon).toMapExact,
        );
    });

});
