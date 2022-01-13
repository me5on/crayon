import {describe, expect, it} from '@jest/globals';
import ansi from './ansi.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


// eslint-disable-next-line max-lines-per-function
describe('ansi', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(ansi),
        ).toEqual(
            ['cc', 'fg', 'bg', 'c1', 'c3'].sort(),
        ),
    );

    it(
        'has cc with the correct keys',
        () => expect(
            sortedKeys(ansi.cc),
        ).toEqual(
            ['blink', 'bright', 'dim', 'hidden', 'reset', 'reverse', 'strike', 'underscore'].sort(),
        ),
    );

    it(
        'has fg with the correct keys',
        () => expect(
            sortedKeys(ansi.fg),
        ).toEqual(
            ['black', 'blue', 'cyan', 'df', 'green', 'magenta', 'red', 'white', 'yellow'].sort(),
        ),
    );

    it(
        'has bg with the correct keys',
        () => expect(
            sortedKeys(ansi.bg),
        ).toEqual(
            ['black', 'blue', 'cyan', 'df', 'green', 'magenta', 'red', 'white', 'yellow'].sort(),
        ),
    );

    it(
        'has c1 with the correct keys',
        () => expect(
            sortedKeys(ansi.c1),
        ).toEqual(
            ['foreground', 'background', 'stop'].sort(),
        ),
    );

    it(
        'has c3 with the correct keys',
        () => expect(
            sortedKeys(ansi.c3),
        ).toEqual(
            ['foreground', 'background', 'separator', 'stop'].sort(),
        ),
    );

});
