/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest */

'use strict';

/**
* ESLint rules specific to stdlib.
*
* @namespace rules
*/
var rules = {};

/**
* Require that comments start with an uppercase letter.
*
* @name capitalized-comments
* @memberof rules
* @type {string}
*
* @example
* // Bad...
* function square( x ) {
*     var out;
*
*     // square the number:
*     out = x*x;
*     return out;
* }
*
* @example
* // Good...
* function square( x ) {
*     var out;
*
*     // Square the number:
*     out = x*x;
*     return out;
* }
*/
rules[ 'stdlib/capitalized-comments' ] = [ 'warn', {
	'whitelist': [
		'eslint',
		'eslint-enable',
		'eslint-enable-next-line',
		'eslint-disable',
		'eslint-disable-next-line',
		'returns',
		'e.g.,',
		'ndarray',
		'rehype',
		'remark',
		'stdlib',
		'throws'
	]
}];

/**
* Enforce that return annotation values match actual output.
*
* @name doctest
* @memberof rules
* @type {string}
* @default 'off'
*
* @example
* // Bad...
* var x = 3.0;
* // returns 2.0
*
* console.log( 'Hello World' );
* // returns 'hello world'
*
* @example
* // Good...
* var x = 3.0;
* // returns 3.0
*
* console.log( 'Hello World' );
* // returns 'Hello World'
*/
rules[ 'stdlib/doctest' ] = 'off';

/**
* Enforce marker style conventions for return annotations.
*
* @name doctest-marker
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var x = 3.0;
* // => 3.0
*
* console.log( 'Hello World' );
* // returns 'Hello World'
*
* // => null
*
* @example
* // Good...
* var x = 3.0;
* // returns 3.0
*
* console.log( 'Hello World' );
* // => 'Hello World'
*/
rules[ 'stdlib/doctest-marker' ] = 'error';

/* eslint-disable stdlib/jsdoc-doctest-quote-props */

/**
* Enforce that property names in return annotations are quoted.
*
* @name doctest-quote-props
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var value = {
*     'a': 1,
*     'b': true,
*     'c': [ 1, 2, 3 ]
* };
* var out = copy( value );
* /* returns
*     {
*         a: 1,
*         b: true,
*         c: [ 1, 2, 3 ]
*     }
* *\/
*
* @example
* // Good...
* var value = {
*     'a': 1,
*     'b': true,
*     'c': [ 1, 2, 3 ]
* };
* var out = copy( value );
* /* returns
*     {
*         'a': 1,
*         'b': true,
*         'c': [ 1, 2, 3 ]
*     }
* *\/
*/
rules[ 'stdlib/doctest-quote-props' ] = 'error';

/* eslint-enable stdlib/jsdoc-doctest-quote-props */

/**
* Require an empty line before single-line comments.
*
* @name empty-line-before-comment
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* function square( x ) {
*     var out;
*     // Square the number:
*     out = x*x;
*     return out;
* }
*
* @example
* // Good...
* function square( x ) {
*     var out;
*
*     // Square the number:
*     out = x*x;
*     return out;
* }
*/
rules[ 'stdlib/empty-line-before-comment' ] = 'error';

/**
* Disallow spaces between an opening parenthesis or bracket and a nested object or array expression at the end of a line.
*
* @name eol-open-bracket-spacing
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var log = require( '@stdlib/console/log' );
*
* log( {
*   'foo': true
* });
*
* log( [
*   1,
*   2,
*   3
* ]);
*
* log( [ {
*   'bar': true
* }]);
*
* @example
* // Good...
* var log = require( '@stdlib/console/log' );
*
* log({
*   'foo': true
* });
*
* log([
*   1,
*   2,
*   3
* ]);
*
* log([{
*   'bar': true
* }]);
*/
rules[ 'stdlib/eol-open-bracket-spacing' ] = 'off'; // FIXME: temporarily disabled until bugs are fixed

/**
* Require blockquotes to have `2` character indentation.
*
* @name jsdoc-blockquote-indentation
* @memberof rules
* @type {Array}
* @default [ 'error', 2 ]
* @see [blockquote-indentation]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-blockquote-indentation}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * >   This is a blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * > This is a blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-blockquote-indentation' ] = [ 'error', 2 ];

/**
* Require checkboxes to be either empty (unchecked) or have an `x` (checked).
*
* @name jsdoc-checkbox-character-style
* @memberof rules
* @type {Array}
* @see [checkbox-character-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-character-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * -   [X] Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   [x] Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-checkbox-character-style' ] = [
	'error',
	{
		'checked': 'x',
		'unchecked': ' '
	}
];

/**
* Prevent checkboxes being followed by too much whitespace.
*
* @name jsdoc-checkbox-content-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [checkbox-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-checkbox-content-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * -   [ ]   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   [ ] Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-checkbox-content-indent' ] = 'error';

/**
* Require `fenced` code block style.
*
* @name jsdoc-code-block-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'fenced' ]
* @see [code-block-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-code-block-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* *     y = x;
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ```javascript
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-code-block-style' ] = [ 'error', 'fenced' ];

/**
* Require fenced code blocks to have a language flag.
*
* @name jsdoc-fenced-code-flag
* @memberof rules
* @type {Array}
* @see [fenced-code-flag]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-flag}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ```
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ```javascript
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-fenced-code-flag' ] = [
	'error', {
		'allowEmpty': false
	}
];

/**
* Require lowercased definition labels.
*
* @name jsdoc-definition-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [definition-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-case}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][Number].
* *
* * [Number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-definition-case' ] = 'error';

/**
* Prevent consecutive whitespace in a definition.
*
* @name jsdoc-definition-spacing
* @memberof rules
* @type {string}
* @default 'error'
* @see [definition-spacing]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-definition-spacing}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number   documentation].
* *
* * [number   documentation]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number documentation].
* *
* * [number documentation]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-definition-spacing' ] = 'error';

/**
* Ensure that return annotations in JSDoc examples match the actual output.
*
* @name jsdoc-doctest
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 12.0
* *
* * y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*
* @example
* // Good...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 9.0
* *
* * y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*/
rules[ 'stdlib/jsdoc-doctest' ] = 'error';

