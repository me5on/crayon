import {describe, expect, it} from '@jest/globals';
import blink from './blink.ccf.js';


describe('ccf/blink', () => {

    it(
        'is a function',
        () => void expect(blink).toBeFun(),
    );

    it.each([
        ['\x1b[5m\x1b[0m', null],
        ['\x1b[5m\x1b[0m', void (1), null],
        ['\x1b[5m\x1b[0m', '', void (1), null],
        ['\x1b[5msingle\x1b[0m', 'single'],
        ['\x1b[5masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(blink).toMapExact,
    );

});
