import {describe, expect, it} from '@jest/globals';
import black from './black.fgf.js';


describe('fgf/black', () => {

    it(
        'is a function',
        () => void expect(black).toBeFun(),
    );

    it.each([
        ['\x1b[30m\x1b[0m', null],
        ['\x1b[30m\x1b[0m', void (1), null],
        ['\x1b[30m\x1b[0m', '', void (1), null],
        ['\x1b[30msingle\x1b[0m', 'single'],
        ['\x1b[30masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(black).toMapExact,
    );

});
