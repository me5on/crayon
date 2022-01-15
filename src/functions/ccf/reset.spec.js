import {describe, expect, it} from '@jest/globals';
import reset from './reset.ccf.js';


describe('ccf/reset', () => {

    it(
        'is a function',
        () => void expect(reset).toBeFun(),
    );

    it.each([
        ['\x1b[0m', null],
        ['\x1b[0m', void (1), null],
        ['\x1b[0m', '', void (1), null],
        ['\x1b[0msingle', 'single'],
        ['\x1b[0masf 123ASDF!@#$', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(reset).toMapExact,
    );

});
