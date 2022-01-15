import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {magenta: MAGENTA} = A.fg;
const {reset: RESET} = A.cc;


const magenta = (

    (...$$) => MAGENTA + fuse($$) + RESET

);


export default magenta;
