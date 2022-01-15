/* eslint-disable import/max-dependencies */
import create from './dsl/create.dsl.js';
import ANSI from './etc/ansi.const.js';
import BOX from './etc/box.const.js';
import SYNTAX from './etc/syntax.const.js';
import bgf from './functions/bgf/bgf.mod.js';
import blink from './functions/ccf/blink.ccf.js';
import bright from './functions/ccf/bright.ccf.js';
import dim from './functions/ccf/dim.ccf.js';
import hidden from './functions/ccf/hidden.ccf.js';
import reset from './functions/ccf/reset.ccf.js';
import reverse from './functions/ccf/reverse.ccf.js';
import strike from './functions/ccf/strike.ccf.js';
import underscore from './functions/ccf/underscore.ccf.js';
import fgf from './functions/fgf/fgf.mod.js';
import idxbg from './functions/idx/bg.idx.js';
import idxfg from './functions/idx/fg.idx.js';
import rgbbg from './functions/rgb/bg.rgb.js';
import rgbfg from './functions/rgb/fg.rgb.js';


const crayon = create();
// const crayon = () => crayon;


const ccf = Object.freeze({
    blink,
    bright,
    dim,
    hidden,
    reset,
    reverse,
    strike,
    underscore,
});


const idx = Object.freeze({
    bg: idxbg,
    fg: idxfg,
});


const rgb = Object.freeze({
    bg: rgbbg,
    fg: rgbfg,
});


Object.assign(
    crayon,
    {create},
    {
        ansi:   ANSI,
        box:    BOX,
        syntax: SYNTAX,
    },
    {
        ccf,
        fgf,
        bgf,
        idx,
        rgb,
    },
);


export default crayon;
