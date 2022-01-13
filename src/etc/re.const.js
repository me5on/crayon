/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols

import rebus from '@me5on/rebus';
import S from './syntax.const.js';


const {esc, bgn, concat, mid, path, end} = S;
const {FLAG, nlb, cap, nc, pc} = rebus;


// the constant: /@([\s&.\w]+)\((.*?)(?<!\))\)(?!\))/gu;
const RE = rebus(
    FLAG.global + FLAG.unicode,
    [
        // beginning separator
        nlb(esc),
        bgn,
        // nla(bgn),

        // directives
        cap(
            pc(
                '\\s',
                concat,
                path,
                '\\w',
            ),
            '+',
        ),

        // mid separator
        nlb(esc),
        mid,
        // nla(mid),

        // text
        cap('.*?'),

        // ending separator
        nlb(esc),
        end,
        // nla(end),
    ],
);


export default RE;