/**
* Ensure that only return annotations for real-valued return values always contain decimal points.
*
* @name jsdoc-doctest-decimal-point
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 9
* *
* * y = square( 2.0 );
* * // returns 4
* *\/
* function square( x ) {
*   return x*x;
* }
*
* @example
* // Good...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 9.0
* *
* * y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*/
rules[ 'stdlib/jsdoc-doctest-decimal-point' ] = 'error';

/**
* Enforce marker style conventions for return annotations in JSDoc examples.
*
* @name jsdoc-doctest-marker
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // => 9.0
* *
* * console.log( square( 2.0 ) );
* * // returns 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*
* @example
* // Good...
* /**
* * Squares a number.
* *
* * @param {number} x - input value
* * @returns {number} x*x
* *
* * @example
* * var y = square( 3.0 );
* * // returns 9.0
* *
* * console.log( square( 2.0 ) );
* * // => 4.0
* *\/
* function square( x ) {
*   return x*x;
* }
*/
rules[ 'stdlib/jsdoc-doctest-marker' ] = 'error';

/**
* Require `_` be used as the emphasis marker.
*
* @name jsdoc-emphasis-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '_' ]
* @see [emphasis-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-emphasis-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a *number*.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a _number_.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-emphasis-marker' ] = [ 'error', '_' ];

/**
* Require empty lines before `@example` tags in JSDoc comments.
*
* @name jsdoc-empty-line-before-example
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Rounds a numeric value toward positive infinity.
* *
* * @param {number} x - input value
* * @returns {number} rounded value
* * @example
* * var v = ceil( -4.2 );
* * // returns -4.0
* * @example
* * var v = ceil( 9.99999 );
* * // returns 10.0
* *\/
* var ceil = Math.ceil;
*
* @example
* // Good...
*
* /**
* * Rounds a numeric value toward positive infinity.
* *
* * @param {number} x - input value
* * @returns {number} rounded value
* *
* * @example
* * var v = ceil( -4.2 );
* * // returns -4.0
* *
* * @example
* * var v = ceil( 9.99999 );
* * // returns 10.0
* *\/
* var ceil = Math.ceil;
*/
rules[ 'stdlib/jsdoc-empty-line-before-example' ] = 'error';

/**
* Require `\`` be used as the fenced code marker.
*
* @name jsdoc-fenced-code-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '`' ]
* @see [fenced-code-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ~~~javascript
* * y = x;
* * ~~~
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ```javascript
* * y = x;
* * ```
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-fenced-code-marker' ] = [ 'error', '`' ];

/**
* Require definitions be placed at the end of the description.
*
* @name jsdoc-final-definition
* @memberof rules
* @type {string}
* @default 'error'
* @see [final-definition]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-final-definition}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * Additional information.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * Additional information.
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-final-definition' ] = 'error';

/**
* Require first heading level be a level `2` heading in JSDoc comments. A level `1` heading is implied.
*
* @name jsdoc-first-heading-level
* @memberof rules
* @type {Array}
* @see [first-heading-level]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-first-heading-level}
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * # Beep
* *
* * Boop.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Beep
* *
* * Boop.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-first-heading-level' ] = [ 'error', 2 ];

/**
* Prevent too many spaces from being used to hard break.
*
* @name jsdoc-hard-break-spaces
* @memberof rules
* @type {string}
* @default 'error'
* @see [hard-break-spaces]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-hard-break-spaces}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * Dots represent⋅⋅⋅
* * spaces.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * Dots represent⋅⋅
* * spaces.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-hard-break-spaces' ] = 'error';

/**
* Warn when headings increment by more than 1 level.
*
* @name jsdoc-heading-increment
* @memberof rules
* @type {string}
* @default 'warn'
* @see [heading-increment]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-heading-increment}
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * #### Beep
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * ### Beep
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-heading-increment' ] = 'warn';

/**
* Require `atx` heading style.
*
* @name jsdoc-heading-style
* @memberof rules
* @type {Array}
* @see [heading-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-heading-style}
*
* @example
* // Bad...
*
* /**
* * Returns a pseudo-random number on `[0,1]`
* *
* * Beep
* * ===
* *
* * ## Boop
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*
* @example
* // Good...
*
* /**
* * Returns a pseudo-random number on `[0,1]`
* *
* * # Beep
* *
* * ## Boop
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*/
rules[ 'stdlib/jsdoc-heading-style' ] = [ 'error', 'atx' ];

/**
* Require that JSDoc descriptions start with an uppercase letter and end with a period.
*
* @name jsdoc-leading-description-sentence
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * returns a pseudo-random number on `[0,1]`
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*
* @example
* // Good...
*
* /**
* * Returns a pseudo-random number on `[0,1]`.
* *
* * @returns {number} uniform random number
* *
* * @example
* * var y = rand();
* * // e.g., returns 0.5363925252089496
* *\/
* function rand() {
*     return Math.random();
* }
*/
rules[ 'stdlib/jsdoc-leading-description-sentence' ] = [ 'error', {
	'whitelist': [
		'ndarray',
		'rehype',
		'remark',
		'stdlib',
		'x-axis',
		'y-axis',
		'`x`',
		'`x`-value',
		'`y`',
		'`y`-value'
	]
}];

/**
* Enforce that the copyright year in a stdlib license year matches the year the file was created.
*
* @name jsdoc-license-header-year
* @memberof rules
* @type {string}
* @default 'error'
*/
rules[ 'stdlib/jsdoc-license-header-year' ] = 'off';

/**
* Require Unix linebreaks.
*
* @name jsdoc-jsdoc-linebreak-style
* @memberof rules
* @type {Array}
* @see [linebreak-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-linebreak-style}
*/
rules[ 'stdlib/jsdoc-linebreak-style' ] = [ 'error', 'unix' ];

