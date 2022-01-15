/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols


import rebus from '@me5on/rebus';
import SYNTAX from '../etc/syntax.const.js';


const {C: {any, pspace, pword}, F, nlb, cap, nc, pc, gsome, lany} = rebus;


const re = (

    $ => {

        $ ??= SYNTAX;

        return rebus(
            F.global + F.unicode,

            // beginning separator
            nlb($.esc), $.bgn, // nla(bgn),

            // directives
            cap(gsome(pc(pspace, $.and, $.dot, pword))),

            // mid separator
            nlb($.esc), $.mid, // nla(mid),

            // text
            cap(lany(any)),

            // ending separator
            nlb($.esc), $.end, // nla(end),
        );
    }

);


export default re;
