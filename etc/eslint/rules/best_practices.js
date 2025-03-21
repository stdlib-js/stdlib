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
* ESLint rules for enforcing best practices.
*
* @namespace rules
*/
var rules = {};

/**
* Never allow a setter to be defined without a paired getter.
*
* @name accessor-pairs
* @memberof rules
* @type {Array}
* @see [accessor-pairs]{@link https://eslint.org/docs/rules/accessor-pairs}
*
* @example
* // Bad...
* var obj = {};
* Object.defineProperty( obj, 'a', {
*     'set': function set() {}
* });
*
* @example
* // Good...
* var obj = {};
* Object.defineProperty( obj, 'a', {
*     'set': function set() {},
*     'get': function get() {}
* });
*/
rules[ 'accessor-pairs' ] = [ 'error', {
	'setWithoutGet': true,
	'getWithoutSet': false
}];

/**
* Require a `return` statement in `Array` methods.
*
* @name array-callback-return
* @memberof rules
* @type {Array}
* @see [array-callback-return]{@link https://eslint.org/docs/rules/array-callback-return}
*
* @example
* // Bad...
* function reduce( obj, item, i ) {
*     obj[ i ] = item;
* }
* var o = [ 1, 2, 3 ].reduce( reduce, {} );
*
* @example
* // Good...
* function reduce( obj, item, i ) {
*     obj[ i ] = item;
*     return obj;
* }
* var o = [ 1, 2, 3 ].reduce( reduce, {} );
*/
rules[ 'array-callback-return' ] = [ 'error', {
	'allowImplicit': false
}];

/**
* Never allow variables to be used outside of the block in which they were defined.
*
* @name block-scoped-var
* @memberof rules
* @type {string}
* @default 'error'
* @see [block-scoped-var]{@link https://eslint.org/docs/rules/block-scoped-var}
*
* @example
* // Bad...
* if ( foo ) {
*     var bar = 5;
* }
* if ( bar ) {
*     // Do something...
* }
*
* @example
* // Good...
* var bar;
* if ( foo ) {
*     bar = 5;
* }
* if ( bar ) {
*     // Do something...
* }
*/
rules[ 'block-scoped-var' ] = 'error';

/**
* Require class methods to use `this`, as any method which does not use `this` can be a `static` method.
*
* @name class-methods-use-this
* @memberof rules
* @type {string}
* @default 'error'
* @see [class-methods-use-this]{@link https://eslint.org/docs/rules/class-methods-use-this}
*
* @example
* // Bad...
* class A {
*     constructor() {}
*     say() {
*         return 'Hello';
*     }
* }
*
* @example
* // Good...
* class A {
*     constructor() {}
*     static say() {
*         return 'Hello';
*     }
* }
*/
rules[ 'class-methods-use-this' ] = 'error';

/**
* Disable cyclomatic complexity.
*
* @name complexity
* @memberof rules
* @type {string}
* @default 'off'
* @see [complexity]{@link https://eslint.org/docs/rules/complexity}
*/
rules[ 'complexity' ] = 'off';

/**
* Do not enforce consistent returns.
*
* @name consistent-return
* @memberof rules
* @type {string}
* @default 'off'
* @see [consistent-return]{@link https://eslint.org/docs/rules/consistent-return}
*
* @example
* // Okay...
* function foo( x ) {
*     if ( x === 1 ) {
*         return NaN;
*     }
*     // No explicit return...
* }
*/
rules[ 'consistent-return' ] = 'off';

/**
* Always require curly braces.
*
* @name curly
* @memberof rules
* @type {string}
* @default 'error'
* @see [curly]{@link https://eslint.org/docs/rules/curly}
*
* @example
* // Bad...
* if ( x === 1 ) x += 1;
*
* @example
* // Good...
* if ( x === 1 ) {
*     x += 1;
* }
*/
rules[ 'curly' ] = 'error';

/**
* Always require a `default` case in `switch` statements.
*
* @name default-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [default-case]{@link https://eslint.org/docs/rules/default-case}
*
* @example
* // Bad...
* switch( foo ) {
* case 1:
*     break;
* }
*
* @example
* // Good...
* switch( foo ) {
* case 1:
*     break;
* default:
*     break;
* }
*/
rules[ 'default-case' ] = 'error';

