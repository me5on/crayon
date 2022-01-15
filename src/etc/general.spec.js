import {describe, expect, it} from '@jest/globals';
import general from './general.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('general', () => {

    it(
        'has the correct keys',
        () => expect(sortedKeys(general)).toEqual(['min', 'max', 'gu'].sort()),
    );

});
