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
*     var x;
*     // Square the number:
*     return x*x;
* }
*
* @example
* // Good...
* function square( x ) {
*     var x;
*
*     // Square the number:
*     return x*x;
* }
*/
rules[ 'stdlib/empty-line-before-comment' ] = 'error';


// EXPORTS //

module.exports = rules;
