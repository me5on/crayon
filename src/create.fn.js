import B from './etc/box.const.js';
import S from './etc/syntax.const.js';
import replacer from './replacer.fn.js';
import fuse from './util/fuse.util.js';
import re from './util/re.util.js';
import zip from './util/zip.util.js';


const create = (
    ({
        box = B,
        syntax = S,
    } = {}) => {
        const pattern = re(syntax);
        const replace = replacer({box, syntax});

        // noinspection UnnecessaryLocalVariableJS
        const crayon = (

            ($, ...$$) => (
                $$.length
                    ? zip($, $$)
                    : fuse($)
            ).replaceAll(
                pattern,
                replace,
            )

        );
        return crayon;
    }
);


export default create;