/**
* Require that heading lengths be less than or equal to `80` characters.
*
* @name jsdoc-maximum-heading-length
* @memberof rules
* @type {Array}
* @see [maximum-heading-length]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-maximum-heading-length}
*
* @example
* // Bad...
*
* /**
* * Beep boop.
* *
* * ## Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
* *
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * ## Lorem ipsum dolor sit amet, consectetuer adipiscing elit
* *
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-maximum-heading-length' ] = [ 'error', 80 ];

/**
* Do not enforce a maximum line length.
*
* @name jsdoc-maximum-line-length
* @memberof rules
* @type {string}
* @default 'off'
* @see [maximum-line-length]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-maximum-line-length}
*
* @example
* // Bad...
*
* /**
* * Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget * dolor. Aenean massa.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-maximum-line-length' ] = [ 'off' ];

/**
* Require double quotes for link titles.
*
* @name jsdoc-link-title-style
* @memberof rules
* @type {Array}
* @see [link-title-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-link-title-style}
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * [example](https://example.com (Example))
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * [example](https://example.com "Example")
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-link-title-style' ] = [ 'error', '"' ];

/**
* Prevent unnecessary indentation of list item bullets.
*
* @name jsdoc-list-item-bullet-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-bullet-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* *   -   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-list-item-bullet-indent' ] = 'error';

/**
* Prevent mixed indentation in list item content.
*
* @name jsdoc-list-item-content-indent
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-content-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-content-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * 1.  Item
* *
* *      1.  Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * 1.  Item
* *
* *     1.  Item
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-list-item-content-indent' ] = 'error';

/**
* Require list items use tab-size indentation.
*
* @name jsdoc-list-item-indent
* @memberof rules
* @type {Array}
* @see [list-item-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-indent}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * Hello
* * World
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   Hello
* * -   World
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   Beep
* *     boop
* *
* * -   Bop
* *     bip
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*/
rules[ 'stdlib/jsdoc-list-item-indent' ] = [ 'error', 'tab-size' ];

/**
* Require consistent list item spacing.
*
* @name jsdoc-list-item-spacing
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-spacing]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-list-item-spacing}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * -   Beep
* * -   Boop
* *
* * -   Boop
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   Beep
* * -   Boop
* * -   Boop
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*
* @example
* // Okay...
*
* /**
* * Squares a number.
* *
* * -   Beep
* *
* * -   Boop
* *
* * -   Boop
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
*
*/
rules[ 'stdlib/jsdoc-list-item-spacing' ] = 'error';

