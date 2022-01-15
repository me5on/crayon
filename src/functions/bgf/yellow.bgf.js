import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {yellow: YELLOW} = A.bg;
const {reset: RESET} = A.cc;


const yellow = (

    (...$$) => YELLOW + fuse($$) + RESET

);


export default yellow;
