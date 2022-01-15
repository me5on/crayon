import {describe, expect, it} from '@jest/globals';
import replacer from './replacer.dsl.js';


// eslint-disable-next-line max-lines-per-function
describe('replacer replaces escapes', () => {

    const replace = replacer();

    it.each([
        // result, {dir, txt}
        [''],
        ['', null],
        ['', []],
        ['', {}],
        ['fg.red', {dir: '', txt: 'fg.red'}],
        ['fg.red', {dir: 'fg@.red', txt: 'fg.red'}],
        ['\x1b[31m\x1b[0m', {dir: 'fg.red', txt: ''}],
        ['\x1b[31mfg.red\x1b[0m', {dir: 'fg.red', txt: 'fg.red'}],
        ['\x1b[31mbefore :} after\x1b[0m', {dir: 'fg.red', txt: 'before @:} after'}],
        ['\x1b[31m{:{::::::}:}..++@@\x1b[0m', {dir: 'fg.red', txt: '@{:{:@::::@:}:}@..@++@@@'}],
        ['\x1b[31m{: {: :: :: :} :} . . + + @ @\x1b[0m', {dir: 'fg.red', txt: '@{: {: @:: :: @:} :} @. . @+ + @@ @'}],
    ])(
        'into %p from %p, %p, %p',
        expect(replace).toMapExact,
    );

});
