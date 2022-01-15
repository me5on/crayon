/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols


import rebus from '@me5on/rebus';
import C from '../etc/general.const.js';
import SYNTAX from '../etc/syntax.const.js';
import escapist from '../util/escapist.util.js';


const {C: {any, pspace, pword}, F, nlb, kap, cap, nap, nc, pc, gsome, gany, lany} = rebus;


const re = (

    $ => {

        $ ??= SYNTAX;

        const unescaped = escapist($.esc);

        const bgn = unescaped($.bgn);
        const mid = unescaped($.mid);
        const end = unescaped($.end);
        const and = unescaped($.and);
        const dot = unescaped($.dot);

        const directives = kap('dir', gsome(pc(pspace, and, dot, pword)));
        const dsl = gany(nap(directives, mid));

        const txt = kap('txt', lany(any));

        return rebus(C.gu, bgn, dsl, txt, end);
    }

);


export default re;
