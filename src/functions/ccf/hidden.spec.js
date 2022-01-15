import {describe, expect, it} from '@jest/globals';
import hidden from './hidden.ccf.js';


describe('hidden', () => {

    it(
        'is a function',
        () => void expect(hidden).toBeFun(),
    );

    it.each([
        ['\x1b[8m\x1b[0m', null],
        ['\x1b[8m\x1b[0m', void (1), null],
        ['\x1b[8m\x1b[0m', '', void (1), null],
        ['\x1b[8msingle\x1b[0m', 'single'],
        ['\x1b[8masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(hidden).toMapExact,
    );

});
