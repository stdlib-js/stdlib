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
* ESLint rules for ES2015 features.
*
* @namespace
*/
var rules = {};

/**
* Require braces around arrow function body.
*
* @name arrow-body-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [arrow-body-style]{@link https://eslint.org/docs/rules/arrow-body-style}
*
* @example
* // Bad...
* var foo = () => 0;
*
* @example
* // Okay...
* var foo = () => {
*     return 0;
* };
*/
rules[ 'arrow-body-style' ] = [ 'error', 'always' ];

/**
* Require parentheses around array function arguments.
*
* @name arrow-parens
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [arrow-parens]{@link https://eslint.org/docs/rules/arrow-parens}
*
* @example
* // Bad...
* var foo = x => {
*     return x;
* };
*
* @example
* // Good...
* var foo = ( x ) => {
*     return x;
* };
*/
rules[ 'arrow-parens' ] = [ 'error', 'always' ];

/**
* Require a space before and after an arrow function's arrow.
*
* @name arrow-spacing
* @memberof rules
* @type {Array}
* @see [arrow-spacing]{@link https://eslint.org/docs/rules/arrow-spacing}
*
* @example
* // Bad...
* var foo = ( x )=>{
*     return x;
* };
*
* @example
* // Good...
* var foo = ( x ) => {
*     return x;
* };
*/
rules[ 'arrow-spacing' ] = [ 'error', {
	'before': true,
	'after': true
}];

/**
* Require that constructors of derived classes call `super()`.
*
* @name constructor-super
* @memberof rules
* @type {string}
* @default 'error'
* @see [constructor-super]{@link https://eslint.org/docs/rules/constructor-super}
*
* @example
* // Good...
* class Foo {
*     constructor() {}
* }
*
* @example
* // Good...
* class Foo extends Array {
*     constructor() {
*         super();
*     }
* }
*/
rules[ 'constructor-super' ] = 'error';

/**
* Require a space between the `function` keyword and the star.
*
* @name generator-star-spacing
* @memberof rules
* @type {Array}
* @see [generator-star-spacing]{@link https://eslint.org/docs/rules/generator-star-spacing}
*
* @example
* // Bad...
* function * foo() {
*     yield 5;
*     return 5;
* }
*
* @example
* // Bad...
* function *foo() {
*     yield 5;
*     return 5;
* }
*
* @example
* // Good...
* function* foo() {
*     yield 5;
*     return 5;
* }
*/
rules[ 'generator-star-spacing' ] = [ 'error', {
	'before': false,
	'after': true
}];

/**
* Never allow a class declaration to be reassigned.
*
* @name no-class-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-class-assign]{@link https://eslint.org/docs/rules/no-class-assign}
*
* @example
* // Bad...
* class Foo {}
* Foo = 'beep';
*/
rules[ 'no-class-assign' ] = 'error';

/**
* Never allow confusing usage of arrow functions.
*
* @name no-confusing-arrow
* @memberof rules
* @type {Array}
* @see [no-confusing-arrow]{@link https://eslint.org/docs/rules/no-confusing-arrow}
*/
rules[ 'no-confusing-arrow' ] = [ 'error', {
	'allowParens': false
}];

/**
* Never allow a variable declared as a constant be reassigned in a non-ES2015 environment.
*
* @name no-const-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-const-assign]{@link https://eslint.org/docs/rules/no-const-assign}
*
* @example
* // Bad...
* const x = 5;
* x = 6;
*
* @example
* // Good...
* const x = 5;
* const y = 6;
*/
rules[ 'no-const-assign' ] = 'error';

/**
* Never allow duplicate class members.
*
* @name no-dupe-class-members
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duple-class-members]{@link https://eslint.org/docs/rules/no-dupe-class-members}
*
* @example
* // Bad...
* class Foo {
*     bar() {}
*     bar() {}
* }
*/
rules[ 'no-dupe-class-members' ] = 'error';

/**
* Never allow duplicate `import` statements.
*
* @name no-duplicate-imports
* @memberof rules
* @type {Array}
* @see [no-duplicate-imports]{@link https://eslint.org/docs/rules/no-duplicate-imports}
*/
rules[ 'no-duplicate-imports' ] = [ 'error', {
	'includeExports': true
}];

/**
* Never allow the use of the `new` operator with `Symbol`.
*
* @name no-new-symbol
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-symbol]{@link https://eslint.org/docs/rules/no-new-symbol}
*
* @example
* // Bad...
* var s = new Symbol( 'foo' );
*
* @example
* // Good...
* var s = Symbol( 'foo' );
*/
rules[ 'no-new-symbol' ] = 'error';

/**
* Restrict imports.
*
* @name no-restricted-imports
* @memberof rules
* @type {Array}
* @see [no-restricted-imports]{@link https://eslint.org/docs/rules/no-restricted-imports}
*/
rules[ 'no-restricted-imports' ] = [ 'error', {
	'paths': [
		'lodash',
		'underscore',
		'async'
	],
	'patterns': [
		'lodash*',
		'async*'
	]
}];

/**
* Never allow `this` to be used before `super()` is called.
*
* @name no-this-before-super
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-this-before-super]{@link https://eslint.org/docs/rules/no-this-before-super}
*/
rules[ 'no-this-before-super' ] = 'error';

