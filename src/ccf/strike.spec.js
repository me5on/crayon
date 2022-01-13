import {describe, expect, it} from '@jest/globals';
import strike from './strike.ccf.js';


describe('ccf/strike', () => {

    it(
        'is a function',
        () => void expect(strike).toBeFun(),
    );

    it.each([
        ['\x1b[9m\x1b[0m', null],
        ['\x1b[9m\x1b[0m', void (1), null],
        ['\x1b[9m\x1b[0m', '', void (1), null],
        ['\x1b[9msingle\x1b[0m', 'single'],
        ['\x1b[9masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(strike).toMapExact,
    );

});
