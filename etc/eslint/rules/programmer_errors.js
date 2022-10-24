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
* ESLint rules to catch programmer errors.
*
* @namespace rules
*/
var rules = {};

/**
* Never allow a `for` loop with a stop condition which can never be reached.
*
* @name for-direction
* @memberof rules
* @type {string}
* @default 'error'
* @see [for-direction]{@link https://eslint.org/docs/rules/for-direction}
*
* @example
* // Bad...
* var i;
* for ( i = 0; i < 10; i-- ) {
*     // Do something...
* }
*
* @example
* // Good...
* var i;
* for ( i = 0; i < 10; i++ ) {
*     // Do something...
* }
*/
rules[ 'for-direction' ] = 'error';

/**
* Require a `return` statement in property getters.
*
* @name 'getter-return'
* @memberof rules
* @type {string}
* @default 'error'
* @see [getter-return]{@link https://eslint.org/docs/rules/getter-return}
*
* @example
* // Bad...
* Object.defineProperty( {}, 'foo', {
*     'get': function get() {
*         // No return...
*     }
* });
*
* @example
* // Good...
* Object.defineProperty( {}, 'foo', {
*     'get': function get() {
*         return 'bar'
*     }
* });
*/
rules[ 'getter-return' ] = 'error';

/**
* Never allow using an async function as a `Promise` executor.
*
* @name no-async-promise-executor)
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-async-promise-executor)]{@link https://eslint.org/docs/rules/no-async-promise-executor}
*/
rules[ 'no-async-promise-executor' ] = 'error';

/**
* Warn when using `await` inside of loops.
*
* @name no-await-in-loop
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-await-in-loop]{@link https://eslint.org/docs/rules/no-await-in-loop}
*/
rules[ 'no-await-in-loop' ] = 'warn';

/**
* Never allow comparison to negative zero.
*
* @name no-compare-neg-zero
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-compare-neg-zero]{@link https://eslint.org/docs/rules/no-compare-neg-zero}
*
* @example
* // Bad...
* var x;
* if ( x === -0 ) {
*     // Do something...
* }
*/
rules[ 'no-compare-neg-zero' ] = 'error';

/**
* Never allow assignment in a conditional statement.
*
* @name no-cond-assign
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [no-cond-assign]{@link https://eslint.org/docs/rules/no-cond-assign}
*
* @example
* // Bad...
* var x;
* if ( x = 0 ) {
*     b = 1;
* }
*
* @example
* // Good...
* var x;
* if ( x === 0 ) {
*     b = 1;
* }
*/
rules[ 'no-cond-assign' ] = [ 'error', 'always' ];

/**
* Warn when using `console` in Node. Consider using a logger instead.
*
* @name no-console
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-console]{@link https://eslint.org/docs/rules/no-console}
*
* @example
* // Avoid...
* console.log( 'beep' );
*
* @example
* // Custom logger:
* debug( 'beep' );
*/
rules[ 'no-console' ] = 'warn';

/**
* Never allow constant expressions in conditions, except in loops.
*
* @name no-constant-condition
* @memberof rules
* @type {Array}
* @default [ 'error', {'checkLoops':false} ]
* @see [no-constant-condition]{@link https://eslint.org/docs/rules/no-constant-condition}
*
* @example
* // Bad...
* if ( false ) {
*     throw Error( 'beep' );
* }
*
* @example
* // Okay...
* while ( true ) {
*     if ( foo === true ) {
*         break;
*     }
* }
*/
rules[ 'no-constant-condition' ] = [ 'error', {
	'checkLoops': false
}];

/**
* Never allow control characters in regular expressions.
*
* @name no-control-regex
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-control-regex]{@link https://eslint.org/docs/rules/no-control-regex}
*
* @example
* // Bad...
* var re = /\x1f/;
*
* @example
* // Good...
* var re = /\x20/;
*/
rules[ 'no-control-regex' ] = 'error';

/**
* Never allow the `debugger` statement.
*
* @name no-debugger
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-debugger]{@link https://eslint.org/docs/rules/no-debugger}
*
* @example
* // Bad...
* function foo( bool ) {
*     if ( bool === true ) {
*         debugger;
*         return bool;
*     }
* }
*
* @example
* function foo( bool ) {
*     if ( bool === true ) {
*         return bool;
*     }
* }
*/
rules[ 'no-debugger' ] = 'error';

