import A from '../../etc/ansi.const.js';
import C from '../../etc/general.const.js';
import int from '../../util/int.util.js';


const {foreground: FG, separator: SEP, stop: STOP} = A.c3;


const fg = (

    (r, g, b) => {

        // noinspection DuplicatedCode
        const ir = int(r);
        const ig = int(g);
        const ib = int(b);

        const vr = C.min <= ir && C.max >= ir;
        const vg = C.min <= ig && C.max >= ig;
        const vb = C.min <= ib && C.max >= ib;

        return (
            vr && vg && vb
                ? FG + ir + SEP + ig + SEP + ib + STOP
                : ''
        );
    }

);


// noinspection JSUnusedGlobalSymbols
export default fg;
