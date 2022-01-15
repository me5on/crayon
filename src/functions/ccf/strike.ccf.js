import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {strike: STRIKE, reset: RESET} = A.cc;


const strike = (

    (...$$) => STRIKE + fuse($$) + RESET

);


// noinspection JSUnusedGlobalSymbols
export default strike;
