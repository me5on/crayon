import A from '../../etc/ansi.const.js';
import C from '../../etc/general.const.js';
import int from '../../util/int.util.js';


const {foreground: FG, stop: STOP} = A.c1;


const fg = (

    $ => {

        const index = int($);

        return (
            C.min <= index && C.max >= index
                ? FG + index + STOP
                : ''
        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default fg;
