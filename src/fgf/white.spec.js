import {describe, expect, it} from '@jest/globals';
import white from './white.fgf.js';


describe('fgf/white', () => {

    it(
        'is a function',
        () => void expect(white).toBeFun(),
    );

    it.each([
        ['\x1b[37m\x1b[0m', null],
        ['\x1b[37m\x1b[0m', void (1), null],
        ['\x1b[37m\x1b[0m', '', void (1), null],
        ['\x1b[37msingle\x1b[0m', 'single'],
        ['\x1b[37masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(white).toMapExact,
    );

});
