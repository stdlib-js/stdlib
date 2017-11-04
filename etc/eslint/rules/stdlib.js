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
