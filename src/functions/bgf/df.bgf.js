import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {df: DEFAULT} = A.bg;
const {reset: RESET} = A.cc;


const df = (

    (...$$) => DEFAULT + fuse($$) + RESET

);


export default df;
