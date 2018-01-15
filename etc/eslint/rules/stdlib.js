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

'use strict';

/**
* ESLint rules specific to stdlib.
*
* @namespace rules
*/
var rules = {};

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-blockquote-indentation' ] = [ 'error', 2 ];

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-code-block-style' ] = [ 'error', 'fenced' ];

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-definition-spacing' ] = 'error';

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-emphasis-marker' ] = [ 'error', '_' ];

/**
* Require `\`` be used as the fenced code marker.
*
* @name jsdoc-fenced-code-marker
* @memberof rules
* @type {Array}
* @default [ 'error', '`' ]
* @see [definition-case]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-fenced-code-marker}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-final-definition' ] = 'error';

/**
* Prevent too many spaces from being used to hard break.
*
* @name jsdoc-hard-break-spaces
* @memberof rules
* @type {string}
* @default 'error'
* @see [final-definition]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-hard-break-spaces}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-hard-break-spaces' ] = 'error';

/**
* Require that JSDoc descriptions start with an uppercase letter and end with a period.
*
* @name jsdoc-leading-description-sentence
* @memberof rules
* @type {string}
* @default 'error'
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
rules[ 'stdlib/jsdoc-leading-description-sentence' ] = 'error';

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-list-item-content-indent' ] = 'error';

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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-auto-link-without-protocol}
*
* @example
* // Bad...
*
* /**
* * Squares a number.
* *
* * <foo@bar.com>
* *
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-blockquote-without-marker}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-blockquote-without-marker' ] = 'error';

/**
* Do not allow duplicate definitions.
*
* @name jsdoc-no-duplicate-definitions
* @memberof rules
* @type {string}
* @default 'error'
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-definitions}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* @see [list-item-bullet-indent]{@link https://github.com/wooorm/remark-lint/tree/master/packages/remark-lint-no-duplicate-headings-in-section}
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
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
* * @arg {number} x - input number
* * @return {number} x squared
* *
* * @examples
* * var y = square( 2.0 );
* * // returns 4.0
* *\/
* function square( x ) {
*     return x*x;
* }
*/
rules[ 'stdlib/jsdoc-no-duplicate-headings-in-section' ] = 'error';

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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop [beep](http://foo.bar/baz).
* *
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-heading-like-paragraph' ] = 'error';

/**
* Prevent HTML nodes from being used.
*
* @name jsdoc-no-html
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
* * <h2> References </h2>
* *
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-html' ] = 'off';

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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
*
* @example
* // Good...
*
* /**
* * Boop: _beep_.
* *
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-literal-urls' ] = 'error';

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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*
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
* * @return {string} a value
* *
* * @examples
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
* * Beep [boop](boop).
* *
* * [boop]: http://foo.bar/baz
* *
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-reference-like-url' ] = 'error';

/**
* Forbid shell commands to be prefixed with `$` symbols.
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
* * ``` bash
* * $ echo beep
* * ```
* *
* * @return {string} a value
* *
* * @examples
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
* * ``` bash
* * echo beep
* * ```
* *
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-shortcut-reference-link' ] = 'error';

/**
* Prevent unneeded indentation before tables.
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
* * var str = beep();
* * // returns 'boop'
* *\/
* function beep() {
*     return 'boop';
* }
*/
rules[ 'stdlib/jsdoc-no-unused-definitions' ] = 'error';

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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {string} a value
* *
* * @examples
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
* * @return {number} x squared
* *
* * @examples
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
* Enforce that require() calls have only string literals as parameters.
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
* Enforce that require() expressions are not immediately invoked.
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
rules[ 'stdlib/no-immediate-require' ] = 'off'; // TODO: Enable once require( 'object-keys').shim() has been replaced

/**
* Disallow require() calls of another package's internals.
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
* @default [ 'error', { 'builtinGlobals': false, 'globalsWhitelist': [] } ]
* @see [no-redeclare]{@link http://eslint.org/docs/rules/no-redeclare}
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
		'Buffer',
		'DataView',
		'Date',
		'Error',
		'EvalError',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Map',
		'Number',
		'Object',
		'Promise',
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
		'URIError'
	]
}];

/**
* Enforce that require() calls of files end with a whitelisted file extension.
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
rules[ 'stdlib/require-file-extensions' ] = [ 'off', { // TODO: Enable once all @stdlib/tools packages are moved to @stdlib/_tools
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
* @type {string}
* @default 'error'
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
		'Buffer',
		'DataView',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'SharedArrayBuffer',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array'
	]
}];

/**
* Enforce that typed array constructors are explicitly required.
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


// EXPORTS //

module.exports = rules;
