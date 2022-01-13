import {describe, expect, it} from '@jest/globals';
import blue from './blue.fgf.js';


describe('fgf/blue', () => {

    it(
        'is a function',
        () => void expect(blue).toBeFun(),
    );

    it.each([
        ['\x1b[34m\x1b[0m', null],
        ['\x1b[34m\x1b[0m', void (1), null],
        ['\x1b[34m\x1b[0m', '', void (1), null],
        ['\x1b[34msingle\x1b[0m', 'single'],
        ['\x1b[34masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(blue).toMapExact,
    );

});
