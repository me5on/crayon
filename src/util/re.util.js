/* eslint-disable no-unused-vars */
// noinspection JSUnusedLocalSymbols

import rebus from '@me5on/rebus';
import RE from '../etc/re.const.js';


const {C, F, nlb, cap, nc, pc, gsome, lany} = rebus;


const re = (

    ({esc, bgn, con, mid, path, end} = RE) => rebus(
        F.global + F.unicode,
        [
            // beginning separator
            nlb(esc),
            bgn,
            // nla(bgn),

            // directives
            cap(
                gsome(pc(
                    C.pspace,
                    con,
                    path,
                    C.pword,
                )),
            ),

            // mid separator
            nlb(esc),
            mid,
            // nla(mid),

            // text
            cap(lany(C.any)),

            // ending separator
            nlb(esc),
            end,
            // nla(end),
        ],
    )

);


export default re;
