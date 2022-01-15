import {describe, expect, it} from '@jest/globals';
import index from '../src/index.js';


const {create, ansi: A} = index;


describe('create crayon with specific box', () => {

    const box = Object.freeze({
        ccReset:   A.cc.reset,
        ccDim:     A.cc.dim,
        bgGreen:   A.bg.green,
        bgBlack:   A.bg.black,
        fgWhite:   A.fg.white,
        fgMagenta: A.fg.magenta,
    });

    it(
        'is a function',
        () => void expect(create({box})).toBeFun(),
    );

    const crayon = create({box});
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
        ['\x1b[2m DIM \x1b[0m', '{:ccDim:: DIM :}'],
        ['\x1b[35mmagenta FG\x1b[0m', '{:fgMagenta::magenta FG:}'],
        ['\x1b[40mBlackBG\x1b[0m', '{:bgBlack::BlackBG:}'],
        ['\x1b[37m\x1b[42mwhite on green\x1b[0m', '{:fgWhite+bgGreen::white on green:}'],
    ])(
        'returns created string %p for %p',
        expect(crayon).toMapExact,
    );
});
