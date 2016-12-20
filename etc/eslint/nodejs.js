'use strict';

/**
* ESLint rules specific to running JavaScript on Node.js.
*
* @namespace rules
*/
var rules = {};

/**
* Warn when a callback may be unintentionally called multiple times.
*
* @name callback-return
* @memberof rules
* @type {Array}
* @see [callback-return]{@link http://eslint.org/docs/rules/callback-return}
*/
rules[ 'callback-return' ] = [ 1, [
	'callback',
	'clbk',
	'cb',
	'done',
	'next'
]];

/**
* Always handle callback error arguments.
*
* @name handle-callback-err
* @memberof rules
* @type {Array}
* @default [ 2, '^(err|error)$' ]
* @see [handle-callback-err]{@link http://eslint.org/docs/rules/handle-callback-err}
*/
rules[ 'handle-callback-err' ] = [ 2, '^(err|error)$' ];

/**
* Only allow `require`d modules to be grouped together.
*
* @name no-mixed-requires
* @memberof rules
* @type {Array}
* @default [ 2, false ]
* @see [no-mixed-requires]{@link http://eslint.org/docs/rules/no-mixed-requires}
*/
rules[ 'no-mixed-requires' ] = [ 2, false ];

/**
* Never allow the use of `new require()`.
*
* @name no-new-require
* @memberof rules
* @type {number}
* @default 2
* @see [no-new-require]{@link http://eslint.org/docs/rules/no-new-require}
*/
rules[ 'no-new-require' ] = 2;

/**
* Never allow naive directory and file path concatenation.
*
* @name no-path-concat
* @memberof rules
* @type {number}
* @default 2
* @see [no-path-concat]{@link http://eslint.org/docs/rules/no-path-concat}
*/
rules[ 'no-path-concat' ] = 2;

/**
* Allow the use of `process.exit()`.
*
* @name no-process-exit
* @memberof rules
* @type {number}
* @default 0
* @see [no-process-exit]{@link http://eslint.org/docs/rules/no-process-exit}
*/
rules[ 'no-process-exit' ] = 0;

/**
* Do not restrict the use of specific modules.
*
* @name no-restricted-modules
* @memberof rules
* @type {number}
* @default 0
* @see [no-restricted-modules]{@link http://eslint.org/docs/rules/no-restricted-modules}
*/
rules[ 'no-restricted-modules' ] = 0;

/**
* Warn when using synchronous methods when an asynchronous version exists.
*
* @name no-sync
* @memberof rules
* @type {number}
* @default 1
* @see [no-sync]{@link http://eslint.org/docs/rules/no-sync}
*/
rules[ 'no-sync' ] = 1;


// EXPORTS //

module.exports = rules;
