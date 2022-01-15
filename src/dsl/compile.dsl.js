import SYNTAX from '../etc/syntax.const.js';
import stringify from '../util/stringify.util.js';


const compile = (

    $ => {

        const directives = stringify($?.directives);
        const box = $?.box ?? {};
        const syntax = $?.syntax ?? SYNTAX;

        return (

            directives
                .split(syntax.and)
                .map($ => box[stringify($).trim()] ?? '')
                .join('')

        );
    }

);


export default compile;
