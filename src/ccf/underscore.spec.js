import {describe, expect, it} from '@jest/globals';
import underscore from './underscore.ccf.js';


describe('ccf/underscore', () => {

    it(
        'is a function',
        () => void expect(underscore).toBeFun(),
    );

    it.each([
        ['\x1b[4m\x1b[0m', null],
        ['\x1b[4m\x1b[0m', void (1), null],
        ['\x1b[4m\x1b[0m', '', void (1), null],
        ['\x1b[4msingle\x1b[0m', 'single'],
        ['\x1b[4masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(underscore).toMapExact,
    );

});
