import {describe, expect, it} from '@jest/globals';
import df from './df.fgf.js';


describe('fgf/df', () => {

    it(
        'is a function',
        () => void expect(df).toBeFun(),
    );

    it.each([
        ['\x1b[38m\x1b[0m', null],
        ['\x1b[38m\x1b[0m', void (1), null],
        ['\x1b[38m\x1b[0m', '', void (1), null],
        ['\x1b[38msingle\x1b[0m', 'single'],
        ['\x1b[38masf 123ASDF!@#$\x1b[0m', 'asf 123', 'ASDF', '!@#$'],
    ])(
        'returns string %p for %p',
        expect(df).toMapExact,
    );

});
