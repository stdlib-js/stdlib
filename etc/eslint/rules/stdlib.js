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
