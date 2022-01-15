import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {black: BLACK} = A.bg;
const {reset: RESET} = A.cc;


const black = (

    (...$$) => BLACK + fuse($$) + RESET

);


export default black;
