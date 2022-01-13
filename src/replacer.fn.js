import FN from '@me5on/fn';
import compile from './compile.fn.js';
import A from './etc/ansi.const.js';


const RESET = A.cc.reset;


const replacer = (

    ({box, syntax}) => FN.named$('', (
        matched,
        directives,
        text,
        // offset,
        // full,
    ) => (

        // BGN === full[offset - 1]
        //     ? matched.slice(1)
        //     :
        `${
            (compile({directives, box, syntax}))
        }${
            // text
            text.replaceAll(syntax.esc + syntax.end, syntax.end)
            // text.replaceAll(RE, replace)
        }${
            RESET
        }`
    ))

);


export default replacer;