/**
* Always require a `default` clause to be last in a `switch` statement.
*
* @name default-case-last
* @memberof rules
* @type {string}
* @default 'error'
* @see [default-case]{@link https://eslint.org/docs/rules/default-case-last}
*
* @example
* // Bad...
* switch( foo ) {
* default:
*     break;
* case 1:
*     break;
* }
*
* @example
* // Good...
* switch( foo ) {
* case 1:
*     break;
* default:
*     break;
* }
*/
rules[ 'default-case-last' ] = 'error';

/**
* Always require default parameters to be last.
*
* @name default-param-last
* @memberof rules
* @type {string}
* @default 'error'
* @see [default-param-last]{@link https://eslint.org/docs/rules/default-param-last}
*
* @example
* // Bad...
* function foo( a = 1, b ) {
*     // No-op...
* }
*
* @example
* // Good...
* function foo( b, a = 1 ) {
*     // No-op...
* }
*/
rules[ 'default-param-last' ] = 'error';

/**
* Require that a dot be on the same line as a property.
*
* @name dot-location
* @memberof rules
* @type {Array}
* @default [ 'error', 'property' ]
* @see [dot-location]{@link https://eslint.org/docs/rules/dot-location}
*
* @example
* // Bad...
* var obj = {
*     'beep': 'boop'
* };
* var p = obj.
*     beep;
*
* @example
* // Good...
* var obj = {
*     'beep': 'boop'
* };
* var p = obj
*     .beep;
*
* @example
* // Better...
* var obj = {
*     'beep': 'boop'
* };
* var p = obj.beep;
*/
rules[ 'dot-location' ] = [ 'error', 'property' ];

/**
* Do not enforce using dot notation over square-bracket notation.
*
* @name dot-notation
* @memberof rules
* @type {string}
* @default 'off'
* @see [dot-notation]{@link https://eslint.org/docs/rules/dot-notation}
*/
rules[ 'dot-notation' ] = 'off'; // TODO: revisit?

/**
* Always require `===` over `==`.
*
* @name eqeqeq
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [eqeqeq]{@link https://eslint.org/docs/rules/eqeqeq}
*
* @example
* // Bad...
* var bool = ( x == 3.14 );
*
* @example
* // Good...
* var bool = ( x === 3.14 );
*/
rules[ 'eqeqeq' ] = [ 'error', 'always' ];

/**
* A `for-in` loop should always filter results using an `if` statement.
*
* @name guard-for-in
* @memberof rules
* @type {string}
* @default 'error'
* @see [guard-for-in]{@link https://eslint.org/docs/rules/guard-for-in}
*
* @example
* // Bad...
* for ( key in obj ) {
*     // Do something...
* }
*
* @example
* // Good...
* var hasOwn = require( '@stdlib/assert/has-own-property' );
*
* for ( key in obj ) {
*     if ( hasOwn( obj, key ) ) {
*         // Do something...
*     }
* }
*/
rules[ 'guard-for-in' ] = 'error';

/**
* Never allow more than one class per file.
*
* @name max-classes-per-file
* @memberof rules
* @type {Array}
* @default [ 'error', 1 ]
* @see [max-classes-per-file]{@link https://eslint.org/docs/rules/max-classes-per-file}
*/
rules[ 'max-classes-per-file' ] = [ 'error', 1 ];

/**
* Never allow `alert`, `confirm`, or `prompt`.
*
* @name no-alert
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-alert]{@link https://eslint.org/docs/rules/no-alert}
*
* @example
* // Bad...
* alert( 'beep' );
*/
rules[ 'no-alert' ] = 'error';

/**
* Never allow `arguments.caller` or `arguments.callee` to be used, as they are deprecated.
*
* @name no-caller
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-caller]{@link https://eslint.org/docs/rules/no-caller}
*
* @example
* // Bad...
* function foo() {
*     var callee = arguments.callee;
* }
*/
rules[ 'no-caller' ] = 'error';

