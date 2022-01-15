import {describe, expect, it} from '@jest/globals';
import red from './red.fgf.js';


describe('fgf/red', () => {

    it(
        'is a function',
        () => void expect(red).toBeFun(),
    );

    it.each([
        ['\x1b[31m\x1b[0m', null],
        ['\x1b[31m\x1b[0m', void (1), null],
        ['\x1b[31m\x1b[0m', '', void (1), null],
        ['\x1b[31msingle\x1b[0m', 'single'],
        ['\x1b[31masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(red).toMapExact,
    );

});
