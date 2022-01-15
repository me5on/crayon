import {describe, expect, it} from '@jest/globals';
import compile from './compile.dsl.js';


describe('compile', () => {

    it(
        'is a function',
        () => void expect(compile).toBeFun(),
    );

    // noinspection SpellCheckingInspection
    it.each([
        // result, ...args
        [''],
        ['', null],
        ['', void (1), null],
        ['', null, null],
        ['', []],
        ['', {}],
        ['', {directives: null}],
        ['', {directives: 'abc'}],
        ['', {directives: 'abc', box: {a: 1, b: 2, c: 3}}],
        ['123', {directives: 'a+b+c', box: {a: 1, b: 2, c: 3}}],
        ['23', {directives: 'a+b+c', box: {'a.x': 1, b: 2, c: 3}}],
        ['123', {directives: 'a.x+b+c', box: {'a.x': 1, b: 2, c: 3}}],
        ['123', {directives: 'a/b/c', box: {a: 1, b: 2, c: 3}, syntax: {and: '/'}}],
    ])(
        'returns compiled string %p for %p',
        expect(compile).toMapExact,
    );

});
