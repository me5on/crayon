import {describe, expect, it} from '@jest/globals';
import syntax from './syntax.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('syntax', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(syntax),
        ).toEqual(
            ['esc', 'bgn', 'end', 'mid', 'and', 'dot'].sort(),
        ),
    );

});
