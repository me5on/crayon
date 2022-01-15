import {describe, expect, it} from '@jest/globals';
import index from '../src/index.js';


const {create, ansi: A} = index;

describe('create crayon with specific box', () => {

    const crayon = create({
        syntax: {
            and: ',', esc: '', dot: '',
            bgn: '\\{', mid: ':', end: '\\}',
        },
        box:    {
            dim:  A.cc.dim,
            done: A.bg.green + A.fg.white,
            warn: A.bg.yellow + A.fg.black,
            info: A.bg.white + A.fg.blue,
        },
    });

    // noinspection SpellCheckingInspection
    it.each([
        // result, ...args
        [''],
        ['', null],
        ['regular text', 'regular text'],
        ['\x1b[2ma dim text\x1b[0m', '{dim:a dim text}'],
        ['\x1b[42m\x1b[37mDONE\x1b[0m', '{done:DONE}'],
        ['\x1b[43m\x1b[30mWARN\x1b[0m', '{warn:WARN}'],
        ['\x1b[2m\x1b[47m\x1b[34mwhatever\x1b[0m', '{dim,info:whatever}'],
    ])(
        'returns created string %p for %p',
        expect(crayon).toMapExact,
    );
});
