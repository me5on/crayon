import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {magenta: MAGENTA} = A.bg;
const {reset: RESET} = A.cc;


const magenta = (

    (...$$) => MAGENTA + fuse($$) + RESET

);


export default magenta;