/**
* Do not allow lexical declarations in case/default clauses.
*
* @name no-case-declarations
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-case-declarations]{@link https://eslint.org/docs/rules/no-case-declarations}
*/
rules[ 'no-case-declarations' ] = 'error';

/**
* Always require regex literals to escape division operators.
*
* @name no-div-regex
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-div-regex]{@link https://eslint.org/docs/rules/no-div-regex}
*
* @example
* // Bad...
* var re = /=foo/;
*
* @example
* // Good...
* var re = /\=foo/;
*/
rules[ 'no-div-regex' ] = 'error';

/**
* Prevent unnecessary `else` blocks when an `if` contains a `return` statement.
*
* @name no-else-return
* @memberof rules
* @type {Array}
* @see [no-else-return]{@link https://eslint.org/docs/rules/no-else-return}
*
* @example
* // Bad...
* function foo( x, y ) {
*     if ( x === y ) {
*         return x;
*     } else {
*         return y;
*     }
* }
*
* @example
* // Good...
* function foo( x, y ) {
*     if ( x === y ) {
*         return x;
*     }
*     return y;
* }
*/
rules[ 'no-else-return' ] = [ 'error', {
	'allowElseIf': false
}];

/**
* Never allow an empty function.
*
* @name no-empty-function
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty-function]{@link https://eslint.org/docs/rules/no-empty-function}
*
* @example
* // Bad...
* function noop(){}
*
* @example
* // Good...
* function noop() {
*     // Do nothing...
* }
*/
rules[ 'no-empty-function' ] = 'error';

/**
* Never allow an empty destructuring patterns.
*
* @name no-empty-pattern
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty-pattern]{@link https://eslint.org/docs/rules/no-empty-pattern}
*
* @example
* // Bad...
* var {} = foo();
*
* @example
* // Good...
* var { a = {} } = foo();
*/
rules[ 'no-empty-pattern' ] = 'error';

/**
* Never allow `null` comparisons.
*
* @name no-eq-null
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-eq-null]{@link https://eslint.org/docs/rules/no-eq-null}
*
* @example
* // Bad...
* if ( x == null ) {
*     // Do something...
* }
*
* @example
* // Good...
* if ( x === false ) {
*     // Do something...
* }
*/
rules[ 'no-eq-null' ] = 'error';

/**
* Never allow the use of `eval`.
*
* @name no-eval
* @memberof rules
* @type {Array}
* @default 'error'
* @see [no-eval]{@link https://eslint.org/docs/rules/no-eval}
*
* @example
* // Bad...
* var x = eval( '5' );
*
* @example
* // Good...
* var x = parseInt( '5', 10 );
*/
rules[ 'no-eval' ] = 'error';

/**
* Never allow extending native prototypes.
*
* @name no-extend-native
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extend-native]{@link https://eslint.org/docs/rules/no-extend-native}
*
* @example
* // Bad...
* Object.prototype.beep = 'boop';
*/
rules[ 'no-extend-native' ] = 'error';

/**
* Prevent function binding when a function does not use `this`.
*
* @name no-extra-bind
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extra-bind]{@link https://eslint.org/docs/rules/no-extra-bind}
*
* @example
* // Bad...
* function foo() {
*     bar();
* }
* var x = foo.bind( bar );
*
* @example
* // Okay...
* function foo() {
*     this.beep();
* }
* var x = foo.bind( bar );
*/
rules[ 'no-extra-bind' ] = 'error';

/**
* Do not allow unnecessary labels.
*
* @name no-extra-label
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extra-label]{@link https://eslint.org/docs/rules/no-extra-label}
*
* @example
* // Bad...
* A: while ( true ) {
*     // Do something...
* }
*/
rules[ 'no-extra-label' ] = 'error';

/**
* Prevent unintentional fall throughs in `switch` statements.
*
* @name no-fallthrough
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-fallthrough]{@link https://eslint.org/docs/rules/no-fallthrough}
*
* @example
* // Bad...
* switch ( x ) {
* case 1:
*     foo();
* case 2:
*     bar();
*     break;
* default:
*     break;
* }
*
* @example
* // Good...
* switch ( x ) {
* case 1:
*     foo();
*     break;
* case 2:
*     bar();
*     break;
* default:
*     break;
* }
*
* @example
* // Okay...
* switch ( x ) {
* case 1:
* case 2:
*     bar();
*     break;
* default:
*     break;
* }
*/
rules[ 'no-fallthrough' ] = 'error';