/**
* Lint JSDoc descriptions using remark.
*
* @name jsdoc-markdown-remark
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Do this. Do that.
* *
* * ## Methods
* *
* * Duplicate heading.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Do this. Do that.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-markdown-remark' ] = [ 'error',
	{
		'config': require( './../../remark/.remarkrc.jsdoc.js' )
	}
];

/**
* Require angle-bracketed links to include a protocol.
*
* @name jsdoc-no-auto-link-without-protocol
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-auto-link-without-protocol]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * <foo@bar.com>
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * <mailto:foo@bar.com>
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-auto-link-without-protocol' ] = 'error';

/**
* Require blank lines in blockquotes have a marker.
*
* @name jsdoc-no-blockquote-without-marker
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-blockquote-without-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * > This is a...
* *
* * > ...blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * > This is a...
* * >
* * > ...blockquote.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-blockquote-without-marker' ] = 'error';

/**
* Do not allow too many consecutive blank lines. NOTE: disabled to allow some discretion in terms of layout and readability.
*
* @name jsdoc-no-consecutive-blank-lines
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-consecutive-blank-lines]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-consecutive-blank-lines}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-consecutive-blank-lines' ] = 'off';

/**
* Do not allow duplicate definitions.
*
* @name jsdoc-no-duplicate-definitions
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-definitions]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions}
*
* @example
* // Bad...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a [number][number].
* *
* * [number]: https://example.com
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-definitions' ] = 'error';

/**
* Do not allow duplicate headings.
*
* @name jsdoc-no-duplicate-headings
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-headings]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Methods
* *
* * Discuss methods.
* *
* * ## Notes
* *
* * Discuss notes.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-headings' ] = 'error';

/**
* Do not allow duplicate headings in the same section.
*
* @name jsdoc-no-duplicate-headings-in-section
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-headings-in-section]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ## Heading
* *
* * ### Subheading
* *
* * ### Subheading
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * ## Heading 1
* *
* * ### Subheading
* *
* * ## Heading 2
* *
* * ### Subheading
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-headings-in-section' ] = 'error';

/**
* Do not allow JSDoc tags to appear more than once in a JSDoc comment.
*
* @name jsdoc-no-duplicate-tags
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-tags' ] = 'error';

/**
* Prevent use of emphasis in place of a heading.
*
* @name jsdoc-no-emphasis-as-heading
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * _Boop_
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-emphasis-as-heading' ] = 'error';

/**
* Prevent empty URLs for links and images.
*
* @name jsdoc-no-empty-url
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop [beep]().
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop [beep](http://foo.bar/baz).
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-empty-url' ] = 'error';

/**
* Prevent indentation of heading content.
*
* @name jsdoc-no-heading-content-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ##    Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-content-indent' ] = 'error';

/**
* Prevent indentation of headings.
*
* @name jsdoc-no-heading-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* *    ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-indent' ] = 'error';

/**
* Prevent paragraphs which appear to be h7+ "headings".
*
* @name jsdoc-no-heading-like-paragraph
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ####### Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-like-paragraph' ] = 'error';

/**
* Prevent headings from ending with specified characters.
*
* @name jsdoc-no-heading-punctuation
* @memberof rules
* @type {Array}
* @default [ 'error', '.,;:!?' ]
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Boop!
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-punctuation' ] = [ 'error', '.,;:!?' ];

/**
* Prevent HTML from being used.
*
* @name jsdoc-no-html
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep boop.
* *
* * <h2>References</h2>
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * ## References
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-html' ] = 'error';

/**
* Prevent inline padding of markers.
*
* @name jsdoc-no-inline-padding
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop: _ beep _.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop: _beep_.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-inline-padding' ] = 'error';

/**
* Prevent URLs without angle-brackets from being used.
*
* @name jsdoc-no-literal-urls
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Links
* *
* * -   http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Links
* *
* * -   <http://foo.bar/baz>
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-literal-urls' ] = 'error';

/**
* Require blank lines between Markdown block nodes in JSDoc descriptions.
*
* @name jsdoc-no-missing-blank-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Beep
* * ### Boop
* *
* * Hello World.
* * -   Foo
* *     1.  Yes
* *     2.  No
* * -   Bar
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Beep
* *
* * ### Boop
* *
* * Hello World.
* *
* * -   Foo
* *     1.  Yes
* *
* *     2.  No
* *
* * -   Bar
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-missing-blank-lines' ] = [ 'error', {
	'exceptTightLists': true
}];

/**
* Disallow multiple blank lines in JSDoc comments.
*
* @name jsdoc-no-multiple-blank-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* *
* * @returns {string} a value
* *
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-multiple-blank-lines' ] = 'error';

/**
* Allow multiple top-level headings.
*
* @name jsdoc-no-multiple-toplevel-headings
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-multiple-toplevel-headings]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-multiple-toplevel-headings}
*
* @example
* // Okay...
*
* /**
* * Boop beep.
* *
* * # Boop
* *
* * # Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-multiple-toplevel-headings' ] = 'off';

/**
* Prevent indentation of paragraph content.
*
* @name jsdoc-no-paragraph-content-indent
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* *    Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * ## Boop
* *
* * Beep.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-paragraph-content-indent' ] = 'error';

/**
* Prevent references from being used like URLs.
*
* @name jsdoc-no-reference-like-url
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop](baz).
* *
* * [baz]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][baz].
* *
* * [baz]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-reference-like-url' ] = 'error';

/**
* Allow shell commands to be prefixed with `$` symbols.
*
* @name jsdoc-no-shell-dollars
* @memberof rules
* @type {string}
* @default 'off'
*
* @example
* // Bad...
*
* /**
* * Beep boop.
* *
* * ```bash
* * $ echo beep
* * ```
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * ```bash
* * echo beep
* * ```
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shell-dollars' ] = 'off';

/**
* Prevent shortcut reference images.
*
* @name jsdoc-no-shortcut-reference-image
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep ![boop].
* *
* * [boop]: http://foo.bar/baz.png
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep ![boop][].
* *
* * [boop]: http://foo.bar/baz.png
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shortcut-reference-image' ] = 'error';

/**
* Prevent shortcut reference links.
*
* @name jsdoc-no-shortcut-reference-link
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop].
* *
* * [boop]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][boop].
* *
* * [boop]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shortcut-reference-link' ] = 'error';

/**
* Prevent space-aligned asterisks for JSDoc comments.
*
* @name
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
*  * Beep boop.
*  *
*  * @returns {string} a value
*  *
*  * @example
*  * var str = beep();
*  * // returns 'boop'
*  *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep boop.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-space-aligned-asterisks' ] = 'error';

/**
* Prevent unnecessary indentation before tables.
*
* @name jsdoc-no-table-indentation
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* *   | x   | y    |
* *   | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-table-indentation' ] = 'error';

/**
* Forbid the use of tabs.
*
* @name jsdoc-no-tabs
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep.
* *
* * -	List item starting with a tab.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep.
* *
* * -   List item starting with spaces.
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-tabs' ] = 'error';

/**
* Prevent references to undefined definitions.
*
* @name jsdoc-no-undefined-references
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Beep [boop][boop].
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Beep [boop][boop].
* *
* * [boop]: http://example.com
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-undefined-references' ] = 'error';

/**
* Forbid unused definitions.
*
* @name jsdoc-no-unused-definitions
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * [beep]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop [beep][beep].
* *
* * [beep]: http://foo.bar/baz
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-unused-definitions' ] = 'error';

/**
* Require ordered lists use periods (e.g., `1.`, `2.`, etc).
*
* @name jsdoc-ordered-list-marker-style
* @memberof rules
* @type {Array}
* @see [ordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * 1.  foo
* * 2)  bar
* * 3)  beep
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * 1.  foo
* * 2.  bar
* * 3.  beep
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-ordered-list-marker-style' ] = [ 'error', '.' ];

/**
* Prefer ordered, but allow discretion when determining appropriate ordered list marker value.
*
* @name jsdoc-ordered-list-marker-value
* @memberof rules
* @type {Array}
* @default [ 'off', 'ordered' ]
* @see [ordered-list-marker-value]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-ordered-list-marker-value}
*
* @example
* // Okay...
*
* /**
* * Squares a number.
* *
* * 1. foo
* * 1. bar
* * 1. beep
* * 1. boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * 1. foo
* * 2. bar
* * 3. beep
* * 4. boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-ordered-list-marker-value' ] = [ 'off', 'ordered' ];

/**
* Enforce that @private tags are not missing in unassigned function declarations.
*
* @name jsdoc-private-annotation
* @memberof rules
* @type {string}
* @default 'warn'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @private
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-private-annotation' ] = 'warn';

/**
* Require that JSDoc comments of functions are not missing `@throws` tags.
*
* @name jsdoc-require-throws-tags
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Copies or deep clones a value to an arbitrary depth.
* *
* * @param {*} value - value to copy
* * @param {NonNegativeInteger} [level=+infinity] - copy depth
* * @returns {*} value copy
* *\/
* function copy( value, level ) {
*   var out;
*   if ( arguments.length > 1 ) {
*     if ( !isNonNegativeInteger( level ) ) {
*       throw new TypeError( 'invalid argument. `level` must be a nonnegative integer. Value: `' + level + '`.' );
*     }
*     if ( level === 0 ) {
*       return value;
*     }
*   } else {
*     level = PINF;
*   }
*   out = ( isArray( value ) ) ? new Array( value.length ) : {};
*   return deepCopy( value, out, [value], [out], level );
* }
*
* @example
* // Good...
*
* /**
* * Copies or deep clones a value to an arbitrary depth.
* *
* * @param {*} value - value to copy
* * @param {NonNegativeInteger} [level=+infinity] - copy depth
* * @throws {TypeError} second argument must be a nonnegative integer
* * @returns {*} value copy
* *\/
* function copy( value, level ) {
*   var out;
*   if ( arguments.length > 1 ) {
*     if ( !isNonNegativeInteger( level ) ) {
*       throw new TypeError( 'invalid argument. `level` must be a nonnegative integer. Value: `' + level + '`.' );
*     }
*     if ( level === 0 ) {
*       return value;
*     }
*   } else {
*     level = PINF;
*   }
*   out = ( isArray( value ) ) ? new Array( value.length ) : {};
*   return deepCopy( value, out, [value], [out], level );
* }
*/
rules[ 'stdlib/jsdoc-require-throws-tags' ] = 'error';

