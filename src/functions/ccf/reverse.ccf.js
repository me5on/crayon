import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {reverse: REVERSE, reset: RESET} = A.cc;


const reverse = (

    (...$$) => REVERSE + fuse($$) + RESET

);


// noinspection JSUnusedGlobalSymbols
export default reverse;
