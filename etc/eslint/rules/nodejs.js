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
* ESLint rules specific to running JavaScript on Node.js or in browsers with CommonJS.
*
* @namespace rules
*/
var rules = {};

/**
* Warn when a callback may be unintentionally called multiple times.
*
* @name node/callback-return
* @memberof rules
* @type {Array}
* @see [node/callback-return]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md}
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
rules[ 'node/callback-return' ] = [ 'warn', [
	'callback',
	'clbk',
	'cb',
	'done',
	'next'
]];

/* eslint-disable -- disable linting due to `import` statements throwing for doctest rules */

/**
* Enforce use of `module.exports` as the export style over `exports`.
*
* @name node/file-extension-in-import
* @memberof rules
* @type {Array}
* @see [node/file-extension-in-import]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md}
*
* @example
* // Bad...
* import foo from './path/to/a/file';
*
* @example
* // Good...
* import eslint from 'eslint';
* import foo from './path/to/a/file.js';
*/
rules[ 'node/file-extension-in-import' ] = [ 'error', 'always', {
	'tryExtensions': [ '.js', '.json', '.node', '.ts' ]
}];

/* eslint-enable */

/**
* Enforce use of `module.exports` as the export style over `exports`.
*
* @name node/exports-style
* @memberof rules
* @type {Array}
* @see [node/exports-style]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md}
*
* @example
* // Bad...
* exports.foo = 1;
* exports.bar = 2;
*
* @example
* // Good...
* module.exports = {
*     'foo': 1,
*     'bar': 2
* };
*/
rules[ 'node/exports-style' ] = [ 'error', 'module.exports' ];

/**
* Allow `require` to be used in a nested scope.
*
* @name node/global-require
* @memberof rules
* @type {string}
* @default 'off'
* @see [node/global-require]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md}
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
rules[ 'node/global-require' ] = 'off';

/**
* Always handle callback error arguments.
*
* @name node/handle-callback-err
* @memberof rules
* @type {Array}
* @default [ 'error', '^(err|error)$' ]
* @see [node/handle-callback-err]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/handle-callback-err.md}
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
rules[ 'node/handle-callback-err' ] = [ 'error', '^(err|error)$' ];

/**
* Disallow use of `exports = {}` aside from `module.exports = exports = {}`.
*
* @name node/no-exports-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [node/no-exports-assign]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md}
*
* @example
* // Bad...
* exports = {};
*
* @example
* // Good...
* module.exports.foo = 1;
* exports.bar = 2;
*
* module.exports = {};
*/
rules[ 'node/no-exports-assign' ] = 'error';

/**
* Only allow `require`d modules to be grouped together.
*
* @name node/no-mixed-requires
* @memberof rules
* @type {Array}
* @see [node/no-mixed-requires]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-mixed-requires.md}
*
* @example
* // Good...
* var fs = require( 'fs' );
* var foo = require( 'foo' );
* var beep = require( '@stdlib/beep' );
* var bar = require( './bar.js' );
*/
rules[ 'node/no-mixed-requires' ] = [ 'error', {
	'grouping': false,
	'allowCall': true
}];

/**
* Never allow the use of `new require()`.
*
* @name node/no-new-require
* @memberof rules
* @type {string}
* @default 'error'
* @see [node/no-new-require]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md}
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
rules[ 'node/no-new-require' ] = 'error';

/**
* Never allow naive directory and file path concatenation.
*
* @name node/no-path-concat
* @memberof rules
* @type {string}
* @default 'error'
* @see [node/no-path-concat]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md}
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
rules[ 'node/no-path-concat' ] = 'error';

/**
* Discourage use of `process.env()`. Use `@stdlib` package instead.
*
* @name node/no-process-env
* @memberof rules
* @type {string}
* @default 'error'
* @see [node/no-process-env]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md}
*/
rules[ 'node/no-process-env' ] = 'error';

