import BOX from '../etc/box.const.js';
import SYNTAX from '../etc/syntax.const.js';
import fuse from '../util/fuse.util.js';
import template from '../util/template.util.js';
import re from './re.dsl.js';
import replacer from './replacer.dsl.js';


const create = (
    $ => {

        const box = $?.box ?? BOX;
        const syntax = $?.syntax ?? SYNTAX;
        const pat = re(syntax);
        const rep = replacer({box, syntax});

        // noinspection UnnecessaryLocalVariableJS
        const crayon = (

            ($, ...$$) => (
                $$.length
                    ? template($, $$)
                    : fuse($)
            ).replaceAll(
                pat,
                rep,
            )

        );
        return crayon;
    }
);


// noinspection JSUnusedGlobalSymbols
export default create;