/**
* Enforce that property names in return annotations inside of example code are quoted using single quotes.
*
* @name jsdoc-doctest-quote-props
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /**
* * Converts the first letter of each object key to uppercase.
* *
* * @param {Object} obj - source object
* * @returns {Object} new object
* *
* * @example
* * var obj1 = {
* *     'aa': 1,
* *     'bb': 2
* * };
* *
* * var obj2 = capitalizeKeys( obj1 );
* * // returns { Aa: 1, "Bb": 2 }
* *\/
* function capitalizeKeys( obj ) {
*     var out;
*     var key;
*     var k;
*     out = {};
*     for ( key in obj ) {
*         if ( hasOwnProp( obj, key ) ) {
*             if ( key === '' ) {
*                 out[ key ] = obj[ key ];
*             } else {
*                 k = key.charAt( 0 ).toUpperCase() + key.slice( 1 );
*                 out[ k ] = obj[ key ];
*             }
*         }
*     }
*     return out;
* }
*
* @example
* // Good...
* /**
* * Converts the first letter of each object key to uppercase.
* *
* * @param {Object} obj - source object
* * @returns {Object} new object
* *
* * @example
* * var obj1 = {
* *     'aa': 1,
* *     'bb': 2
* * };
* *
* * var obj2 = capitalizeKeys( obj1 );
* * // returns { 'Aa': 1, 'Bb': 2 }
* *\/
* function capitalizeKeys( obj ) {
*     var out;
*     var key;
*     var k;
*     out = {};
*     for ( key in obj ) {
*         if ( hasOwnProp( obj, key ) ) {
*             if ( key === '' ) {
*                 out[ key ] = obj[ key ];
*             } else {
*                 k = key.charAt( 0 ).toUpperCase() + key.slice( 1 );
*                 out[ k ] = obj[ key ];
*             }
*         }
*     }
*     return out;
* }
*/
rules[ 'stdlib/jsdoc-doctest-quote-props' ] = 'error';

/**
* Require that the horizontal rule style be three consecutive asterisks `* * *`.
*
* @name jsdoc-rule-style
* @memberof rules
* @type {Array}
* @see [rule-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-rule-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * ---
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * * * *
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-rule-style' ] = [ 'error', '* * *' ];

/**
* Require `*` be used as the strong marker.
*
* @name jsdoc-strong-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '*' ]
* @see [strong-marker]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-strong-marker}
*
* @example
* // Bad...
*
* /**
* * Squares a __number__.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a **number**.
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-strong-marker' ] = [ 'error', '*' ];

/**
* Require table cell padding.
*
* @name jsdoc-table-cell-padding
* @memberof rules
* @type {Array}
* @default [ 'error', 'padded' ]
* @see [table-cell-padding]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-table-cell-padding}
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * |Beep|Boop|
* * |----|----|
* * |foo |bar |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | Beep | Boop |
* * | ---- | ---- |
* * | foo  | bar  |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-cell-padding' ] = [ 'error', 'padded' ];

/**
* Require table pipes to be aligned.
*
* @name jsdoc-table-pipe-alignment
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * | x | y |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-pipe-alignment' ] = 'error';

/**
* Require pipes as fences for table rows.
*
* @name jsdoc-table-pipes
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Boop beep.
* *
* * x   | y
* * any | boop
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
* @example
* // Good...
*
* /**
* * Boop beep.
* *
* * | x   | y    |
* * | any | boop |
* *
* * @returns {string} a value
* *
* * @example
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-table-pipes' ] = 'error';

/**
* Require that only allowed JSDoc tags are used.
*
* @name jsdoc-tag-names
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @arg {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-names' ] = 'error';

/**
* Require that JSDoc tags follow a specified order.
*
* @name jsdoc-tag-order
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @returns {number} x squared
* * @param {number} x - input number
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-order' ] = 'error';

/* eslint-disable stdlib/jsdoc-tag-spacing */

/**
* Require that JSDoc tags are properly padded with spaces.
*
* @name jsdoc-tag-spacing
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @param{number} x - input number
* *@returns {number }x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-tag-spacing' ] = 'error';

/* eslint-enable stdlib/jsdoc-tag-spacing */

/**
* Require that type definitions of JSDoc tags do not contain any typos.
*
* @name jsdoc-typedef-typos
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {numbr} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * @param {number} x - input number
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-typedef-typos' ] = 'error';

/**
* Require that the unordered list marker be a dash `-`.
*
* @name jsdoc-unordered-list-marker-style
* @memberof rules
* @type {Array}
* @default [ 'error', '-' ]
* @see [unordered-list-marker-style]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-unordered-list-marker-style}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * *   foo
* * *   bar
* * *   beep
* * *   boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*
* @example
* // Good...
*
* /**
* * Squares a number.
* *
* * -   foo
* * -   bar
* * -   beep
* * -   boop
* *
* * @returns {number} x squared
* *
* * @example
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-unordered-list-marker-style' ] = [ 'error', '-' ];

/**
* Enforce that the JSDoc comment documenting a package's main export adheres to stdlib conventions and contains the correct package path.
*
* @name jsdoc-main-export
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad @stdlib/assert/is-array` main export:
*
* /**
* * Tests if a value is an array.
* *
* * @module @stdlib/assert/isarray
* *
* * @example
* * var isArray = require( '@stdlib/assert/is-aray' );
* *
* * var bool = isArray( [] );
* * // returns true
* *
* * bool = isArray( {} );
* * // returns false
* *\/
*
* @example
* // Good `@stdlib/assert/is-array` main export:
*
* /**
* * Test if a value is an array.
* *
* * @module @stdlib/assert/is-array
* *
* * @example
* * var isArray = require( '@stdlib/assert/is-array' );
* *
* * var bool = isArray( [] );
* * // returns true
* *
* * bool = isArray( {} );
* * // returns false
* *\/
*/
rules[ 'stdlib/jsdoc-main-export' ] = 'error';

