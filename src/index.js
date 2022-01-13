/* eslint-disable import/max-dependencies */
import bgf from './bgf/bgf.mod.js';
import blink from './ccf/blink.ccf.js';
import bright from './ccf/bright.ccf.js';
import dim from './ccf/dim.ccf.js';
import hidden from './ccf/hidden.ccf.js';
import reset from './ccf/reset.ccf.js';
import reverse from './ccf/reverse.ccf.js';
import strike from './ccf/strike.ccf.js';
import underscore from './ccf/underscore.ccf.js';
import A from './etc/ansi.const.js';
import B from './etc/box.const.js';
import fgf from './fgf/fgf.mod.js';
import idxbg from './idx/bg.idx.js';
import idxfg from './idx/fg.idx.js';
import rgbbg from './rgb/bg.rgb.js';
import rgbfg from './rgb/fg.rgb.js';

// import S from './etc/syntax.const.js';
// import create from './create.fn.js';
// const crayon = create();


const crayon = () => crayon;


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
    // {create},
    {
        ansi: A,
        box:  B,
        // syntax: S,
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