/**
* Never allow duplicate parameter names when not in `strict mode`.
*
* @name no-dupe-args
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-dupe-args]{@link https://eslint.org/docs/rules/no-dupe-args}
*
* @example
* // Bad...
* function foo( a, b, a ) {
*     // Do something...
* }
*
* @example
* // Good...
* function foo( a, b, c ) {
*     // Do something...
* }
*/
rules[ 'no-dupe-args' ] = 'error';

/**
* Never allow duplicate keys in object literals, as doing so can lead to unexpected behavior.
*
* @name no-dupe-keys
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-dupe-keys]{@link https://eslint.org/docs/rules/no-dupe-keys}
*
* @example
* // Bad...
* var obj = {
*     'bar': 'foo',
*     'bar': 'beep'
* };
*
* @example
* // Good...
* var obj = {
*     'bar': 'foo',
*     'baz': 'beep'
* };
*/
rules[ 'no-dupe-keys' ] = 'error';

/**
* Never allow duplicate case labels.
*
* @name no-duplicate-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-case]{@link https://eslint.org/docs/rules/no-duplicate-case}
*
* @example
* // Bad...
* var x = 1;
* switch ( x ) {
* case 1:
*     break;
* case 2:
*     break;
* case 1:
*     break;
* default:
*     break;
* }
*
* @example
* // Good...
* var x = 1;
* switch ( x ) {
* case 1:
*     break;
* case 2:
*     break;
* case 3:
*     break;
* default:
*     break;
* }
*/
rules[ 'no-duplicate-case' ] = 'error';

/**
* Never allow empty block statements, including when using `try/catch`.
*
* @name no-empty
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty]{@link https://eslint.org/docs/rules/no-empty}
*
* @example
* // Bad...
* if ( a === 'b' ) {}
*
* @example
* // Bad...
* try {
*     foo();
* } catch( err ) {}
*
* @example
* // Good...
* if ( a === 'b' ) {
*     // Do nothing...
* }
*
* @example
* // Good...
* try {
*     foo();
* } catch( err ) {
*     // Do nothing...
* }
*/
rules[ 'no-empty' ] = 'error';

/**
* Never allow empty character classes in regular expression literals.
*
* @name no-empty-character-class
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty-character-class]{@link https://eslint.org/docs/rules/no-empty-character-class}
*
* @example
* // Bad...
* var re = /^abc[]/;
*
* @example
* // Good...
* var re = /^abc[a-z]/;
*/
rules[ 'no-empty-character-class' ] = 'error';

/**
* Never allow reassignment of an exception parameter in a `catch` block.
*
* @name no-ex-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-ex-assign]{@link https://eslint.org/docs/rules/no-ex-assign}
*
* @example
* // Bad...
* try {
*     foo();
* } catch( err ) {
*     err = false;
* }
*
* @example
* // Good...
* var bool;
* try {
*     foo();
* } catch( err ) {
*     bool = false;
* }
*/
rules[ 'no-ex-assign' ] = 'error';

/**
* Never allow extra boolean casts in an `if` statement.
*
* @name no-extra-boolean-cast
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extra-boolean-cast]{@link https://eslint.org/docs/rules/no-extra-boolean-cast}
*
* @example
* // Bad...
* if ( !!foo ) {
*     // Do something...
* }
*
* @example
* // Good...
* if ( foo ) {
*     // Do something...
* }
*/
rules[ 'no-extra-boolean-cast' ] = 'error';

/**
* Never allow unnecessary parentheses around function expressions.
*
* @name no-extra-parens
* @memberof rules
* @type {Array}
* @default [ 'error', 'functions' ]
* @see [no-extra-parens]{@link https://eslint.org/docs/rules/no-extra-parens}
*
* @example
* // Bad...
* (function foo() {
*     // Do something...
* })
*
* @example
* // Good...
* function foo() {
*     // Do something...
* }
*/
rules[ 'no-extra-parens' ] = [ 'error', 'functions' ];

/**
* Never allow unnecessary extra semicolons.
*
* @name no-extra-semi
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extra-semi]{@link https://eslint.org/docs/rules/no-extra-semi}
*
* @example
* // Bad...
* var x = 5;;
*
* @example
* // Good...
* var x = 5;
*/
rules[ 'no-extra-semi' ] = 'error';

