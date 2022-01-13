import {describe, expect, it} from '@jest/globals';
import dim from './dim.ccf.js';


describe('ccf/dim', () => {

    it(
        'is a function',
        () => void expect(dim).toBeFun(),
    );

    it.each([
        ['\x1b[2m\x1b[0m', null],
        ['\x1b[2m\x1b[0m', void (1), null],
        ['\x1b[2m\x1b[0m', '', void (1), null],
        ['\x1b[2msingle\x1b[0m', 'single'],
        ['\x1b[2masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(dim).toMapExact,
    );

});
