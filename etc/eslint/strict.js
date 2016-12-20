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
* @default [ 2, 'global' ]
* @see [strict]{@link http://eslint.org/docs/rules/strict}
*/
rules[ 'strict' ] = [ 2, 'global' ];


// EXPORTS //

module.exports = rules;
