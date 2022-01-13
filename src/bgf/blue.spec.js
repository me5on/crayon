import {describe, expect, it} from '@jest/globals';
import blue from './blue.bgf.js';


describe('fgf/blue', () => {

    it(
        'is a function',
        () => void expect(blue).toBeFun(),
    );

    it.each([
        ['\x1b[44m\x1b[0m', null],
        ['\x1b[44m\x1b[0m', void (1), null],
        ['\x1b[44m\x1b[0m', '', void (1), null],
        ['\x1b[44msingle\x1b[0m', 'single'],
        ['\x1b[44masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(blue).toMapExact,
    );

});
