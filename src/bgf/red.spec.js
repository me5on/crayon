import {describe, expect, it} from '@jest/globals';
import red from './red.bgf.js';


describe('fgf/red', () => {

    it(
        'is a function',
        () => void expect(red).toBeFun(),
    );

    it.each([
        ['\x1b[41m\x1b[0m', null],
        ['\x1b[41m\x1b[0m', void (1), null],
        ['\x1b[41m\x1b[0m', '', void (1), null],
        ['\x1b[41msingle\x1b[0m', 'single'],
        ['\x1b[41masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(red).toMapExact,
    );

});
