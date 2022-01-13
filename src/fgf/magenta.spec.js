import {describe, expect, it} from '@jest/globals';
import magenta from './magenta.fgf.js';


describe('fgf/magenta', () => {

    it(
        'is a function',
        () => void expect(magenta).toBeFun(),
    );

    it.each([
        ['\x1b[35m\x1b[0m', null],
        ['\x1b[35m\x1b[0m', void (1), null],
        ['\x1b[35m\x1b[0m', '', void (1), null],
        ['\x1b[35msingle\x1b[0m', 'single'],
        ['\x1b[35masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(magenta).toMapExact,
    );

});
