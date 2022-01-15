import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {reset: RESET} = A.cc;


const reset = (

    (...$$) => RESET + fuse($$)

);


export default reset;
