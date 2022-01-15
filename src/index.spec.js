import {describe, expect, it} from '@jest/globals';
import index from './index.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


// eslint-disable-next-line max-lines-per-function
describe('index', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(index),
        ).toEqual(
            [
                'ansi', 'box', 'syntax', 'create',
                'ccf', 'fgf', 'bgf', 'idx', 'rgb',
            ].sort(),
        ),
    );

    it(
        'has fgf with the correct keys',
        () => expect(
            sortedKeys(index.fgf),
        ).toEqual(
            [
                'black', 'red', 'green', 'yellow',
                'blue', 'magenta', 'cyan', 'white', 'df',
            ].sort(),
        ),
    );

    it(
        'has bgf with the correct keys',
        () => expect(
            sortedKeys(index.bgf),
        ).toEqual(
            [
                'black', 'red', 'green', 'yellow',
                'blue', 'magenta', 'cyan', 'white', 'df',
            ].sort(),
        ),
    );

    it(
        'has idx with the correct keys',
        () => expect(sortedKeys(index.idx)).toEqual(['fg', 'bg'].sort()),
    );

    it(
        'has rgb with the correct keys',
        () => expect(sortedKeys(index.rgb)).toEqual(['fg', 'bg'].sort()),
    );


});