/**
* Prevent floating decimals; e.g., `2.`.
*
* @name no-floating-decimal
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-floating-decimal]{@link https://eslint.org/docs/rules/no-floating-decimal}
*
* @example
* // Bad...
* var x = 2.;
*
* @example
* // Good...
* var x = 2.0;
*/
rules[ 'no-floating-decimal' ] = 'error';

/**
* Do not allow assignment to native objects or read-only global variables.
*
* @name no-global-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-global-assign]{@link https://eslint.org/docs/rules/no-global-assign}
*
* @example
* // Bad...
* Object = null;
*/
rules[ 'no-global-assign' ] = 'error';

/**
* Allow implicit type coercion.
*
* @name no-implicit-coercion
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-implicit-coercion]{@link https://eslint.org/docs/rules/no-implicit-coercion}
*
* @example
* // Okay...
* var str = '5';
* var num = +str;
*/
rules[ 'no-implicit-coercion' ] = 'off';

/**
* Turn off checking for implicit globals in browser scripts, as code is primarily comprised of modules which have their own scope.
*
* @name no-implicit-globals
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-implicit-globals]{@link https://eslint.org/docs/rules/no-implicit-globals}
*
* @example
* // Okay...
* window.foo = 'bar';
*/
rules[ 'no-implicit-globals' ] = 'off';

/**
* Never allow implied use of `eval` with `setTimeout`, `setInterval`, and `execScript`.
*
* @name no-implied-eval
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-implied-eval]{@link https://eslint.org/docs/rules/no-implied-eval}
*
* @example
* // Bad...
* setTimeout( 'console.log("beep!");', 10 );
*/
rules[ 'no-implied-eval' ] = 'error';

/**
* Never allow the use of `this` outside of classes.

* @name no-invalid-this
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-invalid-this]{@link https://eslint.org/docs/rules/no-invalid-this}
*
* @example
* // Bad...
* this.beep = 'boop';
*
* @example
* // Good...
* function Beep() {
*     this.boop = 'boop';
*     return this;
* }
*/
rules[ 'no-invalid-this' ] = 'error';

/**
* Never allow the use of the deprecated `__iterator__` property.
*
* @name no-iterator
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-iterator]{@link https://eslint.org/docs/rules/no-iterator}
*/
rules[ 'no-iterator' ] = 'error';

/**
* Never allow the use of `labels`.
*
* @name no-labels
* @memberof rules
* @type {Array}
* @see [no-labels]{@link https://eslint.org/docs/rules/no-labels}
*
* @example
* // Bad...
* label: while( true ) {
*     // Do something...
* }
*
* @example
* // Good...
* while( true ) {
*     // Do something...
* }
*/
rules[ 'no-labels' ] = [ 'error', {
	'allowLoop': false,
	'allowSwitch': false
}];

/**
* Never allow standalone code blocks delimited by curly braces.
*
* @name no-lone-blocks
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-line-blocks]{@link https://eslint.org/docs/rules/no-lone-blocks}
*
* @example
* // Bad...
* {
*     function foo() {
*         // Do something...
*     }
* }
*
* @example
* // Good...
* function foo() {
*     // Do something...
* }
*/
rules[ 'no-lone-blocks' ] = 'error';

/**
* Never allow functions to be created within a loop.
*
* @name no-loop-func
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-loop-func]{@link https://eslint.org/docs/rules/no-loop-func}
*
* @example
* // Bad...
* var foo;
* var i;
*
* foo = new Array( 10 );
* for ( i = 0; i < foo.length; i++ ) {
*     foo[ i ] = function bar() {
*         return i;
*     };
* }
*
* @example
* // Good...
* var foo;
* var i;
*
* function bar( i ) {
*     return function bar() {
*         return i;
*     };
* }
*
* foo = new Array( 10 );
* for ( i = 0; i < foo.length; i++ ) {
*     foo[ i ] = bar( i );
* }
*/
rules[ 'no-loop-func' ] = 'error';

