import {describe, expect, it} from '@jest/globals';
import bright from './bright.ccf.js';


describe('ccf/bright', () => {

    it(
        'is a function',
        () => void expect(bright).toBeFun(),
    );

    it.each([
        ['\x1b[1m\x1b[0m', null],
        ['\x1b[1m\x1b[0m', void (1), null],
        ['\x1b[1m\x1b[0m', '', void (1), null],
        ['\x1b[1msingle\x1b[0m', 'single'],
        ['\x1b[1masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(bright).toMapExact,
    );

});