/**
* Never allow unnecessary computed keys.
*
* @name no-useless-computed-key
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-computed-key]{@link https://eslint.org/docs/rules/no-useless-computed-key}
*
* @example
* // Bad...
* var obj = {
*     ['a']: 'b'
* };
*
* @example
* // Good...
* var obj = {
*     'a': 'b'
* };
*/
rules[ 'no-useless-computed-key' ] = 'error';

/**
* Never allow useless class constructors.
*
* @name no-useless-constructor
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-constructor]{@link https://eslint.org/docs/rules/no-useless-constructor}
*
* @example
* // Bad...
* class Foo {
*     constructor() {} // does not do anything
* }
*/
rules[ 'no-useless-constructor' ] = 'error';

/**
* Never allow useless renaming of imports or exports.
*
* @name no-useless-rename
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-rename]{@link https://eslint.org/docs/rules/no-useless-rename}
*/
rules[ 'no-useless-rename' ] = 'error';

/**
* Allow the use of `var`.
*
* @name no-var
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-var]{@link https://eslint.org/docs/rules/no-var}
*
* @example
* // Okay...
* var x = 5;
*/
rules[ 'no-var' ] = 'off';

/**
* Never use object shorthand.
*
* @name object-shortshand
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [object-shorthand]{@link https://eslint.org/docs/rules/object-shorthand}
*
* @example
* // Bad...
* var obj = { x, y, z };
*/
rules[ 'object-shorthand' ] = [ 'error', 'never' ];

/**
* Do not require arrow callbacks.
*
* @name prefer-arrow-callback
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-arrow-callback]{@link https://eslint.org/docs/rules/prefer-arrow-callback}
*/
rules[ 'prefer-arrow-callback' ] = 'off';

/**
* Prefer a `const` declaration if a `let` variable is not modified.
*
* @name prefer-const
* @memberof rules
* @type {Array}
* @see [prefer-const]{@link https://eslint.org/docs/rules/prefer-const}
*/
rules[ 'prefer-const' ] = [ 'warn', {
	'destructuring': 'any',
	'ignoreReadBeforeAssign': false
}];

/**
* Do not prefer destructuring.
*
* @name prefer-destructuring
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-destructuring]{@link https://eslint.org/docs/rules/prefer-destructuring}
*/
rules[ 'prefer-destructuring' ] = 'off';

/**
* Do not prefer numeric literals.
*
* @name prefer-numeric-literals
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-numeric-literals]{@link https://eslint.org/docs/rules/prefer-numeric-literals}
*
* @example
* // Okay...
* var b = parseInt( '111110111', 2 );
*/
rules[ 'prefer-numeric-literals' ] = 'off';

/**
* Do not prefer rest parameters.
*
* @name prefer-rest-params
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-rest-params]{@link https://eslint.org/docs/rules/prefer-rest-params}
*/
rules[ 'prefer-rest-params' ] = 'off';

/**
* Do not prefer the spread operator.
*
* @name prefer-spread
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-spread]{@link https://eslint.org/docs/rules/prefer-spread}
*/
rules[ 'prefer-spread' ] = 'off';

/**
* Do not prefer template literals.
*
* @name prefer-template
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-template]{@link https://eslint.org/docs/rules/prefer-template}
*
* @example
* // Okay...
* var name = 'Beep Boop';
* var str = 'Hello, ' + name + '!';
*/
rules[ 'prefer-template' ] = 'off';

/**
* Require a `yield` keyword in generator functions.
*
* @name require-yield
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-yield]{@link https://eslint.org/docs/rules/require-yield}
*
* @example
* // Bad...
* function* foo() {
*     return 10;
* }
*
* @example
* // Good...
* function* foo() {
*     yield 5;
*     return 10;
* }
*/
rules[ 'require-yield' ] = 'error';

/**
* Never allow spacing between rest and spread operators and their expressions.
*
* @name rest-spread-spacing
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [rest-spread-spacing]{@link https://eslint.org/docs/rules/rest-spread-spacing}
*/
rules[ 'rest-spread-spacing' ] = [ 'error', 'never' ];

/**
* Do not require that imports be sorted.
*
* @name sort-imports
* @memberof rules
* @type {string}
* @default 'off'
* @see [sort-imports]{@link https://eslint.org/docs/rules/sort-imports}
*/
rules[ 'sort-imports' ] = 'off';

/**
* Require Symbol descriptions.
*
* @name symbol-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [symbol-description]{@link https://eslint.org/docs/rules/symbol-description}
*
* @example
* // Bad...
* var s = Symbol();
*
* @example
* // Good...
* var s = Symbol( 'beep boop' );
*/
rules[ 'symbol-description' ] = 'error';

/**
* Never include spacing around template literal embedded expressions.
*
* @name template-curly-spacing
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [template-curly-spacing]{@link https://eslint.org/docs/rules/template-curly-spacing}
*
* @example
* // Bad...
* var s = `beep ${ boop }`;
*
* @example
* // Good...
* var s = `beep ${boop}`;
*/
rules[ 'template-curly-spacing' ] = [ 'error', 'never' ];

/**
* Require a space after, but not before, `yield` and `*`.
*
* @name yield-star-spacing
* @memberof rules
* @type {Array}
* @see [yield-star-spacing]{@link https://eslint.org/docs/rules/yield-star-spacing}
*
* @example
* // Bad...
* function* foo() {
*     yield *bar();
* }
*
* @example
* // Bad...
* function* foo() {
*     yield* bar();
* }
*/
rules[ 'yield-star-spacing' ] = [ 'error', {
	'before': false,
	'after': true
}];


// EXPORTS //

module.exports = rules;
