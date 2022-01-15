import A from '../../etc/ansi.const.js';
import C from '../../etc/general.const.js';
import int from '../../util/int.util.js';


const {background: BG, stop: STOP} = A.c1;


const bg = (

    $ => {

        const index = int($);

        return (
            C.min <= index && C.max >= index
                ? BG + index + STOP
                : ''
        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default bg;