/**
* Warn when magic numbers are used. NOTE: turned off due to overly aggressive consideration of "magic" numbers.
*
* @name no-magic-numbers
* @memberof rules
* @type {Array}
* @see [no-magic-numbers]{@link https://eslint.org/docs/rules/no-magic-numbers}
*/
rules[ 'no-magic-numbers' ] = [ 'off', {
	'ignoreArrayIndexes': true,
	'enforceConst': false,
	'detectObjects': false
}];

/**
* Never allow multiple whitespace characters in expressions.
*
* @name no-multi-spaces
* @memberof rules
* @type {Array}
* @default [ 'error', { 'ignoreEOLComments': true } ]
* @see [no-multi-spaces]{@link https://eslint.org/docs/rules/no-multi-spaces}
*
* @example
* // Bad...
* var bool = ( x  === true );
*
* @example
* // Good...
* var bool = ( x === true );
*/
rules[ 'no-multi-spaces' ] = [ 'error', {
	'ignoreEOLComments': true
}];

/**
* Never allow using a `\` character to create multi-line strings.
*
* @name no-multi-str
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-multi-str]{@link https://eslint.org/docs/rules/no-multi-str}
*
* @example
* // Bad...
* var str = 'Hello \
*            world!';
*
* @example;
* // Good...
* var str = 'Hello\nworld!';
*/
rules[ 'no-multi-str' ] = 'error';

/**
* Never allow use the `new` operator without assignment.
*
* @name no-new
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new]{@link https://eslint.org/docs/rules/no-new}
*
* @example
* // Bad...
* new Foo();
*
* @example
* // Good...
* var f = new Foo();
*/
rules[ 'no-new' ] = 'error';

/**
* Never allow using the `Function` constructor to create functions.
*
* @name no-new-func
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-func]{@link https://eslint.org/docs/rules/no-new-func}
*
* @example
* // Bad (most of the time)...
* var foo = new Function( 'x', 'return x;' );
*
* @example
* // Good...
* function foo( x ) {
*     return x;
* }
*/
rules[ 'no-new-func' ] = 'error';

/**
* Never allow using `String`, `Number`, and `Boolean` in place of primitives.
*
* @name no-new-wrappers
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-wrappers]{@link https://eslint.org/docs/rules/no-new-wrappers}
*
* @example
* // Bad...
* var bool = new Boolean( true );
*
* @example
* // Good...
* var bool = true;
*/
rules[ 'no-new-wrappers' ] = 'error';

/**
* Never allow octal literals that begin with a leading zero; e.g., 071 (=> 57).
*
* @name no-octal
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-octal]{@link https://eslint.org/docs/rules/no-octal}
*
* @example
* // Bad...
* var num = 071;
*
* @example
* // Good...
* var num = '071';
*/
rules[ 'no-octal' ] = 'error';

/**
* Never allow octal escape sequences, which are deprecated.
*
* @name no-octal-escape
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-octal-escape]{@link https://eslint.org/docs/rules/no-octal-escape}
*
* @example
* // Bad...
* var foo = 'Copyright \251';
*
* @example
* // Good...
* var foo = 'Copyright \u00A9';
*/
rules[ 'no-octal-escape' ] = 'error';

/**
* Allow parameter reassignment (although bugs can arise when doing so).
*
* @name no-param-reassign
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-param-reassign]{@link https://eslint.org/docs/rules/no-param-reassign}
*
* @example
* // Okay...
* function foo( x ) {
*     y = x;
*     return y;
* }
*/
rules[ 'no-param-reassign' ] = 'off';

/**
* Never allow using deprecated `__proto__` property.
*
* @name no-proto
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-proto]{@link https://eslint.org/docs/rules/no-proto}
*
* @example
* // Bad...
* var proto = {}.__proto__;
*
* @example
* // Good...
* var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
*
* var proto = getPrototypeOf( {} );
*/
rules[ 'no-proto' ] = 'error';

