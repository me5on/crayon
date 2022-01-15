import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {bright: BRIGHT, reset: RESET} = A.cc;


const bright = (

    (...$$) => BRIGHT + fuse($$) + RESET

);


export default bright;
