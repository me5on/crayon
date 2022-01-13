import {describe, expect, it} from '@jest/globals';
import box from './box.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('box', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(box),
        ).toEqual(
            [
                'cc.reset', 'cc.bright', 'cc.dim', 'cc.underscore',
                'cc.blink', 'cc.reverse', 'cc.hidden', 'cc.strike',
                'fg.black', 'fg.red', 'fg.green', 'fg.yellow',
                'fg.blue', 'fg.magenta', 'fg.cyan', 'fg.white',
                'fg.df',
                'bg.black', 'bg.red', 'bg.green', 'bg.yellow',
                'bg.blue', 'bg.magenta', 'bg.cyan', 'bg.white',
                'bg.df',
            ].sort(),
        ),
    );


});
