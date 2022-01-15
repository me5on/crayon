import rebus from '@me5on/rebus';
import A from '../etc/ansi.const.js';
import BOX from '../etc/box.const.js';
import C from '../etc/general.const.js';
import SYNTAX from '../etc/syntax.const.js';
import cleanup from '../util/cleanup.util.js';
import stringify from '../util/stringify.util.js';
import compile from './compile.dsl.js';


const {reset: RESET} = A.cc;
const {or, cap} = rebus;


const replacer = $ => {

    const box = $?.box ?? BOX;
    const syntax = $?.syntax ?? SYNTAX;
    const {esc, bgn, mid, end, and, dot} = syntax;

    const escaped = (
        esc
            ? rebus(C.gu, esc + cap(or(bgn, mid, end, and, dot)))
            : ''
    );

    // noinspection UnnecessaryLocalVariableJS
    const replace = (...$$) => {
        const {dir, txt} = $$.pop() ?? {};
        const compiled = compile({directives: dir, box, syntax});
        const replaced = cleanup(escaped, stringify(txt));
        return (
            compiled
                ? `${compiled}${replaced}${RESET}`
                : replaced
        );
    };

    return replace;
};


export default replacer;
