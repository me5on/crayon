import stringify from './stringify.util.js';


const cleanup = (

    (pattern, text) => {

        text = stringify(text);

        return (
            pattern
                ? text.replaceAll(
                    pattern,
                    (match, katch) => match ? katch : '',
                )
                : text
        );
    }

);


export default cleanup;
