// noinspection JSUnusedGlobalSymbols

// @see https://en.wikipedia.org/wiki/ANSI_escape_code


const ANSI = Object.freeze({

    cc: Object.freeze({
        reset:      '\x1b[0m',
        bright:     '\x1b[1m',
        dim:        '\x1b[2m',
        underscore: '\x1b[4m',
        blink:      '\x1b[5m',
        reverse:    '\x1b[7m',
        hidden:     '\x1b[8m',
        strike:     '\x1b[9m',
    }),

    fg: Object.freeze({
        black:   '\x1b[30m',
        red:     '\x1b[31m',
        green:   '\x1b[32m',
        yellow:  '\x1b[33m',
        blue:    '\x1b[34m',
        magenta: '\x1b[35m',
        cyan:    '\x1b[36m',
        white:   '\x1b[37m',
        df:      '\x1b[38m',
    }),

    bg: Object.freeze({
        black:   '\x1b[40m',
        red:     '\x1b[41m',
        green:   '\x1b[42m',
        yellow:  '\x1b[43m',
        blue:    '\x1b[44m',
        magenta: '\x1b[45m',
        cyan:    '\x1b[46m',
        white:   '\x1b[47m',
        df:      '\x1b[48m',
    }),

    c1: Object.freeze({
        foreground: '\x1b[38;5;',
        background: '\x1b[48;5;',
        stop:       'm',
    }),

    c3: Object.freeze({
        foreground: '\x1b[38;2;',
        background: '\x1b[48;2;',
        separator:  ';',
        stop:       'm',
    }),

});


export default ANSI;
