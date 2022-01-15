import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {blue: BLUE} = A.bg;
const {reset: RESET} = A.cc;


const blue = (

    (...$$) => BLUE + fuse($$) + RESET

);


export default blue;