/**
* Disallow spaces between a closing parenthesis or bracket and a nested object or array expression at the beginning of a line.
*
* @name line-closing-bracket-spacing
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var log = require( '@stdlib/console/log' );
*
* log({
*   'foo': true
* } );
*
* log([
*   1,
*   2,
*   3
* ] );
*
* log([{
*   'bar': true
* } ] );
*
* @example
* // Good...
* var log = require( '@stdlib/console/log' );
*
* log({
*   'foo': true
* });
*
* log([
*   1,
*   2,
*   3
* ]);
*
* log([{
*   'bar': true
* }]);
*/
rules[ 'stdlib/line-closing-bracket-spacing' ] = 'error';

/**
* Enforce that export statements are placed at the end of a file.
*
* @name module-exports-last
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var randn = require( './randn.js' );
*
* module.exports = randn;
*
* var factory = require( './factory.js' );
*
* module.exports.factory = factory;
*
* @example
* // Good...
* var randn = require( './randn.js' );
* var factory = require( './factory.js' );
*
* module.exports = randn;
* module.exports.factory = factory;
*/
rules[ 'stdlib/module-exports-last' ] = 'error';

/**
* Enforce that a namespace `index.js` exports all packages in the respective namespace directory.
*
* @name namespace-export-all
* @memberof rules
* @type {string}
* @default 'warn'
*/
rules[ 'stdlib/namespace-export-all' ] = 'warn';

/**
* Enforce that packages in a namespace `index.js` file are listed in alphabetical order.
*
* @name namespace-index-order
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* /*
* * When adding modules to the namespace, ensure that they are added in alphabetical order * according to module name.
* *\/
*
* // MODULES //
*
* var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
*
* // MAIN //
*
* var ns = {};
*
* /**
* * @name MAX_TYPED_ARRAY_LENGTH
* * @memberof ns
* * @see {@link module:@stdlib/constants/array/max-typed-array-length}
* *\/
* setReadOnly( ns, 'MAX_TYPED_ARRAY_LENGTH', require( '@stdlib/constants/array/max-typed-array-length' ) );
*
* /**
* * @name MAX_ARRAY_LENGTH
* * @memberof ns
* * @see {@link module:@stdlib/constants/array/max-array-length}
* *\/
* setReadOnly( ns, 'MAX_ARRAY_LENGTH', require( '@stdlib/constants/array/max-array-length' ) );
*
* @example
* // Good...
* /*
* * When adding modules to the namespace, ensure that they are added in alphabetical order * according to module name.
* *\/
*
* // MODULES //
*
* var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
*
* // MAIN //
*
* var ns = {};
*
* /**
* * @name MAX_ARRAY_LENGTH
* * @memberof ns
* * @see {@link module:@stdlib/constants/array/max-array-length}
* *\/
* setReadOnly( ns, 'MAX_ARRAY_LENGTH', require( '@stdlib/constants/array/max-array-length' ) );
*
* /**
* * @name MAX_TYPED_ARRAY_LENGTH
* * @memberof ns
* * @see {@link module:@stdlib/constants/array/max-typed-array-length}
* *\/
* setReadOnly( ns, 'MAX_TYPED_ARRAY_LENGTH', require( '@stdlib/constants/array/max-typed-array-length' ) );
*/
rules[ 'stdlib/namespace-index-order' ] = 'error';

/**
* Enforce that the `Array` constructor is invoked with the `new` keyword.
*
* @name new-cap-array
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var arr = Array( 101 );
*
* @example
* // Good...
* var arr = new Array( 101 );
*/
rules[ 'stdlib/new-cap-array' ] = 'error';

/**
* Enforce that error constructors are invoked with the `new` keyword.
*
* @name new-cap-error
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var err = Error( 'error message' );
*
* @example
* // Good...
* var err = new Error( 'error message' );
*/
rules[ 'stdlib/new-cap-error' ] = 'error';

/**
* Enforce that the `RegExp` constructor is invoked with the `new` keyword.
*
* @name new-cap-regexp
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var re = RegExp( '[0-9]' );
*
* @example
* // Good...
* var re = new RegExp( '[0-9]' );
*/
rules[ 'stdlib/new-cap-regexp' ] = 'error';

/**
* Enforce that `require()` calls have only string literals as parameters.
*
* @name no-dynamic-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var pkg = '@stdlib/math/base/special/betainc';
* var betainc = require( pkg );
*
* @example
* // Good...
* var betainc = require( '@stdlib/math/base/special/betainc' );
*/
rules[ 'stdlib/no-dynamic-require' ] = 'error';

/**
* Disallow empty comments.
*
* @name no-empty-comments
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* function square( x ) {
*     var out;
*
*     //
*     out = x*x;
*     return out;
* }
*
* @example
* // Good...
* function square( x ) {
*     var out;
*
*     // Square the number:
*     out = x*x;
*     return out;
* }
*/
rules[ 'stdlib/no-empty-comments' ] = 'error';

/**
* Enforce that `require()` expressions are not immediately invoked.
*
* @name no-immediate-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var debug = require( 'debug' )( 'stdlib' );
*
* @example
* // Good...
* var logger = require( 'debug' );
* var debug = logger( 'stdlib' );
*/
rules[ 'stdlib/no-immediate-require' ] = 'error';

/**
* Disallow `require()` calls of another package's internals.
*
* @name no-internal-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var betainc = require( '@stdlib/math/base/special/betainc/lib/index.js' );
*
* @example
* // Good...
* var betainc = require( '@stdlib/math/base/special/betainc' );
*/
rules[ 'stdlib/no-internal-require' ] = 'error';

