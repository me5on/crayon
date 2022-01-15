import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {hidden: HIDDEN, reset: RESET} = A.cc;


const hidden = (

    (...$$) => HIDDEN + fuse($$) + RESET

);


// noinspection JSUnusedGlobalSymbols
export default hidden;