/**
* Never allow a variable to be declared multiple times within the same scope or for built-in globals to be redeclared. NOTE: turned off due to custom stdlib/no-redeclare rule which permits overriding of certain globals.
*
* @name no-redeclare
* @memberof rules
* @type {Array}
* @default 'off'
* @see [no-redeclare]{@link https://eslint.org/docs/rules/no-redeclare}
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
rules[ 'no-redeclare' ] = 'off';

/**
* Do not restrict any object properties.
*
* @name no-restricted-properties
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-restricted-properties]{@link https://eslint.org/docs/rules/no-restricted-properties}
*/
rules[ 'no-restricted-properties' ] = 'off';

/**
* Never allow assignment in `return` statements.
*
* @name no-return-assign
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [no-return-assign]{@link https://eslint.org/docs/rules/no-return-assign}
*
* @example
* // Bad...
* function foo( x ) {
*     var bar;
*     return bar = x + 2;
* }
*
* @example
* // Good...
* function foo( x ) {
*     return x + 2;
* }
*/
rules[ 'no-return-assign' ] = [ 'error', 'always' ];

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

/**
* Never allow `return await`.
*
* @name no-return-await
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-return-await]{@link https://eslint.org/docs/rules/no-return-await}
*
* @example
* // Bad...
* async function foo() {
*     return await bar();
* }
*/
rules[ 'no-return-await' ] = 'error';

/* eslint-enable stdlib/jsdoc-doctest-marker stdlib/jsdoc-doctest-quote-props */

/**
* Never allow using `javascript:` in urls.
*
* @name no-script-url
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-script-url]{@link https://eslint.org/docs/rules/no-script-url}
*
* @example
* // Bad...
* location.href = 'javascript:void(0)';
*/
rules[ 'no-script-url' ] = 'error';

/**
* Never allow self-assignments, including properties.
*
* @name no-self-assign
* @memberof rules
* @type {Array}
* @default [ 'error', {'props':true} ]
* @see [no-self-assign]{@link https://eslint.org/docs/rules/no-self-assign}
*
* @example
* // Bad...
* foo = foo;
*
* @example
* // Bad...
* obj = { 'a': 'b' };
* obj.a = obj.a;
*/
rules[ 'no-self-assign' ] = [ 'error', {
	'props': true
}];

/**
* Allow self-comparison (`NaN` check).
*
* @name no-self-compare
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-self-compare]{@link https://eslint.org/docs/rules/no-self-compare}
*
* @example
* // Okay...
* if ( x !== x ) {
*     // Handle NaN...
* }
*/
rules[ 'no-self-compare' ] = 'off';

/**
* Never allow using a comma operator to separate multiple expressions where only a single expression is expected.
*
* @name no-sequences
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-sequences]{@link https://eslint.org/docs/rules/no-sequences}
*
* @example
* // Bad...
* var x = (3,5); // x = 5
*
* @example
* // Good...
* var x = 5;
*/
rules[ 'no-sequences' ] = 'error';

/**
* Require only `Error` objects to be thrown.
*
* @name no-throw-literal
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-throw-literal]{@link https://eslint.org/docs/rules/no-throw-literal}
*
* @example
* // Bad...
* throw 'beep';
*
* @example
* // Good...
* throw new Error( 'beep' );
*/
rules[ 'no-throw-literal' ] = 'error';

/**
* Allow unmodified loop conditions.
*
* @name no-unmodified-loop-condition
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-unmodified-loop-condition]{@link https://eslint.org/docs/rules/no-unmodified-loop-condition}
*/
rules[ 'no-unmodified-loop-condition' ] = 'off';

/**
* Never allow unused expressions.
*
* @name no-unused-expressions
* @memberof rules
* @type {Array}
* @see [no-unused-expressions]{@link https://eslint.org/docs/rules/no-unused-expressions}
*
* @example
* // Bad...
* n + 1;
*/
rules[ 'no-unused-expressions' ] = [ 'error', {
	'allowShortCircuit': false,
	'allowTernary': false
}];

