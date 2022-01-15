import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {white: WHITE} = A.bg;
const {reset: RESET} = A.cc;


const white = (

    (...$$) => WHITE + fuse($$) + RESET

);


export default white;
