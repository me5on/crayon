import {describe, expect, it} from '@jest/globals';
import yellow from './yellow.fgf.js';


describe('fgf/yellow', () => {

    it(
        'is a function',
        () => void expect(yellow).toBeFun(),
    );

    it.each([
        ['\x1b[33m\x1b[0m', null],
        ['\x1b[33m\x1b[0m', void (1), null],
        ['\x1b[33m\x1b[0m', '', void (1), null],
        ['\x1b[33msingle\x1b[0m', 'single'],
        ['\x1b[33masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(yellow).toMapExact,
    );

});
