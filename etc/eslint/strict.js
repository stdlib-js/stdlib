'use strict';

/**
* ESLint rules for using strict mode.
*
* @namespace rules
*/
var rules = {};

/**
* Always require `use strict` to be used globally.
*
* @name strict
* @memberof rules
* @type {Array}
* @default [ 'error', 'global' ]
* @see [strict]{@link http://eslint.org/docs/rules/strict}
*
* @example
* // Bad...
* function foo() {
*     'use strict';
*     // Do something...
* }
*
* @example
* // Good...
* 'use strict';
* function foo(){
*     // Do something...
* }
*/
rules[ 'strict' ] = [ 'error', 'global' ];


// EXPORTS //

module.exports = rules;
