import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {dim: DIM, reset: RESET} = A.cc;


const dim = (

    (...$$) => DIM + fuse($$) + RESET

);


// noinspection JSUnusedGlobalSymbols
export default dim;