/**
* Never allow unused labels.
*
* @name no-unused-labels
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unused-labels]{@link https://eslint.org/docs/rules/no-unused-labels}
*
* @example
* // Bad...
* function foo() {
*     var x = 0;
*     A: while( true ) {
*         if ( x === 10 ) {
*             return;
*         }
*         x += 1;
*     }
* }
*/
rules[ 'no-unused-labels' ] = 'error';

/**
* Ensure there are no regular expression backreferences that always successfully match zero-length and cannot match anything else.
*
* @name no-useless-backreference
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-backreference]{@link https://eslint.org/docs/rules/no-useless-backreference}
*
* @example
* // Bad...
* var RE = /\1(a)/; // forward reference to (a);
*
* @example
* // Good...
* var RE = /(a)\1/; // reference to (a)
*/
rules[ 'no-useless-backreference' ] = 'error';

/**
* Never allow using `call` or `apply` when a normal function invocation will suffice.
*
* @name no-useless-call
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-call]{@link https://eslint.org/docs/rules/no-useless-call}
*
* @example
* // Bad...
* var x = foo.call( null, 1, 2 );
*
* @example
* // Good...
* var x = foo( 1, 2 );
*/
rules[ 'no-useless-call' ] = 'error';

/**
* Never allow unnecessary catch clauses.
*
* @name no-useless-catch
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-catch]{@link https://eslint.org/docs/rules/no-useless-catch}
*
* @example
* // Bad...
* try {
*     throw new Error( 'beep' );
* } catch ( err ) {
*     // Catch is unnecessary if we are just rethrowing...
*     throw err;
* }
*
* @example
* // Good...
* try {
*     throw new Error( 'beep' );
* } catch ( err ) {
*     if ( err instanceof TypeError) {
*         throw err;
*     }
* }
*/
rules[ 'no-useless-catch' ] = 'error';

/**
* Never allow concatenation of two string literals which can be combined as a single literal.
*
* @name no-useless-concat
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-concat]{@link https://eslint.org/docs/rules/no-useless-concat}
*
* @example
* // Bad...
* var c = 'a' + 'b';
*
* @example
* // Good...
* var c = 'ab';
*/
rules[ 'no-useless-concat' ] = 'error';

/**
* Prohibit unnecessary escaping.
*
* @name no-useless-escape
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-escape]{@link https://eslint.org/docs/rules/no-useless-escape}
*
* @example
* // Bad...
* var str = 'He\l\lo';
*
* @example
* // Good...
* var str = 'Hello';
*/
rules[ 'no-useless-escape' ] = 'error';

/**
* Never allow redundant/unnecessary `return` statements.
*
* @name no-useless-return
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-return]{@link https://eslint.org/docs/rules/no-useless-return}
*
* @example
* // Bad...
* function foo( x ) {
*     if ( x === x ) {
*         return x;
*     }
*     return;
* }
*
*@ example
* // Good...
* function foo( x ) {
*     if ( x === x ) {
*         return x;
*     }
* }
*/
rules[ 'no-useless-return' ] = 'error';

/**
* Allow using the `void` operator. Useful in pre-ES5 environments where `undefined` is mutable.
*
* @name no-void
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-void]{@link https://eslint.org/docs/rules/no-void}
*
* @example
* // Okay...
* if ( x === void 0 ) { // Check if `undefined`...
*     x = 'beep';
* }
*/
rules[ 'no-void' ] = 'off';

/**
* Warn when source contains warning comments.
*
* @name no-warning-comments
* @memberof rules
* @type {Array}
* @see [no-warning-comments]{@link https://eslint.org/docs/rules/no-warning-comments}
*/
rules[ 'no-warning-comments' ] = [ 'warn', {
	'terms': [
		'todo',
		'warning',
		'fixme',
		'hack',
		'optimize',
		'xxx'
	],
	'location': 'start'
}];

/**
* Never allow using the `with` statement.
*
* @name no-with
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-with]{@link https://eslint.org/docs/rules/no-with}
*/
rules[ 'no-with' ] = 'error';

/**
* Do not require the use of ES2018 named capture groups.
*
* @name prefer-named-capture-group
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-named-capture-group]{@link https://eslint.org/docs/rules/prefer-named-capture-group}
*/
rules[ 'prefer-named-capture-group' ] = 'off';