/**
* Never allow reassignment of a FunctionDeclaration.
*
* @name no-func-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-func-assign]{@link https://eslint.org/docs/rules/no-func-assign}
*
* @example
* // Bad...
* function foo() {
*     // Do something...
* }
*
* foo = 'beep';
*
* @example
* // Good...
* function foo() {
*     // Do something...
* }
*
* var bar = 'beep';
*/
rules[ 'no-func-assign' ] = 'error';

/**
* Never allow assigning to imported bindings.
*
* @name no-import-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-import-assign]{@link https://eslint.org/docs/rules/no-import-assign}
*/
rules[ 'no-import-assign' ] = 'error';

/**
* Never allow either function or variable declarations within inner block scopes.
*
* @name no-inner-declarations
* @memberof rules
* @type {Array}
* @default [ 'error', 'both' ]
* @see [no-inner-declarations]{@link https://eslint.org/docs/rules/no-inner-declarations}
*
* @example
* // Bad...
* if ( foo ) {
*     var bar = true;
* }
*
* @example
* // Good...
* var bar;
* if ( foo ) {
*     bar = true;
* }
*
* @example
* // Bad...
* if ( foo ) {
*     function bar() {
*         // Do something...
*     }
*     bar();
* }
*
* @example
* // Good...
* function bar() {
*     // Do something...
* }
*
* if ( foo ) {
*     bar();
* }
*/
rules[ 'no-inner-declarations' ] = [ 'error', 'both' ];

/**
* Never allow invalid regular expressions.
*
* @name no-invalid-regexp
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-invalid-regexp]{@link https://eslint.org/docs/rules/no-invalid-regexp}
*
* @example
* // Bad...
* var re = new RegExp( '[' );
*
* @example
* // Good...
* var re = new RegExp( '[a-z]' );
*/
rules[ 'no-invalid-regexp' ] = 'error';

/**
* Never allow irregular whitespace.
*
* @name no-irregular-whitespace
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-irregular-whitespace]{@link https://eslint.org/docs/rules/no-irregular-whitespace}
*/
rules[ 'no-irregular-whitespace' ] = 'error';

/**
* Never allow characters which are made with multiple code points in character class syntax.
*
* @name no-misleading-character-class
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-misleading-character-class]{@link https://eslint.org/docs/rules/no-misleading-character-class}
*
* @example
* // Bad...
* var re = /^[👍]$/;
*
* @example
* // Good...
* var re = /^[👍]$/u;
*/
rules[ 'no-misleading-character-class' ] = 'error';

/**
* Never allow calling of global objects as functions.
*
* @name no-obj-calls
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-obj-calls]{@link https://eslint.org/docs/rules/no-obj-calls}
*
* @example
* // Bad...
* var math = Math();
*
* @example
* // Good...
* var math = Math;
*/
rules[ 'no-obj-calls' ] = 'error';

/**
* Never allow direct use of `Object` prototype methods. Use a functional approach instead (i.e., use packages).
*
* @name no-prototype-builtins
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-prototype-builtins]{@link https://eslint.org/docs/rules/no-prototype-builtins}
*
* @example
* // Bad...
* var obj = {};
* var bool = obj.hasOwnProperty( 'foo' );
*
* @example
* // Good...
* var obj = {};
* var bool = Object.prototype.hasOwnProperty.call( obj, 'foo' );
*/
rules[ 'no-prototype-builtins' ] = 'error';

/**
* Never allow multiple consecutive spaces within a regular expression.
*
* @name no-regex-spaces
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-regex-spaces]{@link https://eslint.org/docs/rules/no-regex-spaces}
*
* @example
* // Bad...
* var re = /ab   c/;
*
* @example
* // Good...
* var re = /ab {3}c/;
*/
rules[ 'no-regex-spaces' ] = 'error';

/**
* Never allow a sparse array to be initialized using an array literal and commas.
*
* @name no-sparse-arrays
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-sparse-arrays]{@link https://eslint.org/docs/rules/no-sparse-arrays}
*
* @example
* // Bad...
* var arr = [ 'a', , 'c' ];
*
* @example
* // Good...
* var arr = new Array( 3 );
* arr[ 0 ] = 'a';
* arr[ 2 ] = 'c';
*/
rules[ 'no-sparse-arrays' ] = 'error';

/**
* Allow template literal placeholder syntax in regular strings.
*
* @name no-template-curly-in-string
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-template-curly-in-string]{@link https://eslint.org/docs/rules/no-template-curly-in-string}
*
* @example
* // Okay...
* var str = 'Hello, ${name}!';
*/
rules[ 'no-template-curly-in-string' ] = 'off';

