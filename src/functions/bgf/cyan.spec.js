import {describe, expect, it} from '@jest/globals';
import cyan from './cyan.bgf.js';


describe('fgf/cyan', () => {

    it(
        'is a function',
        () => void expect(cyan).toBeFun(),
    );

    it.each([
        ['\x1b[46m\x1b[0m', null],
        ['\x1b[46m\x1b[0m', void (1), null],
        ['\x1b[46m\x1b[0m', '', void (1), null],
        ['\x1b[46msingle\x1b[0m', 'single'],
        ['\x1b[46masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(cyan).toMapExact,
    );

});
