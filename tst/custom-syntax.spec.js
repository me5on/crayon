import {describe, expect, it} from '@jest/globals';
import index from '../src/index.js';


const {create} = index;


describe('create crayon with specific syntax', () => {

    const syntax = Object.freeze({esc: 'X', bgn: 'B', mid: 'M', end: 'E', and: 'A', dot: '.'});

    it(
        'is a function',
        () => void expect(create({syntax})).toBeFun(),
    );

    const crayon = create({syntax});
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
        ['\x1b[2m dim \x1b[0m', 'Bcc.dimM dim E'],
        ['\x1b[35mmagenta FG\x1b[0m', 'Bfg.magentaMmagenta FGE'],
        ['\x1b[40mBlackBG\x1b[0m', 'Bbg.blackMBlackBGE'],
        ['\x1b[37m\x1b[42mwhite on green\x1b[0m', 'Bfg.whiteAbg.greenMwhite on greenE'],
    ])(
        'returns created string %p for %p',
        expect(crayon).toMapExact,
    );
});
