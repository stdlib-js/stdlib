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
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array'
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
* var readme = require( '@stdlib/types/array/int32/README.md' );
*
* // Missing file extension:
* var debug = require( 'debug/src/browser' );
*
* @example
* // Good...
*
* var Int32Array = require( '@stdlib/types/array/int32' );
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
* Enforce that typed array constructors are explicitly required.
*
* @name require-typed-arrays
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
* var Float32Array = require( '@stdlib/types/array/float32' );
*
* var arr = new Float32Array();
*/
rules[ 'stdlib/require-typed-arrays' ] = 'error';


// EXPORTS //

module.exports = rules;
