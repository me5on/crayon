import {describe, expect, it} from '@jest/globals';
import re from './re.dsl.js';


describe('re', () => {

    it(
        'is a function',
        () => void expect(re).toBeFun(),
    );

    it.each([
        null,
        void (1),
        {},
        [],
    ])(
        'returns RegExp for %p',
        $ => {
            const actual = re($);
            expect(actual).toBeInstanceOf(RegExp);
            expect(actual.flags).toBe('gu');
        },
    );

    it.each([
        ['(?<!@)\\{:([\\s+.\\w]+)(?<!@)::(.*?)(?<!@):\\}', void (1)],
        ['(?<!0)1([\\s45\\w]+)(?<!0)2(.*?)(?<!0)3', {esc: 0, bgn: 1, mid: 2, end: 3, and: 4, dot: 5}],
    ])(
        'returns RegExp with pattern %p for %p',
        (pattern, syntax) => expect(re(syntax).source).toBe(pattern),
    );

});