/**
* Disallow multiple blank lines.
*
* @name no-multiple-empty-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* // MAIN //
*
* function xlogy( x, y ) {
*   if ( x === 0.0 && !isnan( y ) ) {
*     return 0.0;
*   }
*
*   return x * ln( y );
* }
*
* @example
* // Good...
*
* // MAIN //
*
* function xlogy( x, y ) {
*   if ( x === 0.0 && !isnan( y ) ) {
*     return 0.0;
*   }
*   return x * ln( y );
* }
*/
rules[ 'stdlib/no-multiple-empty-lines' ] = 'error';

/**
* Disallow usage of the built-in global `Math` object.
*
* @name no-builtin-math
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var out = Math.exp( 2.0 );
* // returns ~7.389
*
* @example
* // Good...
* var exp = require( '@stdlib/math/base/special/exp' );
* var out = exp( 2.0 );
* // returns ~7.389
*/
rules[ 'stdlib/no-builtin-math' ] = 'error';

/**
* Enforce that only variables and functions are assigned to `module.exports`.
*
* @name no-dynamic-exports
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var normal = require( '@stdlib/random/base/normal' );
* var beta = require( '@stdlib/random/base/beta' );
*
* // EXPORTS //
*
* module.exports = {
*     'normal': normal,
*     'beta': beta
* };
*
* @example
* // Good...
* var normal = require( '@stdlib/random/base/normal' );
* var beta = require( '@stdlib/random/base/beta' );
*
* // VARIABLES //
*
* var ns = {
*     'normal': normal,
*     'beta': beta
* };
*
* // EXPORTS //
*
* module.exports = ns;
*/
rules[ 'stdlib/no-dynamic-exports' ] = 'error';

/**
* Enforce that one does not use nested property access for `require()` expressions.
*
* @name no-nested-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var special = require( '@stdlib' ).math.base.special;
*
* @example
* // Good...
* var special = require( '@stdlib/math/base' ).special;
*
* @example
* // Good...
* var special = require( '@stdlib/math/base/special' );
*/
rules[ 'stdlib/no-nested-require' ] = 'error';

/**
* Never allow a variable to be declared multiple times within the same scope or for built-in globals to be redeclared.
*
* @name no-redeclare
* @memberof rules
* @type {Array}
* @see [no-redeclare]{@link https://eslint.org/docs/rules/no-redeclare}
*
* @example
* // Bad...
* var a = 'beep';
* // ...
* var a = 'boop';
*
* @example
* // Good...
* var a = 'beep';
* // ...
* a = 'boop';
*/
rules[ 'stdlib/no-redeclare' ] = [ 'error', {
	'builtinGlobals': true,
	'globalsWhitelist': [
		'Array',
		'ArrayBuffer',
		'Boolean',
		'Buffer', // Node.js
		'DataView',
		'Date',
		'Error',
		'EvalError',
		'Float32Array',
		'Float64Array',
		'Function',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Map',
		'Number',
		'Object',
		'process', // Node.js
		'Promise',
		'Proxy',
		'RangeError',
		'ReferenceError',
		'RegExp',
		'Set',
		'SharedArrayBuffer',
		'String',
		'Symbol',
		'SyntaxError',
		'TypeError',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array',
		'URIError',
		'WebAssembly'
	]
}];

/**
* Never allow `require()` calls of absolute file paths.
*
* @name no-require-absolute-path
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var stdlib = require( '/path/to/stdlib' );
*
* @example
* // Good...
* var stdlib = require( '@stdlib' );
*/
rules[ 'stdlib/no-require-absolute-path' ] = 'error';

/**
* Never allow `require()` calls to explicitly require `index.<ext>` files.
*
* @name no-require-index
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var debug = require( 'debug/index.js' );
*
* @example
* // Good...
* var debug = require( 'debug' );
*/
rules[ 'stdlib/no-require-index' ] = 'error';

/**
* Never allow modules to require themselves.
*
* @name no-self-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* var self = require( __filename );
*
* @example
* // Good...
* var other = require( './other.js' );
*/
rules[ 'stdlib/no-self-require' ] = 'error';

/**
* Never allow unassigned `require()` calls.
*
* @name no-unassigned-require
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
* require( '@stdlib' );
*
* @example
* // Good...
* var stdlib = require( '@stdlib' );
*/
rules[ 'stdlib/no-unassigned-require' ] = 'error';

/**
* Enforce that packages are added to a REPL namespace object in alphabetical order according to alias (namespace key). Set by default to `off`, the rule is enabled for namespace files via overriding the default option.
*
* @name repl-namespace-order
* @memberof rules
* @type {string}
* @default 'off'
*
* @example
* // Bad...
* var ns = [];
*
* ns.push({
*   'alias': 'hasMapSupport',
*   'path': '@stdlib/assert/has-map-support',
*   'value': require( '@stdlib/assert/has-map-support' ),
*   'type': 'Function',
*   'related': []
* });
*
* ns.push({
*   'alias': 'hasInt8ArraySupport',
*   'path': '@stdlib/assert/has-int8array-support',
*   'value': require( '@stdlib/assert/has-int8array-support' ),
*   'type': 'Function',
*   'related': []
* });
*
* @example
* // Good...
* var ns = [];
*
* ns.push({
*   'alias': 'hasInt8ArraySupport',
*   'path': '@stdlib/assert/has-int8array-support',
*   'value': require( '@stdlib/assert/has-int8array-support' ),
*   'type': 'Function',
*   'related': []
* });
*
* ns.push({
*   'alias': 'hasMapSupport',
*   'path': '@stdlib/assert/has-map-support',
*   'value': require( '@stdlib/assert/has-map-support' ),
*   'type': 'Function',
*   'related': []
* });
*/
rules[ 'stdlib/repl-namespace-order' ] = 'off';

