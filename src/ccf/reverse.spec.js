import {describe, expect, it} from '@jest/globals';
import reverse from './reverse.ccf.js';


describe('ccf/reverse', () => {

    it(
        'is a function',
        () => void expect(reverse).toBeFun(),
    );

    it.each([
        ['\x1b[7m\x1b[0m', null],
        ['\x1b[7m\x1b[0m', void (1), null],
        ['\x1b[7m\x1b[0m', '', void (1), null],
        ['\x1b[7msingle\x1b[0m', 'single'],
        ['\x1b[7masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(reverse).toMapExact,
    );

});
