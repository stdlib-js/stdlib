'use strict';

/**
* ESLint rules specific to running JavaScript on Node.js or in browsers with CommonJS.
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
*
* @example
* // Bad...
* function foo( x, clbk ) {
*     if ( x === true ) {
*         clbk();
*     }
*     clbk();
* }
*
* @example
* // Good...
* function foo( x, clbk ) {
*     if ( x === true ) {
*         return clbk();
*     }
*     clbk();
* }
*/
rules[ 'callback-return' ] = [ 'warn', [
	'callback',
	'clbk',
	'cb',
	'done',
	'next'
]];

/**
* Allow `require` to be used in a nested scope.
*
* @name global-require
* @memberof rules
* @type {string}
* @default 'off'
* @see [global-require]{@link http://eslint.org/docs/rules/global-require}
*
* @example
* // Okay...
* var f;
* if ( x === 'foo' ) {
*     f = require( 'foo' );
* } else {
*     f = require( 'bar' );
* }
*/
rules[ 'global-require' ] = 'off';

/**
* Always handle callback error arguments.
*
* @name handle-callback-err
* @memberof rules
* @type {Array}
* @default [ 'error', '^(err|error)$' ]
* @see [handle-callback-err]{@link http://eslint.org/docs/rules/handle-callback-err}
*
* @example
* // Bad...
* function foo( err, clbk ) {
*     return clbk();
* }
*
* @example
* // Good...
* function foo( err, clbk ) {
*     if ( error ) {
*         throw error;
*     }
*     return clbk();
* }
*/
rules[ 'handle-callback-err' ] = [ 'error', '^(err|error)$' ];

/**
* Warn when using the `Buffer` constructor.
*
* @name no-buffer-constructor
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-buffer-constructor]{@link http://eslint.org/docs/rules/no-buffer-constructor}
*
* @example
* // Bad...
* var buf = new Buffer( [ 1, 2, 3 ] );
*
* @example
* // Good...
* var buf = Buffer.from( [ 1, 2, 3 ] );
*/
rules[ 'no-buffer-constructor' ] = 'warn'; // TODO: revisit once all Buffer usage includes support for older Node versions

/**
* Only allow `require`d modules to be grouped together.
*
* @name no-mixed-requires
* @memberof rules
* @type {Array}
* @see [no-mixed-requires]{@link http://eslint.org/docs/rules/no-mixed-requires}
*
* @example
* // Good...
* var fs = require( 'fs' );
* var foo = require( 'foo' );
* var beep = require( '@stdlib/beep' );
* var bar = require( './bar.js' );
*/
rules[ 'no-mixed-requires' ] = [ 'error', {
	'grouping': false,
	'allowCall': true
}];

/**
* Never allow the use of `new require()`.
*
* @name no-new-require
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-require]{@link http://eslint.org/docs/rules/no-new-require}
*
* @example
* // Bad...
* var foo = new require( 'foo' );
*
* @example
* // Good...
* var Foo = require( 'foo' );
*
* var foo = new Foo();
*/
rules[ 'no-new-require' ] = 'error';

/**
* Never allow naive directory and file path concatenation.
*
* @name no-path-concat
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-path-concat]{@link http://eslint.org/docs/rules/no-path-concat}
*
* @example
* // Bad...
* var foo = require( __dirname + '/foo.js' );
*
* @example
* // Good...
* var join = require( 'path' ).join;
* var foo = require( join( __dirname, 'foo.js' ) );
*/
rules[ 'no-path-concat' ] = 'error';

/**
* Discourage use of `process.env()`. Use `@stdlib` package instead.
*
* @name no-process-env
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-process-env]{@link http://eslint.org/docs/rules/no-process-env}
*/
rules[ 'no-process-env' ] = 'error';

/**
* Warn when using `process.exit()`.
*
* @name no-process-exit
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-process-exit]{@link http://eslint.org/docs/rules/no-process-exit}
*/
rules[ 'no-process-exit' ] = 'warn';

/**
* Restrict the use of specific modules.
*
* @name no-restricted-modules
* @memberof rules
* @type {Array}
* @see [no-restricted-modules]{@link http://eslint.org/docs/rules/no-restricted-modules}
*/
rules[ 'no-restricted-modules' ] = [ 'error', {
	'paths': [
		'underscore',
		'lodash',
		'async'
	],
	'patterns': [
		'lodash*',
		'async/*'
	]
}];

/**
* Warn when using synchronous methods when an asynchronous version exists.
*
* @name no-sync
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-sync]{@link http://eslint.org/docs/rules/no-sync}
*/
rules[ 'no-sync' ] = 'warn';


// EXPORTS //

module.exports = rules;
