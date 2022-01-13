import {describe, expect, it} from '@jest/globals';
import green from './green.fgf.js';


describe('fgf/green', () => {

    it(
        'is a function',
        () => void expect(green).toBeFun(),
    );

    it.each([
        ['\x1b[32m\x1b[0m', null],
        ['\x1b[32m\x1b[0m', void (1), null],
        ['\x1b[32m\x1b[0m', '', void (1), null],
        ['\x1b[32msingle\x1b[0m', 'single'],
        ['\x1b[32masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(green).toMapExact,
    );

});
