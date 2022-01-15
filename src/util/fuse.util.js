import IS from '@me5on/is';
import stringify from './stringify.util.js';


const {arr} = IS;


const fuse = (

    $ => (
        arr($)
            ? $.map(stringify).join('')
            : stringify($)
    )

);


export default fuse;