/**
* Never allow confusing multiline expressions.
*
* @name no-unexpected-multiline
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unexpected-multiline]{@link https://eslint.org/docs/rules/no-unexpected-multiline}
*
* @example
* // Bad...
* var name = 'beep'
* [ 1, 2, 3 ].concat( [ 4, 5, 6 ] );
*
* @example
* // Good...
* var name = 'beep';
* [ 1, 2, 3 ].concat( [ 4, 5, 6 ] );
*/
rules[ 'no-unexpected-multiline' ] = 'error';

/**
* Never allow the presence of unreachable code.
*
* @name no-unreachable
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unreachable]{@link https://eslint.org/docs/rules/no-unreachable}
*
* @example
* // Bad...
* function foo() {
*     return 10;
*     var x = 5;
* }
*
* @example
* // Good...
* function foo() {
*     var x = 5;
*     return 10;
* }
*
* @example
* // Okay...
* function foo() {
*     return bar();
*     function bar() {
*         return 'beep';
*     }
* }
*/
rules[ 'no-unreachable' ] = 'error';

/**
* Never allow control flow statements in `finally` blocks.
*
* @name no-unsafe-finally
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unsafe-finally]{@link https://eslint.org/docs/rules/no-unsafe-finally}
*
* @example
* // Bad...
* function foo() {
*     try {
*         return 1;
*     } catch ( err ) {
*         return 2;
*     } finally {
*         return 3; // 3 is returned before 1
*     }
* }
*
* @example
* // Good...
* var bool;
* function foo() {
*     try {
*         return 1;
*     } catch ( err ) {
*         return 2;
*     } finally {
*         bool = true;
*     }
* }
*/
rules[ 'no-unsafe-finally' ] = 'error';

/**
* Never allow confusing negation of the left operand of relational operators.
*
* @name no-unsafe-negation
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unsafe-negation]{@link https://eslint.org/docs/rules/no-unsafe-negation}
*
* @example
* // Bad...
* var x = -4 + 3;
*
* @example
* // Good...
* var x = 3 - 4;
*/
rules[ 'no-unsafe-negation' ] = 'error';

/**
* Never allow assignments that can lead to race conditions due to usage of await or yield.
*
* @name require-atomic-updates
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-atomic-updates]{@link https://eslint.org/docs/rules/require-atomic-updates}
*/
rules[ 'require-atomic-updates' ] = 'error';

/**
* Never allow direct comparison with `NaN`.
*
* @name use-isnan
* @memberof rules
* @type {string}
* @default 'error'
* @see [use-isnan]{@link https://eslint.org/docs/rules/use-isnan}
*
* @example
* // Bad...
* if ( x === NaN ) {
*     // Do something...
* }
*
* @example
* // Good...
* var isnan = require( '@stdlib/math/base/assert/is-nan' );
* if ( isnan( x ) ) {
*     // Do something...
* }
*/
rules[ 'use-isnan' ] = 'error';

/**
* Require valid JSDoc.
*
* @name valid-jsdoc
* @memberof rules
* @type {Array}
* @see [valid-jsdoc]{@link https://eslint.org/docs/rules/valid-jsdoc}
*/
rules[ 'valid-jsdoc' ] = [ 'error', {
	'prefer': {
		'arg': 'param',
		'argument': 'param',
		'class': 'constructor',
		'return': 'returns'
	},
	'requireReturn': false,
	'requireReturnType': true,
	'matchDescription': '.+',
	'requireParamDescription': true,
	'requireReturnDescription': true
}];

/**
* Only allow the result of `typeof` to be compared against a select subset of known strings (e.g., 'string', 'undefined', etc.).
*
* @name valid-typeof
* @memberof rules
* @type {Array}
* @default [ 'error', {'requireStringLiterals':true} ]
* @see [valid-typeof]{@link https://eslint.org/docs/rules/valid-typeof}
*
* @example
* // Bad...
* var bool = ( typeof foo === undefined );
*
* @example
* // Bad...
* var bool = ( typeof foo === 'undeefined' );
*
* @example
* // Good...
* var bool = ( typeof foo === 'undefined' );
*/
rules[ 'valid-typeof' ] = [ 'error', {
	'requireStringLiterals': true
}];


// EXPORTS //

module.exports = rules;
