import stringify from './stringify.util.js';


const template = (

    (strings, expressions) => {

        const [first, ...rest] = Array.from(strings ?? []);

        return rest.reduce(
            (s, c, i) => s + stringify(expressions?.[i]) + stringify(c),
            stringify(first),
        );
    }

);


export default template;