/**
* Warn when using `process.exit()`.
*
* @name node/no-process-exit
* @memberof rules
* @type {string}
* @default 'warn'
* @see [node/no-process-exit]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md}
*/
rules[ 'node/no-process-exit' ] = 'warn';

/**
* Restrict the use of specific module when loaded by `require()`.
*
* @name node/no-restricted-require
* @memberof rules
* @type {Array}
* @see [node/no-restricted-require]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md}
*/
rules[ 'node/no-restricted-require' ] = [ 'error', [
	'underscore',
	'lodash',
	'async'
]];

/**
* Restrict the use of specific modules when loaded by `import` declarations.
*
* @name node/no-restricted-import
* @memberof rules
* @type {Array}
* @see [node/no-restricted-import]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-import.md}
*/
rules[ 'node/no-restricted-import' ] = [ 'error', [
	'underscore',
	'lodash',
	'async'
]];

/**
* Warn when using synchronous methods when an asynchronous version exists.
*
* @name node/no-sync
* @memberof rules
* @type {string}
* @default 'warn'
* @see [node/no-sync]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md}
*/
rules[ 'node/no-sync' ] = 'warn';

/**
* Disallow `bin` files that npm ignores.
*
* @name node/no-unpublished-bin
* @memberof rules
* @type {Array}
* @see [node/no-unpublished-bin]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md}
*/
rules[ 'node/no-unpublished-bin' ] = [ 'error' ];

/**
* Disallow `import` declarations which import private modules.
*
* @name node/no-unpublished-import
* @memberof rules
* @type {Array}
* @see [node/no-unpublished-import]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md}
*/
rules[ 'node/no-unpublished-import' ] = [ 'error', {
	'allowModules': [],
	'tryExtensions': [ '.js', '.json', '.node' ]
}];

/**
* Disallow `require()` expressions which import private modules.
*
* @name node/no-unpublished-require
* @memberof rules
* @type {Array}
* @see [node/no-unpublished-require]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md}
*/
rules[ 'node/no-unpublished-require' ] = [ 'error', {
	'allowModules': [],
	'tryExtensions': [ '.js', '.json', '.node' ]
}];

/**
* Disallow ECMAScript built-ins unsupported by Node.js version 0.12.
*
* @name node/no-unsupported-features/es-builtins
* @memberof rules
* @type {Array}
* @see [node/no-unsupported-features/es-builtins]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md}
*/
rules[ 'node/no-unsupported-features/es-builtins' ] = [ 'error', {
	'version': '>=0.12.18',
	'ignores': []
}];

/**
* Disallow ECMAScript syntax unsupported by Node.js version 0.12.
*
* @name node/no-unsupported-features/es-syntax
* @memberof rules
* @type {Array}
* @see [node/no-unsupported-features/es-syntax]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md}
*/
rules[ 'node/no-unsupported-features/es-syntax' ] = [ 'error', {
	'version': '>=0.12.18',
	'ignores': []
}];

/**
* Disallow Node.js built-in APIs unsupported by Node.js version 0.12.
*
* @name node/no-unsupported-features/node-builtins
* @memberof rules
* @type {Array}
* @see [node/no-unsupported-features/node-builtins]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md}
*/
rules[ 'node/no-unsupported-features/node-builtins' ] = [ 'error', {
	'version': '>=0.12.18',
	'ignores': []
}];

/**
* Make ESLint come to address `process.exit()` as throw in code path analysis.
*
* @name node/process-exit-as-throw
* @memberof rules
* @type {string}
* @default 'error'
* @see [node/process-exit-as-throw]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md}
*/
rules[ 'node/process-exit-as-throw' ] = 'error';

/**
* Suggest correct usage of shebang for `bin` files.
*
* @name node/shebang
* @memberof rules
* @type {Array}
* @see [node/shebang]{@link https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md}
*/
rules[ 'node/shebang' ] = [ 'off' ];


// EXPORTS //

module.exports = rules;
