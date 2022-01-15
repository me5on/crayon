import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {underscore: UNDERSCORE, reset: RESET} = A.cc;


const underscore = (

    (...$$) => UNDERSCORE + fuse($$) + RESET

);


export default underscore;
