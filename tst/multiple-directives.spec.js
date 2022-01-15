import {describe, expect, it} from '@jest/globals';
import index from '../src/index.js';


const {create} = index;
const crayon = create();


describe('use multiple directives', () => {

    it.each([
        // result, ...args
        [
            '\x1b[31mthis is red\x1b[0m and this is not, but \x1b[34mthis is blue\x1b[0m',
            '{:fg.red::this is red:} and this is not, but {:fg.blue::this is blue:}',
        ],
        [
            '\x1b[31mred goes pass escaped :} until unescaped end is found\x1b[0m and it stops',
            '{:fg.red::red goes pass escaped @:} until unescaped end is found:} and it stops',
        ],
    ])(
        'returns colored string %p for %p',
        expect(crayon).toMapExact,
    );
});
