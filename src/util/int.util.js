import IS from '@me5on/is';
import stringify from './stringify.util.js';


const int = (

    $ => (
        IS.int($)
            ? $
            : Number.parseInt(stringify($).trim(), 10)
    )

);


export default int;
