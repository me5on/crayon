import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {cyan: CYAN} = A.bg;
const {reset: RESET} = A.cc;


const cyan = (

    (...$$) => CYAN + fuse($$) + RESET

);


export default cyan;
