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
        [
            '(?<!@)\\{:(?:(?<dir>[\\s(?<!@)\\+(?<!@).\\w]+)(?<!@)::)*(?<txt>.*?)(?<!@):\\}',
            void (1),
        ],
        [
            '(?<!0)1(?:(?<dir>[\\s(?<!0)4(?<!0)5\\w]+)(?<!0)2)*(?<txt>.*?)(?<!0)3',
            {esc: 0, bgn: 1, mid: 2, end: 3, and: 4, dot: 5},
        ],
        [
            '(?<!X)B(?:(?<dir>[\\s(?<!X)A(?<!X)D\\w]+)(?<!X)M)*(?<txt>.*?)(?<!X)E',
            {esc: 'X', bgn: 'B', mid: 'M', end: 'E', and: 'A', dot: 'D'},
        ],
    ])(
        'returns RegExp with pattern %p for %p',
        (pattern, syntax) => expect(re(syntax).source).toBe(pattern),
    );

});
