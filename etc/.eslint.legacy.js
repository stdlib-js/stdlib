'use strict';

/**
* ESLint rules for JSHint/JSLint compatibility.
*
* @namespace rules
*/
var rules = {};

/**
* Maximum depth that blocks can be nested.
*
* @name max-depth
* @memberof rules
* @type {Array}
* @default [ 2, 5 ]
* @see [max-depth]{@link http://eslint.org/docs/rules/max-depth}
*/
rules[ 'max-depth' ] = [ 2, 5 ];

/**
* Maximum line length.
*
* @name max-len
* @memberof rules
* @type {Array}
* @see [max-len]{@link http://eslint.org/docs/rules/max-len}
*/
rules[ 'max-len' ] = [ 1, 80, 4, {
	'ignoreComments': true,
	'ignoreUrls': true
}];

/**
* Maximum number of parameters.
*
* @name max-params
* @memberof rules
* @type {Array}
* @default [ 2, 10 ]
* @see [max-params]{@link http://eslint.org/docs/rules/max-params}
*/
rules[ 'max-params' ] = [ 2, 10 ];

/**
* Maximum number of statements in a function.
*
* @name max-statements
* @memberof rules
* @type {Array}
* @default [ 2, 100 ]
* @see [max-statements]{@link http://eslint.org/docs/rules/max-statements}
*/
rules[ 'max-statements' ] = [ 2, 100 ];

/**
* Allow the use of bitwise operators.
*
* @name no-bitwise
* @memberof rules
* @type {number}
* @default 0
* @see [no-bitwise]{@link http://eslint.org/docs/rules/no-bitwise}
*/
rules[ 'no-bitwise' ] = 0;

/**
* Allow the use of `++` and `--`.
*
* @name no-plusplus
* @memberof rules
* @type {number}
* @default 0
* @see [no-plusplus]{@link http://eslint.org/docs/rules/no-plusplus}
*/
rules[ 'no-plusplus' ] = 0;


// EXPORTS //

module.exports = rules;
