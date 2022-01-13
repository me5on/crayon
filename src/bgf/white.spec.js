import {describe, expect, it} from '@jest/globals';
import white from './white.bgf.js';


describe('fgf/white', () => {

    it(
        'is a function',
        () => void expect(white).toBeFun(),
    );

    it.each([
        ['\x1b[47m\x1b[0m', null],
        ['\x1b[47m\x1b[0m', void (1), null],
        ['\x1b[47m\x1b[0m', '', void (1), null],
        ['\x1b[47msingle\x1b[0m', 'single'],
        ['\x1b[47masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(white).toMapExact,
    );

});