/**
* Always require that promises are rejected with `Error` objects.
*
* @name prefer-promise-reject-errors
* @memberof rules
* @type {Array}
* @see [prefer-promise-reject-errors]{@link https://eslint.org/docs/rules/prefer-promise-reject-errors}
*/
rules[ 'prefer-promise-reject-errors' ] = [ 'error', {
	'allowEmptyReject': false
}];

/**
* Always require regular expression literals when not dynamically generating a regular expression.
*
* @name prefer-regex-literals
* @memberof rules
* @type {string}
* @default 'error'
* @see [prefer-regex-literals]{@link https://eslint.org/docs/rules/prefer-regex-literals}
*
* @example
* // Bad...
* var re = new RegExp( 'foo' );
*
* @example
* // Good...
* var re = /foo/;
*/
rules[ 'prefer-regex-literals' ] = 'error';

/**
* Always require a `radix` parameter to `parseInt()`.
*
* @name radix
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [radix]{@link https://eslint.org/docs/rules/radix}
*
* @example
* // Bad...
* var x = parseInt( '8' );
*
* @example
* // Good...
* var x = parseInt( '8', 10 );
*/
rules[ 'radix' ] = [ 'error', 'always' ];

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

/**
* Always require `async` functions to have an `await` expression.
*
* @name require-await
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-await]{@link https://eslint.org/docs/rules/require-await}
*
* @example
* // Bad...
* async function foo() {
*     bar();
* }
*
* @example
* // Good...
* async function foo() {
*     await bar();
* }
*/
rules[ 'require-await' ] = 'error';

/* eslint-enable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

/**
* Don't require the `u` flag on a regular expression.
*
* ## Notes
*
* -   With the `u` flag set, regular expressions handle UTF-16 surrogate pairs correctly.
*
* @name require-unicode-regexp
* @memberof rules
* @type {string}
* @default 'off'
* @see [require-unicode-regexp]{@link https://eslint.org/docs/rules/require-unicode-regexp}
*
* @example
* // Bad...
* var re = /^[👍]$/;
*
* @example
* // Good...
* var re = /^[👍]$/u;
*/
rules[ 'require-unicode-regexp' ] = 'off';

/**
* Always declare variables at the top of their scope to represent hoisting.
*
* @name vars-on-top
* @memberof rules
* @type {string}
* @default 'error'
* @see [vars-on-top]{@link https://eslint.org/docs/rules/vars-on-top}
*
* @example
* // Bad...
* function foo() {
*     for ( var i = 0; i < 5; i++ ) {
*         // Do something...
*     }
*     var beep = 'boop';
* }
*
* @example
* // Good...
* function foo() {
*     var beep;
*     var i;
*     for ( i = 0; i < 5; i++ ) {
*         // Do something...
*     }
*     beep = 'boop';
* }
*/
rules[ 'vars-on-top' ] = 'error';

/**
* Always require an immediately invoked function expression (IIFE) to be wrapped.
*
* @name wrap-iife
* @memberof rules
* @type {Array}
* @default [ 'error', 'inside' ]
* @see [wrap-iife]{@link https://eslint.org/docs/rules/wrap-iife}
*
* @example
* // Bad...
* var x = function foo(){}();
*
* @example
* // Good...
* var x = (function foo(){})();
*/
rules[ 'wrap-iife' ] = [ 'error', 'inside' ];

/**
* Require that literals come after variables in conditions, except for ranges.
*
* @name yoda
* @memberof rules
* @type {Array}
* @default [ 'error', 'never', {'exceptRange':true} ]
* @see [yoda]{@link https://eslint.org/docs/rules/yoda}
*
* @example
* // Bad...
* if ( 3.14 === x ) {
*     // Do something...
* }
*
* @example
* // Good...
* if ( x === 3.14 ) {
*     // Do something...
* }
*
* @example
* // Okay...
* if ( -3.14 < x && x < 3.14 ) {
*     // Do something...
* }
*/
rules[ 'yoda' ] = [ 'error', 'never', {
	'exceptRange': true
}];


// EXPORTS //

module.exports = rules;
