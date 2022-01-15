import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {blink: BLINK, reset: RESET} = A.cc;


const blink = (

    (...$$) => BLINK + fuse($$) + RESET

);


export default blink;