/**
* Enforce that `require()` calls of files end with a whitelisted file extension.
*
* @name require-file-extensions
* @memberof rules
* @type {Array}
* @default [ 'error', { 'extensionsWhitelist': [ '.js', '.json', '.node' ] } ]
*
* @example
* // Bad...
*
* // Invalid file extension:
* var readme = require( '@stdlib/array/int32/README.md' );
*
* // Missing file extension:
* var debug = require( 'debug/src/browser' );
*
* @example
* // Good...
*
* var Int32Array = require( '@stdlib/array/int32' );
*
* var debug = require( 'debug/src/browser.js' );
*/
rules[ 'stdlib/require-file-extensions' ] = [ 'error', {
	'extensionsWhitelist': [
		'.js',
		'.json',
		'.node'
	]
}];

/**
* Enforce that specified globals are explicitly required.
*
* @name require-globals
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
* var arr = new Float32Array();
*
* @example
* // Good...
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array();
*/
rules[ 'stdlib/require-globals' ] = [ 'error', {
	'globals': [
		'ArrayBuffer',
		'BigInt', // ES11/ES2020
		'BigInt64Array', // ES11/ES2020
		'BigUint64Array', // ES11/ES2020
		'Boolean',
		'Buffer', // Node.js
		'DataView',
		'Float32Array',
		'Float64Array',
		'Function',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Number',
		'Object',
		'Promise', // ES6/ES2015
		'process', // Node.js
		'Proxy', // ES6/2015
		'SharedArrayBuffer',
		'Symbol', // ES6/ES2015
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array'
	]
}];

/**
* Disallow `require()` calls of relative paths which do not begin with a leading `./`.
*
* @name require-leading-slash
* @memberof rules
* @type {string}
*
* @example
* // Bad...
* var foo = require( 'foo/bar.js' );
* var baz = require( '../baz.js' );
*
* @example
* // Good...
* var foo = require( './foo/bar.js' );
* var baz = require( './../baz.js' );
*/
rules[ 'stdlib/require-leading-slash' ] = 'error';

/**
* Enforce spaces inside `require()` parentheses.
*
* @name require-spaces
* @memberof rules
* @type {string}
*
* @example
* // Bad...
* var foo = require('@stdlib/foo');
*
* @example
* // Good...
* var foo = require( '@stdlib/foo' );
*/
rules[ 'stdlib/require-spaces' ] = 'error';

/**
* Enforce that `require()` calls follow a specified order.
*
* @name require-order
* @memberof rules
* @type {Array}
*
* @example
* // Bad...
* var validate = require( './validate.js' );
* var math = require( '@stdlib/math' );
* var debug = require( 'debug' );
* var fs = require( 'fs' );
*
* @example
* // Good...
* var fs = require( 'fs' );
* var debug = require( 'debug' );
* var math = require( '@stdlib/math' );
* var validate = require( './validate.js' );
*/
rules[ 'stdlib/require-order' ] = [ 'error', {
	'order': [
		'builtin',
		'external',
		'/^@stdlib/',
		'path'
	]
}];

/**
* Enforce formatting of section header comments.
*
* @name section-headers
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad... (require two trailing slashes)
*
* // EXPORTS
*
* module.exports = {};
*
* @example
* // Bad... (require a known header type)
*
* // EXPRTS //
*
* module.exports = {};
*
* @example
* // Bad... (require all uppercase letters)
*
* // EXPorts //
*
* module.exports = {};
*
* @example
* // Good...
*
* // EXPORTS //
*
* module.exports = {};
*/
rules[ 'stdlib/section-headers' ] = 'error';

/**
* Ensure that a tape file starts with the expected test.
*
* @name first-unit-test
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* var tape = require( 'tape' );
* var identity = require( './../lib' );
*
* tape( 'the function works correctly', function test( t ) {
*     t.strictEqual( identity( true ), true, 'returns true' );
*     t.end();
* });
*
* @example
* // Good...
*
* var tape = require( 'tape' );
* var identity = require( './../lib' );
*
* tape( 'main export is a function', function test( t ) {
*     t.ok( true, __filename );
*     t.strictEqual( typeof identity, 'function', 'main export is a function' );
*     t.end();
* });
*/
rules[ 'stdlib/first-unit-test' ] = 'error';

/**
* Require parentheses around ternary conditions.
*
* @name ternary-condition-parentheses
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* var randu = require( '@stdlib/random/base/randu' );
*
* var bool = randu() > 0.5 ? 1 : 0;
*
* @example
* // Good...
*
* var randu = require( '@stdlib/random/base/randu' );
*
* var bool = ( randu() > 0.5 ) ? 1 : 0;
*/
rules[ 'stdlib/ternary-condition-parentheses' ] = 'error';

/**
* Enforce that required stdlib constants have uppercase variable names.
*
* @name uppercase-required-constants
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* var eps = require( '@stdlib/constants/math/float64-eps' );
*
* @example
* // Good...
*
* var EPS = require( '@stdlib/constants/math/float64-eps' );
*/
rules[ 'stdlib/uppercase-required-constants' ] = 'error';

/**
* Require section headers to be padded with empty lines.
*
* @name section-header-empty-lines
* @memberof rules
* @type {string}
* @default 'error'
*
* @example
* // Bad...
*
* // EXPORTS //
* module.exports = {};
*
* @example
* // Good...
*
* // EXPORTS //
*
* module.exports = {};
*/
rules[ 'stdlib/section-header-empty-lines' ] = 'error';

/**
* Require variable declarations inside of functions to be ordered by length.
*
* @name vars-order
* @memberof rules
* @type {string}
*
* @example
* // Bad...
*
* function fizzBuzz() {
*   var i;
*   var out;
*
*   for ( i = 1; i <= 100; i++ ) {
*     out = ( i % 5 === 0 ) ? "Buzz" : ( i % 3 === 0 ) ? "Fizz" : i;
*     console.log( out );
*   }
* }
*
* @example
* // Good...
*
* function fizzBuzz() {
*   var out;
*   var i;
*
*   for ( i = 1; i <= 100; i++ ) {
*     out = ( i % 5 === 0 ) ? "Buzz" : ( i % 3 === 0 ) ? "Fizz" : i;
*     console.log( out );
*   }
* }
*/
rules[ 'stdlib/vars-order' ] = [ 'error', {
	'order': 'decreasing'
}];


// EXPORTS //

module.exports = rules;
