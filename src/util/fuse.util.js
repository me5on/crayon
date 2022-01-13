import IS from '@me5on/is';
import stringify from './stringify.util.js';


const fuse = (

    $ => (
        IS.arr($)
            ? $.map(stringify).join('')
            : stringify($)
    )

);


export default fuse;
