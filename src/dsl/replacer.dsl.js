import A from '../etc/ansi.const.js';
import BOX from '../etc/box.const.js';
import SYNTAX from '../etc/syntax.const.js';
import stringify from '../util/stringify.util.js';
import compile from './compile.dsl.js';


const {reset: RESET} = A.cc;


const replacer = $ => {

    const box = $?.box ?? BOX;
    const syntax = $?.syntax ?? SYNTAX;
    const {esc, end} = syntax;
    // const rgx = re(syntax);

    // text
    // text.replaceAll(RE, replace)

    // noinspection UnnecessaryLocalVariableJS
    const replace = (
        matched, directives, text,
    ) => {
        const compiled = compile({directives, box, syntax});
        const replaced = stringify(text).replaceAll(esc + end, end);

        return compiled || replaced ? `${compiled}${replaced}${RESET}` : '';
    };

    return replace;
};


export default replacer;
