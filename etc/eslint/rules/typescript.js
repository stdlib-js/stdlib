/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable stdlib/jsdoc-doctest-marker, stdlib/jsdoc-doctest-quote-props */

'use strict';

// MODULES //

var merge = require( './../../../lib/node_modules/@stdlib/utils/merge' );
var mapValues = require( './../../../lib/node_modules/@stdlib/utils/map-values' );
var constantFunction = require( './../../../lib/node_modules/@stdlib/utils/constant-function' );
var defaults = require( './../.eslintrc.js' );


// MAIN //

/**
* ESLint rules.
*
* @namespace rules
*/
var rules = merge( {}, mapValues( defaults.rules, constantFunction( 'off' ) ) );

/**
* Requires that function overload signatures be consecutive.
*
* @name adjacent-overload-signatures
* @memberof rules
* @type {string}
* @default 'error'
* @see [adjacent-overload-signatures]{@link https://typescript-eslint.io/rules/adjacent-overload-signatures}
*
* @example
* // Bad...
* interface Foo {
*     foo( s: string ): void;
*     foo( n: number ): void;
*     bar(): void;
*     foo( sn: string | number ): void;
* }
*
* // Good...
* interface Foo {
*     foo( s: string ): void;
*     foo( n: number ): void;
*     foo( sn: string | number ): void;
*     bar(): void;
* }
*/
rules[ '@typescript-eslint/adjacent-overload-signatures' ] = 'error';

/**
* Enforces the use of `Array<type>` for generic array type annotations.
*
* @name array-type
* @memberof rules
* @type {Array}
* @default [ 'error', { 'default': 'generic' } ]
* @see [array-type]{@link https://typescript-eslint.io/rules/array-type}
*
* @example
* // Bad...
* const bad: string[] = [];
*
* // Good...
* const good: Array<string> = [];
*/
rules[ '@typescript-eslint/array-type' ] = [ 'error', {
	'default': 'generic'
}];

/**
* Enforces that `await` is used with a Promise.
*
* @name await-thenable
* @memberof rules
* @type {string}
* @default 'error'
* @see [await-thenable]{@link https://typescript-eslint.io/rules/await-thenable}
*
* @example
* // Bad...
* function test() {
*     await 123;
* }
*
* // Good...
* async function test() {
*     await Promise.resolve();
* }
*/
rules[ '@typescript-eslint/await-thenable' ] = 'error';

/**
* Disables the prohibition against TypeScript `@ts-` comments.
*
* @name ban-ts-comment
* @memberof rules
* @type {string}
* @default 'off'
* @see [ban-ts-comment]{@link https://typescript-eslint.io/rules/ban-ts-comment}
*
* @example
* // Okay...
* // @ts-ignore
* console.log( someVarThatDoesNotExist );
*/
rules[ '@typescript-eslint/ban-ts-comment' ] = 'off';

/**
* Disables the ban on certain TypeScript types like `{}` or `object`.
*
* @name ban-types
* @memberof rules
* @type {string}
* @default 'off'
* @see [ban-types]{@link https://typescript-eslint.io/rules/ban-types}
*
* @example
* // Okay...
* type foo = {};
* type bar = object;
*/
rules[ '@typescript-eslint/ban-types' ] = 'off';

/**
* Enforces the use of consistent type assertions.
*
* @name consistent-type-assertions
* @memberof rules
* @type {string}
* @default 'error'
* @see [consistent-type-assertions]{@link https://typescript-eslint.io/rules/consistent-type-assertions}
*
* @example
* // Bad...
* let x = <number>someValue;
*
* // Good...
* let x = someValue as number;
*/
rules[ '@typescript-eslint/consistent-type-assertions' ] = 'error';

/**
* Enforces consistent usage of type definitions either with `interface` or `type`.
*
* @name consistent-type-definitions
* @memberof rules
* @type {string}
* @default 'error'
* @see [consistent-type-definitions]{@link https://typescript-eslint.io/rules/consistent-type-definitions}
*
* @example
* // Bad...
* type T = {};
*
* // Good...
* interface T {}
*/
rules[ '@typescript-eslint/consistent-type-definitions' ] = 'error';

/**
* Disables the rule that requires dot notation when accessing properties.
*
* @name dot-notation
* @memberof rules
* @type {string}
* @default 'off'
* @see [dot-notation]{@link https://typescript-eslint.io/rules/dot-notation}
*
* @example
* // Okay...
* let x = foo[ 'bar' ];
* let y = foo.bar;
*/
rules[ '@typescript-eslint/dot-notation' ] = 'off';

/**
* Requires that functions have an explicit return type.
*
* @name explicit-function-return-type
* @memberof rules
* @type {string}
* @default 'error'
* @see [explicit-function-return-type]{@link https://typescript-eslint.io/rules/explicit-function-return-type}
*
* @example
* // Bad...
* function test() {
*     return 42;
* }
*
* // Good...
* function test(): number {
*     return 42;
* }
*/
rules[ '@typescript-eslint/explicit-function-return-type' ] = 'error';

/**
* Enforces explicit visibility declarations for class members.
*
* ## Notes
*
* -   The 'no-public' option requires explicit visibility except for public members.
*
* @name explicit-member-accessibility
* @memberof rules
* @type {Array}
* @default [ 'error', { 'accessibility': 'no-public' } ]
* @see [explicit-member-accessibility]{@link https://typescript-eslint.io/rules/explicit-member-accessibility}
*
* @example
* // Bad...
* class MyClass {
*     memberWithoutVisibility = 'no explicit visibility';
* }
*
* // Good...
* class MyClass {
*     private memberWithVisibility = 'has explicit visibility';
* }
*/
rules[ '@typescript-eslint/explicit-member-accessibility' ] = [
	'error',
	{
		'accessibility': 'no-public'
	}
];

/**
* Requires explicit return and argument types on exported functions' and classes' public class methods.
*
* @name explicit-module-boundary-types
* @memberof rules
* @type {string}
* @default 'error'
* @see [explicit-module-boundary-types]{@link https://typescript-eslint.io/rules/explicit-module-boundary-types}
*
* @example
* // Bad...
* export function badFunction( a ) {
*     return a;
* }
*
* // Good...
* export function goodFunction( a: string ): string {
*     return a;
* }
*/
rules[ '@typescript-eslint/explicit-module-boundary-types' ] = 'error';

/**
* Enforces indentation with tabs.
*
* @name indent
* @memberof rules
* @type {Array}
* @default [ 'error', 'tab' ]
* @see [indent]{@link https://typescript-eslint.io/rules/indent}
*
* @example
* // Bad...
* function bad() {
*     return true;
* }
*
* // Good...
* function good() {
*     return true;
* }
*/
rules[ '@typescript-eslint/indent' ] = [ 'error', 'tab' ];

/**
* Enforces a specific member delimiter style in interfaces and type literals.
*
* @name member-delimiter-style
* @memberof rules
* @type {Array}
* @default [ 'error', { 'multiline': { 'delimiter': 'semi', 'requireLast': true }, 'singleline': { 'delimiter': 'semi', 'requireLast': false } } ]
* @see [member-delimiter-style]{@link https://typescript-eslint.io/rules/member-delimiter-style}
*
* @example
* // Bad...
* interface Bad {
*     name: string,
*     age: number
* }
*
* // Good...
* interface Good {
*     name: string;
*     age: number;
* }
*/
rules[ '@typescript-eslint/member-delimiter-style' ] = [
	'error',
	{
		'multiline': {
			'delimiter': 'semi',
			'requireLast': true
		},
		'singleline': {
			'delimiter': 'semi',
			'requireLast': false
		}
	}
];

/**
* Disables TypeScript's no-shadow rule.
*
* @name no-shadow
* @memberof rules
* @type {Array}
* @default [ 'off', { 'hoist': 'all' } ]
* @see [no-shadow]{@link https://typescript-eslint.io/rules/no-shadow}
*
* @example
* // Okay...
* const x = 1;
* function example() {
*     const x = 2;
* }
*/
rules[ '@typescript-eslint/no-shadow' ] = [ 'off', {
	'hoist': 'all'
}];

/**
* Disables the rule against the delete operator with computed key expressions.
*
* @name no-dynamic-delete
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-dynamic-delete]{@link https://typescript-eslint.io/rules/no-dynamic-delete}
*
* @example
* // Okay...
* delete object[ dynamicKey ];
*/
rules[ '@typescript-eslint/no-dynamic-delete' ] = 'off';

/**
* Disallows empty functions. Functions with a comment inside are not considered empty.
*
* @name no-empty-function
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty-function]{@link https://typescript-eslint.io/rules/no-empty-function}
*
* @example
* // Bad...
* function noOp() {}
*
* // Good...
* function noOp() {
*     // intentional no-op
* }
*/
rules[ '@typescript-eslint/no-empty-function' ] = 'error';

/**
* Disallows the declaration of empty interfaces.
*
* @name no-empty-interface
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty-interface]{@link https://typescript-eslint.io/rules/no-empty-interface}
*
* @example
* // Bad...
* interface Empty {}
*
* // Good...
* interface NotEmpty {
*     data: string;
* }
*/
rules[ '@typescript-eslint/no-empty-interface' ] = 'error';

/**
* Warns on usage of the `any` type.
*
* @name no-explicit-any
* @memberof rules
* @type {string}
* @default 'warn'
* @see [no-explicit-any]{@link https://typescript-eslint.io/rules/no-explicit-any}
*
* @example
* // Bad...
* function unsafe( arg: any ): any { return arg; }
*
* // Good...
* function safe( arg: unknown ): unknown { return arg; }
*/
rules[ '@typescript-eslint/no-explicit-any' ] = 'warn';

/**
* Disallows classes that only have static members and don't need to be instantiated.
*
* @name no-extraneous-class
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extraneous-class]{@link https://typescript-eslint.io/rules/no-extraneous-class}
*
* @example
* // Bad...
* class StaticOnly {
*     static doSomething() {}
* }
*
* // Good...
* namespace StaticOnly {
*     export function doSomething() {}
* }
*/
rules[ '@typescript-eslint/no-extraneous-class' ] = 'error';

/**
* Requires Promises to be handled appropriately. Unhandled Promises can cause unexpected behavior.
*
* @name no-floating-promises
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-floating-promises]{@link https://typescript-eslint.io/rules/no-floating-promises}
*
* @example
* // Bad...
* new Promise( resolve => resolve() );
*
* // Good...
* new Promise( resolve => resolve() ).catch( handleError );
*/
rules[ '@typescript-eslint/no-floating-promises' ] = 'error';

/**
* Disallows iterating over an array with a for-in loop. A for-of loop should be used instead.
*
* @name no-for-in-array
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-for-in-array]{@link https://typescript-eslint.io/rules/no-for-in-array}
*
* @example
* // Bad...
* const arr = [ 1, 2, 3 ];
* for ( const i in arr ) {
*     console.log( arr[ i ] );
* }
*
* // Good...
* for ( const i of arr ) {
*     console.log( i );
* }
*/
rules[ '@typescript-eslint/no-for-in-array' ] = 'error';

/**
* Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
*
* @name no-inferrable-types
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-inferrable-types]{@link https://typescript-eslint.io/rules/no-inferrable-types}
*
* @example
* // Bad...
* let x: number = 1;
*
* // Good...
* let x = 1;
*/
rules[ '@typescript-eslint/no-inferrable-types' ] = 'error';

/**
* Disallows the incorrect use of `new` with interfaces or `new` for defining a constructor.
*
* @name no-misused-new
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-misused-new]{@link https://typescript-eslint.io/rules/no-misused-new}
*
* @example
* // Bad...
* interface I {
*     new (): I;
* }
*
* // Good...
* class C implements I {
*     constructor() {}
* }
*/
rules[ '@typescript-eslint/no-misused-new' ] = 'error';

/**
* Disallows the use of custom TypeScript modules and namespaces.
*
* @name no-namespace
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-namespace]{@link https://typescript-eslint.io/rules/no-namespace}
*
* @example
* // Bad...
* module M {
*     export const x = 1;
* }
*
* // Good...
* namespace N {
*     export const x = 1;
* }
*/
rules[ '@typescript-eslint/no-namespace' ] = 'error';

/**
* Disallows non-null assertions using the `!` postfix operator.
*
* @name no-non-null-assertion
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-non-null-assertion]{@link https://typescript-eslint.io/rules/no-non-null-assertion}
*
* @example
* // Bad...
* const x: number | null = null;
* const y: number = x!;
*
* // Good...
* if ( x !== null ) {
*     const y: number = x;
* }
*/
rules[ '@typescript-eslint/no-non-null-assertion' ] = 'error';

/**
* Disables the rule against using `require` statements instead of import declarations.
*
* @name no-require-imports
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-require-imports]{@link https://typescript-eslint.io/rules/no-require-imports}
*
* @example
* // Okay...
* const module = require( 'module' );
*/
rules[ '@typescript-eslint/no-require-imports' ] = 'off';

/**
* Disallows aliases for `this`.
*
* @name no-this-alias
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-this-alias]{@link https://typescript-eslint.io/rules/no-this-alias}
*
* @example
* // Bad...
* const self = this;
* const that = this;
*
* // Good...
* function example() {
*     console.log( this );
* }
*/
rules[ '@typescript-eslint/no-this-alias' ] = 'error';

/**
* Disables the rule against unnecessary boolean literal comparisons.
*
* @name no-unnecessary-boolean-literal-compare
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-unnecessary-boolean-literal-compare]{@link https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare}
*
* @example
* // Okay...
* const x = true;
* if ( x === true ) {
*     // ...
* }
*/
rules[ '@typescript-eslint/no-unnecessary-boolean-literal-compare' ] = 'off';

/**
* Disallows unnecessary qualifiers (like namespaces or enum names) when the referenced item is accessible without them.
*
* @name no-unnecessary-qualifier
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unnecessary-qualifier]{@link https://typescript-eslint.io/rules/no-unnecessary-qualifier}
*
* @example
* // Bad...
* namespace A {
*     export const B = 1;
* }
* const x = A.B;
*
* // Good...
* const B = 1;
* const x = B;
*/
rules[ '@typescript-eslint/no-unnecessary-qualifier' ] = 'error';

/**
* Disallows unnecessary type arguments in generics where the argument is the default.
*
* @name no-unnecessary-type-arguments
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unnecessary-type-arguments]{@link https://typescript-eslint.io/rules/no-unnecessary-type-arguments}
*
* @example
* // Bad...
* function f<T = number>( x: T ) {
*     return x + x
* }
* f<number>();
*
* // Good...
* function f<T>( x: T ) {
*     return x + x
* }
* f( 1 );
* f<string>( 'a' );
*/
rules[ '@typescript-eslint/no-unnecessary-type-arguments' ] = 'error';

/**
* Disallows unnecessary type assertions that do not change the type of an expression.
*
* @name no-unnecessary-type-assertion
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unnecessary-type-assertion]{@link https://typescript-eslint.io/rules/no-unnecessary-type-assertion}
*
* @example
* // Bad...
* const x: number = 10;
* const y = x as number;
*
* // Good...
* const x: number = 10;
* const y = x;
*/
rules[ '@typescript-eslint/no-unnecessary-type-assertion' ] = 'error';

/**
* Disallows unused expressions which have no effect on the state of the program.
*
* @name no-unused-expressions
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unused-expressions]{@link https://typescript-eslint.io/rules/no-unused-expressions}
*
* @example
* // Bad...
* 0;
* if ( false ) {}
*
* // Good...
* (() => {
*     const a = 0;
* })();
*/
rules[ '@typescript-eslint/no-unused-expressions' ] = 'error';

/**
* Disables the rule against unused variables.
*
* @name no-unused-vars
* @memberof rules
* @type {string}
* @default [ 'error', { 'args': 'after-used' } ]
* @see [no-unused-vars]{@link https://typescript-eslint.io/rules/no-unused-vars}
*
* @example
* // Bad...
* function foo( x, y, z ) {
*     return x + y;
* }
*
* // Okay...
* function bar( x, y, z ) {
*     return y + z;
* }
*/
rules[ '@typescript-eslint/no-unused-vars' ] = [ 'error', {
	'args': 'after-used'
}];

/**
* Disallows the use of variables before they are defined.
*
* @name no-use-before-define
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-use-before-define]{@link https://typescript-eslint.io/rules/no-use-before-define}
*
* @example
* // Bad...
* console.log( a );
* let a = 10;
*
* // Good...
* let b = 10;
* console.log( b );
*/
rules[ '@typescript-eslint/no-use-before-define' ] = 'error';

/**
* Disallows the use of `require` statements except in import statements.
*
* @name no-var-requires
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-var-requires]{@link https://typescript-eslint.io/rules/no-var-requires}
*
* @example
* // Bad...
* const moduleA = require( 'moduleA' );
*
* // Good...
* import moduleA from 'moduleA';
*
* import moduleA = require( 'moduleA' );
*/
rules[ '@typescript-eslint/no-var-requires' ] = 'error';

/**
* Disables the preference for `for-of` loops over standard `for` loops with index variables.
*
* @name prefer-for-of
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-for-of]{@link https://typescript-eslint.io/rules/prefer-for-of}
*
* @example
* // Okay...
* for ( let i = 0; i < myArray.length; i++ ) {
*     console.log( myArray[ i ] );
* }
*/
rules[ '@typescript-eslint/prefer-for-of' ] = 'off';

/**
* Prefers function types instead of interfaces with call signatures.
*
* @name prefer-function-type
* @memberof rules
* @type {string}
* @default 'error'
* @see [prefer-function-type]{@link https://typescript-eslint.io/rules/prefer-function-type}
*
* @example
* // Bad...
* interface Callable {
*     (): void;
* }
*
* // Good...
* type Callable = () => void;
*/
rules[ '@typescript-eslint/prefer-function-type' ] = 'error';

/**
* Prefers the use of the `namespace` keyword instead of `module` to declare custom TypeScript modules.
*
* @name prefer-namespace-keyword
* @memberof rules
* @type {string}
* @default 'error'
* @see [prefer-namespace-keyword]{@link https://typescript-eslint.io/rules/prefer-namespace-keyword}
*
* @example
* // Bad...
* module M {
*     export const x = 1;
* }
*
* // Good...
* namespace M {
*     export const x = 1;
* }
*/
rules[ '@typescript-eslint/prefer-namespace-keyword' ] = 'error';

/**
* Disables the rule that private members are marked as `readonly` if they're never modified outside of the constructor.
*
* @name prefer-readonly
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-readonly]{@link https://typescript-eslint.io/rules/prefer-readonly}
*
* @example
* // Okay...
* class MyClass {
*     private name: string;
*     constructor( name: string ) {
*         this.name = name;
*     }
* }
*/
rules[ '@typescript-eslint/prefer-readonly' ] = 'off';

/**
* Disables the rule that functions which return promises must be async.
*
* @name promise-function-async
* @memberof rules
* @type {string}
* @default 'off'
* @see [promise-function-async]{@link https://typescript-eslint.io/rules/promise-function-async}
*
* @example
* // Okay...
* function fetchWithoutAsync() {
*     return fetch( 'url' ).then( response => response.json() );
* }
*/
rules[ '@typescript-eslint/promise-function-async' ] = 'off';

/**
* Enforces the consistent use of single quotes for string literals and allows avoiding escape for quotes.
*
* @name quotes
* @memberof rules
* @type {Array}
* @default [ 'error', 'single', { 'avoidEscape': true } ]
* @see [quotes]{@link https://typescript-eslint.io/rules/quotes}
*
* @example
* // Bad...
* const bad = "bad";
*
* // Good...
* const good = 'good';
* const goodEscape = "good's";
*/
rules[ '@typescript-eslint/quotes' ] = [
	'error',
	'single',
	{
		'avoidEscape': true
	}
];

/**
* Requires that `async` functions have an `await` expression.
*
* @name require-await
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-await]{@link https://typescript-eslint.io/rules/require-await}
*
* @example
* // Bad...
* async function bad() {
*     return 42;
* }
*
* // Good...
* async function good() {
*     return await someAsyncFunction();
* }
*/
rules[ '@typescript-eslint/require-await' ] = 'error';

/**
* When adding two variables, operands must both be of type number or of type string.
*
* @name restrict-plus-operands
* @memberof rules
* @type {string}
* @default 'error'
* @see [restrict-plus-operands]{@link https://typescript-eslint.io/rules/restrict-plus-operands}
*
* @example
* // Bad...
* const bad = 'The total is: ' + 42;
*
* // Good...
* const good = 'The total is: ' + String(42);
*/
rules[ '@typescript-eslint/restrict-plus-operands' ] = 'error';

/**
* Enforces the use of semicolons after statements.
*
* @name semi
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [semi]{@link https://typescript-eslint.io/rules/semi}
*
* @example
* // Bad...
* const bad = 'no semi'
*
* // Good...
* const good = 'semi';
*/
rules[ '@typescript-eslint/semi' ] = [ 'error', 'always' ];

/**
* Disables the rule for strict boolean expressions.
*
* @name strict-boolean-expressions
* @memberof rules
* @type {string}
* @default 'off'
* @see [strict-boolean-expressions]{@link https://typescript-eslint.io/rules/strict-boolean-expressions}
*
* @example
* // Okay...
* if ( someValue ) {}
*/
rules[ '@typescript-eslint/strict-boolean-expressions' ] = 'off';

/**
* Enforces triple slash references (`/// <reference path="" />`) usage.
*
* @name triple-slash-reference
* @memberof rules
* @type {Array}
* @default [ 'error', { 'path': 'always', 'types': 'prefer-import', 'lib': 'always' } ]
* @see [triple-slash-reference]{@link https://typescript-eslint.io/rules/triple-slash-reference}
*
* @example
* // Bad...
* /// <reference lib="libname" />
*
* // Okay...
* /// <reference types="@stdlib/types" />
*/
rules[ '@typescript-eslint/triple-slash-reference' ] = [
	'error',
	{
		'path': 'always',
		'types': 'prefer-import',
		'lib': 'always'
	}
];

/**
* Requires consistent spacing around type annotations.
*
* @name type-annotation-spacing
* @memberof rules
* @type {string}
* @default 'error'
* @see [type-annotation-spacing]{@link https://typescript-eslint.io/rules/type-annotation-spacing}
*
* @example
* // Bad...
* let bad :number;
*
* // Good...
* let good: number;
*/
rules[ '@typescript-eslint/type-annotation-spacing' ] = 'error';

/**
* Requires type annotations to exist.
*
* @name typedef
* @memberof rules
* @type {string}
* @default 'error'
* @see [typedef]{@link https://typescript-eslint.io/rules/typedef}
*
* @example
* // Bad...
* let bad;
*
* // Good...
* let good: number;
*/
rules[ '@typescript-eslint/typedef' ] = 'error';

/**
* Avoids using an unbound method reference outside of a method’s body.
*
* @name unbound-method
* @memberof rules
* @type {string}
* @default 'error'
* @see [unbound-method]{@link https://typescript-eslint.io/rules/unbound-method}
*
* @example
* // Bad...
* const bad = this.handleClick;
*
* // Good...
* const good = this.handleClick.bind( this );
*/
rules[ '@typescript-eslint/unbound-method' ] = 'error';

/**
* Enforces that overloaded members must be consecutive.
*
* @name unified-signatures
* @memberof rules
* @type {string}
* @default 'error'
* @see [unified-signatures]{@link https://typescript-eslint.io/rules/unified-signatures}
*
* @example
* // Bad...
* declare function bad( x: number ): number;
* // Some unrelated overload
* declare function bad( x: string ): string;
* declare function bad( x: number | string ): number | string;
*
* // Good...
* declare function good( x: number ): number;
* declare function good( x: number | string ): number | string;
* declare function good( x: string ): string;
*/
rules[ '@typescript-eslint/unified-signatures' ] = 'error';

/**
* Requires parentheses around arrow function arguments.
*
* @name arrow-parens
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [arrow-parens]{@link https://eslint.org/docs/rules/arrow-parens}
*
* @example
* // Bad...
* const bad = x => x * x;
*
* // Good...
* const good = ( x ) => x * x;
*/
rules[ 'arrow-parens' ] = [ 'error', 'always' ];

/**
* Enforces one true brace style in block statements.
*
* @name brace-style
* @memberof rules
* @type {Array}
* @default [ 'error', '1tbs' ]
* @see [brace-style]{@link https://eslint.org/docs/rules/brace-style}
*
* @example
* // Bad...
* if ( foo )
* {
*     bar();
* }
*
* // Good...
* if ( foo ) {
*     bar();
* }
*/
rules[ 'brace-style' ] = [ 'error', '1tbs' ];

/**
* Enforces that class methods utilize `this`.
*
* @name class-methods-use-this
* @memberof rules
* @type {string}
* @default 'error'
* @see [class-methods-use-this]{@link https://eslint.org/docs/rules/class-methods-use-this}
*
* @example
* // Bad...
* class MyClass {
*     method() {
*         console.log('no this');
*     }
* }
*
* // Good...
* class MyClass {
*     method() {
*         console.log(this);
*     }
* }
*/
rules[ 'class-methods-use-this' ] = 'error';

/**
* Disallows trailing commas.
*
* @name comma-dangle
* @memberof rules
* @type {string}
* @default [ 'error', 'never' ]
* @see [comma-dangle]{@link https://eslint.org/docs/rules/comma-dangle}
*
* @example
* // Bad...
* const foo = {
*     bar: 'baz',
*     qux: 'quux',
* };
*
* // Okay...
* const foo = {
*     bar: 'baz',
*     qux: 'quux'
* };
*/
rules[ 'comma-dangle' ] = [ 'error', 'never' ];

/**
* Verifies calls of `super()` in constructors.
*
* @name constructor-super
* @memberof rules
* @type {string}
* @default 'error'
* @see [constructor-super]{@link https://eslint.org/docs/rules/constructor-super}
*
* @example
* // Bad...
* class Bad extends Base {
*     constructor() {
*         console.log('missing super()');
*     }
* }
*
* // Good...
* class Good extends Base {
*     constructor() {
*         super();
*         console.log('has super()');
*     }
* }
*/
rules[ 'constructor-super' ] = 'error';

/**
* Enforces consistent use of curly brace conventions.
*
* @name curly
* @memberof rules
* @type {string}
* @default 'error'
* @see [curly]{@link https://eslint.org/docs/rules/curly}
*
* @example
* // Bad...
* if ( foo ) bar();
*
* // Good...
* if ( foo ) {
*     bar();
* }
*/
rules[ 'curly' ] = 'error';

/**
* Requires a default case in switch statements.
*
* @name default-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [default-case]{@link https://eslint.org/docs/rules/default-case}
*
* @example
* // Bad...
* switch ( foo ) {
*     case 1:
*         doSomething();
* }
*
* // Good...
* switch ( foo ) {
*     case 1:
*         doSomething();
*         break;
*     default:
*         doNothing();
* }
*/
rules[ 'default-case' ] = 'error';

/**
* Disables the rule for dot notation.
*
* @name dot-notation
* @memberof rules
* @type {string}
* @default 'off'
* @see [dot-notation]{@link https://eslint.org/docs/rules/dot-notation}
*
* @example
* // Okay...
* const x = foo[ 'bar' ];
*/
rules[ 'dot-notation' ] = 'off';

/**
* Enforces a newline at the end of files.
*
* @name eol-last
* @memberof rules
* @type {string}
* @default 'error'
* @see [eol-last]{@link https://eslint.org/docs/rules/eol-last}
*
* @example
* // Bad...
* const bad = 'no newline';
* // EOF
*
* // Good...
* const good = 'newline';
*
* // EOF
*/
rules[ 'eol-last' ] = 'error';

/**
* Enforces the use of `===` and `!==` in place of `==` and `!=`.
*
* @name eqeqeq
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [eqeqeq]{@link https://eslint.org/docs/rules/eqeqeq}
*
* @example
* // Bad...
* if ( x == y ) {
*     // ...
* }
*
* // Good...
* if ( x === y ) {
*     // ...
* }
*/
rules[ 'eqeqeq' ] = [ 'error', 'always' ];

/**
* Requires `for-in` loops to be filtered with an `if` statement.
*
* @name guard-for-in
* @memberof rules
* @type {string}
* @default 'error'
* @see [guard-for-in]{@link https://eslint.org/docs/rules/guard-for-in}
*
* @example
* // Bad...
* for ( const key in object ) {
*     doSomething( object[ key ] );
* }
*
* // Good...
* for ( const key in object ) {
*     if ( Object.prototype.hasOwnProperty.call( object, key ) ) {
*         doSomething( object[ key ] );
*     }
* }
*/
rules[ 'guard-for-in' ] = 'error';

/**
* Do not impose draconian name restrictions.
*
* @name id-match
* @memberof rules
* @type {string}
* @default 'off'
* @see [id-match]{@link https://eslint.org/docs/rules/id-match}
*
* @example
* // Good...
* const foo = 'bar';
*/
rules[ 'id-match' ] = 'off';

/**
* Allow default exports in modules.
*
* @name import/no-default-export
* @memberof rules
* @type {string}
* @default 'off'
* @see [import/no-default-export]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md}
*
* @example
* // Okay...
* export default function myFunction() { }
*/
rules[ 'import/no-default-export' ] = 'off';

/**
* Reports use of a deprecated name.
*
* @name import/no-deprecated
* @memberof rules
* @type {string}
* @default 'error'
* @see [import/no-deprecated]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md}
*
* @example
* // Bad...
* import { oldFunction } from 'lib'; // if oldFunction is deprecated
*
* // Good...
* import { newFunction } from 'lib';
*/
rules[ 'import/no-deprecated' ] = 'error';

/**
* Ensures that there are no extraneous dependencies being imported.
*
* @name import/no-extraneous-dependencies
* @memberof rules
* @type {string}
* @default 'error'
* @see [import/no-extraneous-dependencies]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md}
*
* @example
* // Good...
* import fs from 'fs';
*
* // Bad...
* import foo from 'some-extranous-module';
*/
rules[ 'import/no-extraneous-dependencies' ] = 'error';

/**
* Prevents importing the submodules of other modules.
*
* @name import/no-internal-modules
* @memberof rules
* @type {string}
* @default 'error'
* @see [import/no-internal-modules]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md}
*
* @example
* // Bad...
* import something from 'module/some/internal/path';
*/
rules[ 'import/no-internal-modules' ] = 'error';

/**
* Forbids import statements that import nothing.
*
* @name import/no-unassigned-import
* @memberof rules
* @type {string}
* @default 'error'
* @see [import/no-unassigned-import]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md}
*
* @example
* // Bad...
* import 'myModule';
*
* // Good...
* import foo from 'foo';
*/
rules[ 'import/no-unassigned-import' ] = 'error';

/**
* Enforces a specific order for import statements.
*
* @name import/order
* @memberof rules
* @type {Array}
* @see [import/order]{@link https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md}
*
* @example
* // Given the configuration above, the following order is enforced:
* // 1. Built-in modules (node)
* // 2. External modules
* // 3. Internal modules
* // 4. Modules from a parent directory
* // 5. Sibling modules from the same or a sibling's directory
* // 6. Index of the current directory
*
* // Bad...
* import sibling from './sibling';
* import fs from 'fs';
*
* // Good...
* import fs from 'fs';
* import sibling from './sibling';
*/
rules[ 'import/order' ] = [
	'error',
	{
		'alphabetize': {
			'caseInsensitive': false,
			'order': 'ignore'
		},
		'newlines-between': 'ignore',
		'groups': [
			[
				'builtin',
				'external',
				'internal',
				'unknown',
				'object',
				'type'
			],
			'parent',
			[
				'sibling',
				'index'
			]
		],
		'distinctGroup': false,
		'pathGroupsExcludedImportTypes': [],
		'pathGroups': [
			{
				'pattern': './',
				'patternOptions': {
					'nocomment': true,
					'dot': true
				},
				'group': 'sibling',
				'position': 'before'
			},
			{
				'pattern': '.',
				'patternOptions': {
					'nocomment': true,
					'dot': true
				},
				'group': 'sibling',
				'position': 'before'
			},
			{
				'pattern': '..',
				'patternOptions': {
					'nocomment': true,
					'dot': true
				},
				'group': 'parent',
				'position': 'before'
			},
			{
				'pattern': '../',
				'patternOptions': {
					'nocomment': true,
					'dot': true
				},
				'group': 'parent',
				'position': 'before'
			}
		]
	}
];

/**
* Enforces tab indentation.
*
* @name indent
* @memberof rules
* @type {string}
* @default [ 'error', 'tab' ]
* @see [indent]{@link https://eslint.org/docs/rules/indent}
*/
rules[ 'indent' ] = [ 'error', 'tab' ];

/**
* Ensures param names in JSDoc match those in the function declaration.
*
* @name jsdoc/check-param-names
* @memberof rules
* @type {string}
* @default 'error'
* @see [check-param-names]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-param-names.md}
*/
rules[ 'jsdoc/check-param-names' ] = 'error';

/**
* Ensures property names in JSDoc are valid.
*
* @name jsdoc/check-property-names
* @memberof rules
* @type {string}
* @default 'error'
* @see [check-property-names]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-property-names.md}
*/
rules[ 'jsdoc/check-property-names' ] = 'error';

/**
* Checks for invalid JSDoc syntax.
*
* @name jsdoc/check-syntax
* @memberof rules
* @type {string}
* @default 'error'
* @see [check-syntax]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-syntax.md}
*/
rules[ 'jsdoc/check-syntax' ] = 'error';

/**
 * Checks that JSDoc tag names are valid.
 *
 * @name jsdoc/check-tag-names
 * @memberof rules
 * @type {Array}
 * @default 'error'
 * @see [check-tag-names]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-tag-names.md}
 */
rules['jsdoc/check-tag-names'] = 'error';

/**
* Checks for empty JSDoc tags.
*
* @name jsdoc/empty-tags
* @memberof rules
* @type {string}
* @default 'error'
* @see [empty-tags]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/empty-tags.md}
*/
rules[ 'jsdoc/empty-tags' ] = 'error';

/**
* Checks that the @implements tag is used correctly on classes.
*
* @name jsdoc/implements-on-classes
* @memberof rules
* @type {string}
* @default 'error'
* @see [implements-on-classes]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/implements-on-classes.md}
*/
rules[ 'jsdoc/implements-on-classes' ] = 'error';

/**
* Controls how and whether JSDoc blocks can be expressed as single or multiple line blocks.
*
* @name jsdoc/multiline-blocks
* @memberof rules
* @type {string}
* @default 'error'
* @see [multiline-blocks]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/multiline-blocks.md}
*/
rules[ 'jsdoc/multiline-blocks' ] = 'error';

/**
* Prevents blank lines in block descriptions.
*
* @name jsdoc/no-blank-block-descriptions
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-blank-block-descriptions]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/no-blank-block-descriptions.md}
*/
rules[ 'jsdoc/no-blank-block-descriptions' ] = 'error';

/**
* Prevents use of default values in JSDoc tags.
*
* @name jsdoc/no-defaults
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-defaults]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/no-defaults.md}
*/
rules[ 'jsdoc/no-defaults' ] = 'error';

/**
* Prevents use of multiple asterisks at the beginning of lines.
*
* @name jsdoc/no-multi-asterisks
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-multi-asterisks]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/no-multi-asterisks.md}
*/
rules[ 'jsdoc/no-multi-asterisks' ] = 'error';

/**
* Requires that each JSDoc line starts with an asterisk.
*
* @name jsdoc/require-asterisk-prefix
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-asterisk-prefix]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-asterisk-prefix.md}
*/
rules[ 'jsdoc/require-asterisk-prefix' ] = 'error';

/**
* Requires that all functions have a description.
*
* @name jsdoc/require-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-description]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-description.md}
*/
rules[ 'jsdoc/require-description' ] = 'error';

/**
* Requires a hyphen before the @param description.
*
* @name jsdoc/require-hyphen-before-param-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-hyphen-before-param-description]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-hyphen-before-param-description.md}
*/
rules[ 'jsdoc/require-hyphen-before-param-description' ] = 'error';

/**
* Requires that all functions have JSDoc documentation.
*
* @name jsdoc/require-jsdoc
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-jsdoc]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-jsdoc.md}
*/
rules[ 'jsdoc/require-jsdoc' ] = 'error';

/**
* Requires that all function parameters are documented.
*
* @name jsdoc/require-param
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-param]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-param.md}
*/
rules[ 'jsdoc/require-param' ] = 'error';

/**
* Requires that @param tag has description value.
*
* @name jsdoc/require-param-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-param-description]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-param-description.md}
*/
rules[ 'jsdoc/require-param-description' ] = 'error';

/**
* Requires that all @param tags have names.
*
* @name jsdoc/require-param-name
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-param-name]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-param-name.md}
*/
rules[ 'jsdoc/require-param-name' ] = 'error';

/**
* Requires that all function properties are documented.
*
* @name jsdoc/require-property
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-property]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-property.md}
*/
rules[ 'jsdoc/require-property' ] = 'error';

/**
* Requires that @property tag has description value.
*
* @name jsdoc/require-property-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-property-description]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-property-description.md}
*/
rules[ 'jsdoc/require-property-description' ] = 'error';

/**
* Requires that all @property tags have names.
*
* @name jsdoc/require-property-name
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-property-name]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-property-name.md}
*/
rules[ 'jsdoc/require-property-name' ] = 'error';

/**
* Requires that @property tags have type values.
*
* @name jsdoc/require-property-type
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-property-type]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-property-type.md}
*/
rules[ 'jsdoc/require-property-type' ] = 'error';

/**
* Requires returns are documented.
*
* @name jsdoc/require-returns
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-returns]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-returns.md}
*/
rules[ 'jsdoc/require-returns' ] = 'error';

/**
* Requires a return statement in function body if a @returns tag is specified in JSDoc comment.
*
* @name jsdoc/require-returns-check
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-returns-check]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-returns-check.md}
*/
rules[ 'jsdoc/require-returns-check' ] = 'error';

/**
* Requires that @returns tag has description value.
*
* @name jsdoc/require-returns-description
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-returns-description]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-returns-description.md}
*/
rules[ 'jsdoc/require-returns-description' ] = 'error';

/**
* Requires that @throws statements are documented.
*
* @name jsdoc/require-throws
* @memberof rules
* @type {string}
* @default 'error'
* @see [require-throws]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/require-throws.md}
*/
rules[ 'jsdoc/require-throws' ] = 'error';

/**
* Requires that tags are sorted alphabetically.
*
* @name jsdoc/sort-tags
* @memberof rules
* @type {string}
* @default [ 'error', {...} ]
* @see [sort-tags]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/sort-tags.md}
*/
rules[ 'jsdoc/sort-tags' ] = ['error', {
	'linesBetween': 1,
	'tagSequence': [
		{
			'tags': [ 'param', 'throws', 'returns', 'see' ]
		},
		{
			'tags': [ 'examples' ]
		}
	],
	'reportIntraTagGroupSpacing': false
}];

/**
* Disables the JSDoc rule for checking alignment.
*
* @name jsdoc/check-alignment
* @memberof rules
* @type {string}
* @default 'off'
* @see [check-alignment]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-alignment.md}
*/
rules[ 'jsdoc/check-alignment' ] = 'off';

/**
* Disables the JSDoc rule for checking indentation.
*
* @name jsdoc/check-indentation
* @memberof rules
* @type {string}
* @default 'off'
* @see [check-indentation]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/check-indentation.md}
*/
rules[ 'jsdoc/check-indentation' ] = 'off';

/**
* Requires that JSDoc does not include types.
*
* ## Notes
*
* -   We enable this rule as the type information in TypeScript is included in the signatures and does not need to be duplicated in the JSDoc comment.
*
* @name jsdoc/no-types
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-types]{@link https://github.com/gajus/eslint-plugin-jsdoc/tree/main/docs/rules/no-types.md}
*/
rules[ 'jsdoc/no-types' ] = 'error';

/**
* Enforces Unix linebreaks.
*
* @name linebreak-style
* @memberof rules
* @type {Array}
* @default [ 'error', 'unix' ]
* @see [linebreak-style]{@link https://eslint.org/docs/rules/linebreak-style}
*
* @example
* // Bad...
* const bad = 'Bad linebreak\r\n';
*
* // Good...
* const good = 'Good linebreak\n';
*/
rules[ 'linebreak-style' ] = [ 'error', 'unix' ];

/**
* Enforces a maximum number of classes per file.
*
* @name max-classes-per-file
* @memberof rules
* @type {Array}
* @default [ 'error', 1 ]
* @see [max-classes-per-file]{@link https://eslint.org/docs/rules/max-classes-per-file}
*
* @example
* // Bad...
* class Foo {}
* class Bar {}
*
* // Good...
* class Baz {}
*/
rules[ 'max-classes-per-file' ] = [ 'error', 1 ];

/**
* Enforces a maximum line length.
*
* @name max-len
* @memberof rules
* @type {Array}
* @default [ 'error', { 'ignorePattern': '^import |\\/\\/ |\\/?\\* ', 'code': 1000 } ]
* @see [max-len]{@link https://eslint.org/docs/rules/max-len}
*
* @example
* // Good...
* // This line can be very long because it is an import statement that we are choosing to ignore.
* import { aVeryLongImportStatementIsHereAndWeWantToIgnoreItBecauseItMakesSenseToUs } from 'some-external-library';
*/
rules[ 'max-len' ] = [ 'error', {
	'ignorePattern': '^import |\\/\\/ |\\/?\\* ',
	'code': 1000
}];

/**
* Enforces a maximum number of lines per file.
*
* @name max-lines
* @memberof rules
* @type {Array}
* @default [ 'error', 1000 ]
* @see [max-lines]{@link https://eslint.org/docs/rules/max-lines}
*/
rules[ 'max-lines' ] = [ 'error', 1000 ];

/**
* Enforces the use of parentheses when invoking a constructor with no arguments.
*
* @name new-parens
* @memberof rules
* @type {string}
* @default 'error'
* @see [new-parens]{@link https://eslint.org/docs/rules/new-parens}
*
* @example
* // Bad...
* const bad = new Foo;
*
* // Good...
* const good = new Foo();
*/
rules[ 'new-parens' ] = 'error';

/**
* Disables the rule that requires a newline after each call in a method chain.
*
* @name newline-per-chained-call
* @memberof rules
* @type {string}
* @default 'off'
* @see [newline-per-chained-call]{@link https://eslint.org/docs/rules/newline-per-chained-call}
*/
rules[ 'newline-per-chained-call' ] = 'off';

/**
* Disables the rule against bitwise operators.
*
* @name no-bitwise
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-bitwise]{@link https://eslint.org/docs/rules/no-bitwise}
*/
rules[ 'no-bitwise' ] = 'off';

/**
* Disallows the use of `arguments.caller` or `arguments.callee`.
*
* @name no-caller
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-caller]{@link https://eslint.org/docs/rules/no-caller}
*
* @example
* // Bad...
* function bad() {
*     const whoCalled = arguments.callee.caller;
* }
*
* // Good...
* function good() {
*     // Do not use arguments.callee or arguments.caller
* }
*/
rules[ 'no-caller' ] = 'error';

/**
* Disallows assignment operators in conditional expressions.
*
* @name no-cond-assign
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-cond-assign]{@link https://eslint.org/docs/rules/no-cond-assign}
*
* @example
* // Bad...
* if ( x = y ) {
*     // ...
* }
*
* // Good...
* if ( x === y ) {
*     // ...
* }
*/
rules[ 'no-cond-assign' ] = 'error';

/**
* Disallows the use of `console` methods.
*
* @name no-console
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-console]{@link https://eslint.org/docs/rules/no-console}
*
* @example
* // Bad...
* console.log( 'Here be dragons.' );
*/
rules[ 'no-console' ] = 'error';

/**
* Disallows the use of `debugger` statement.
*
* @name no-debugger
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-debugger]{@link https://eslint.org/docs/rules/no-debugger}
*
* @example
* // Bad...
* debugger;
*/
rules[ 'no-debugger' ] = 'error';

/**
* Disallows duplicate case labels in `switch` statements.
*
* @name no-duplicate-case
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-case]{@link https://eslint.org/docs/rules/no-duplicate-case}
*
* @example
* // Bad...
* switch ( a ) {
*     case 1:
*         // ...
*     case 1:
*         // Duplicate case label.
* }
*
* // Good...
* switch (a) {
*     case 1:
*         // ...
*     case 2:
*         // ...
* }
*/
rules[ 'no-duplicate-case' ] = 'error';

/**
* Disallows duplicate imports in a single file.
*
* @name no-duplicate-imports
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-duplicate-imports]{@link https://eslint.org/docs/rules/no-duplicate-imports}
*
* @example
* // Bad...
* import { a } from 'module';
* import { b } from 'module';
*
* // Good...
* import { a, b } from 'module';
*/
rules[ 'no-duplicate-imports' ] = 'error';

/**
* Disallows empty block statements.
*
* @name no-empty
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-empty]{@link https://eslint.org/docs/rules/no-empty}
*
* @example
* // Bad...
* if ( foo ) {
* }
*
* // Good...
* if ( foo ) {
*     // code
* }
*/
rules[ 'no-empty' ] = 'error';

/**
* Disallows the use of `eval()`.
*
* @name no-eval
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-eval]{@link https://eslint.org/docs/rules/no-eval}
*
* @example
* // Bad...
* const obj = eval( '( { "a": 20 } )' );
*
* // Good...
* const obj = ( { 'a': 20 } );
*/
rules[ 'no-eval' ] = 'error';

/**
* Disallows unnecessary function binding.
*
* @name no-extra-bind
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-extra-bind]{@link https://eslint.org/docs/rules/no-extra-bind}
*
* @example
* // Bad...
* const bad = function() {
*     console.log( this.a );
* }.bind({ a: 'bad' });
*
* // Good...
* const good = function() {
*     console.log( this.a );
* };
*/
rules[ 'no-extra-bind' ] = 'error';

/**
* Disallows fallthrough of `case` statements in `switch` statements.
*
* @name no-fallthrough
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-fallthrough]{@link https://eslint.org/docs/rules/no-fallthrough}
*
* @example
* // Bad...
* switch ( foo ) {
*     case 1:
*         doSomething();
*         // no break and fallthrough is intentional here, but it's usually a mistake
*     case 2:
*         doSomethingElse();
* }
*
* // Good...
* switch ( foo ) {
*     case 1:
*         doSomething();
*         break;
*     case 2:
*         doSomethingElse();
* }
*/
rules[ 'no-fallthrough' ] = 'error';

/**
* Disallows `this` keywords outside of classes or class-like objects.
*
* @name no-invalid-this
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-invalid-this]{@link https://eslint.org/docs/rules/no-invalid-this}
*
* @example
* // Bad...
* function bad() {
*     console.log( this );
* }
*
* // Good...
* class Good {
*     good() {
*         console.log( this );
*     }
* }
*/
rules[ 'no-invalid-this' ] = 'error';

/**
* Disallows irregular whitespace outside of strings and comments.
*
* @name no-irregular-whitespace
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-irregular-whitespace]{@link https://eslint.org/docs/rules/no-irregular-whitespace}
*/
rules[ 'no-irregular-whitespace' ] = 'error';

/**
* Disables the rule against magic numbers.
*
* @name no-magic-numbers
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-magic-numbers]{@link https://eslint.org/docs/rules/no-magic-numbers}
*/
rules[ 'no-magic-numbers' ] = 'off';

/* eslint-disable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Disallows multiple empty lines, allowing a maximum of two.
*
* @name no-multiple-empty-lines
* @memberof rules
* @type {Array}
* @default [ 'error', { 'max': 2 } ]
* @see [no-multiple-empty-lines]{@link https://eslint.org/docs/rules/no-multiple-empty-lines}
*
* @example
* // Bad...
*
*
*
* const bad = 'Too many empty lines';
*
* // Good...
*
* const good = 'Just enough empty lines';
*/
rules[ 'no-multiple-empty-lines' ] = [ 'error', {
	'max': 2
}];

/* eslint-enable stdlib/jsdoc-no-multiple-blank-lines */

/**
* Disallows the use of the `Function` constructor to create new functions.
*
* @name no-new-func
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-func]{@link https://eslint.org/docs/rules/no-new-func}
*
* @example
* // Bad...
* const bad = new Function( 'a', 'b', 'return a + b' );
*
* // Good...
* function good( a, b ) {
*     return a + b;
* }
*/
rules[ 'no-new-func' ] = 'error';

/**
* Disallows creating new instances of `String`, `Number`, and `Boolean`.
*
* @name no-new-wrappers
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-new-wrappers]{@link https://eslint.org/docs/rules/no-new-wrappers}
*
* @example
* // Bad...
* const badString = new String( 'bad' );
* const badNumber = new Number( 1 );
* const badBoolean = new Boolean( false );
*
* // Good...
* const goodString = 'good';
* const goodNumber = 1;
* const goodBoolean = false;
*/
rules[ 'no-new-wrappers' ] = 'error';

/**
* Disables the rule against reassigning parameters.
*
* @name no-param-reassign
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-param-reassign]{@link https://eslint.org/docs/rules/no-param-reassign}
*/
rules[ 'no-param-reassign' ] = 'off';

/**
* Disallows the unary operators `++` and `--`, except in `for` loop afterthoughts.
*
* @name no-plusplus
* @memberof rules
* @type {Array}
* @default [ 'error', { 'allowForLoopAfterthoughts': true } ]
* @see [no-plusplus]{@link https://eslint.org/docs/rules/no-plusplus}
*
* @example
* // Bad...
* let bad = 0;
* bad++;
*
* // Good...
* for ( let i = 0; i < 10; i++ ) {
*     // allowed in for loop afterthoughts
* }
*/
rules[ 'no-plusplus' ] = [ 'error', {
	'allowForLoopAfterthoughts': true
}];

/**
* Disable rule disallowing redeclaring variables.
*
* @name no-redeclare
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-redeclare]{@link https://eslint.org/docs/rules/no-redeclare}
*/
rules[ 'no-redeclare' ] = 'off'; // NOTE: disabled due to erroneous lint error when declaring overloaded function definitions

/**
* Disallows importing specific modules.
*
* @name no-restricted-imports
* @memberof rules
* @type {Array}
* @default [ 'error', 'lodash' ]
* @see [no-restricted-imports]{@link https://eslint.org/docs/rules/no-restricted-imports}
*/
rules[ 'no-restricted-imports' ] = [ 'error', 'lodash' ];

/**
* Disallows specified syntax.
*
* @name no-restricted-syntax
* @memberof rules
* @type {Array}
* @default [ 'error', 'ForInStatement' ]
* @see [no-restricted-syntax]{@link https://eslint.org/docs/rules/no-restricted-syntax}
*/
rules[ 'no-restricted-syntax' ] = [ 'error', 'ForInStatement' ];

/**
* Disallows returning values from `await`.
*
* @name no-return-await
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-return-await]{@link https://eslint.org/docs/rules/no-return-await}
*/
rules[ 'no-return-await' ] = 'error';

/**
* Disallows the use of the comma operator.
*
* @name no-sequences
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-sequences]{@link https://eslint.org/docs/rules/no-sequences}
*/
rules[ 'no-sequences' ] = 'error';

/**
* Disables the rule against variable shadowing.
*
* @name no-shadow
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-shadow]{@link https://eslint.org/docs/rules/no-shadow}
*/
rules[ 'no-shadow' ] = 'off';

/**
* Disallows sparse arrays.
*
* @name no-sparse-arrays
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-sparse-arrays]{@link https://eslint.org/docs/rules/no-sparse-arrays}
*/
rules[ 'no-sparse-arrays' ] = 'error';

/**
* Disallows template literal placeholder syntax in regular strings.
*
* @name no-template-curly-in-string
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-template-curly-in-string]{@link https://eslint.org/docs/rules/no-template-curly-in-string}
*/
rules[ 'no-template-curly-in-string' ] = 'error';

/**
* Disallows throwing literals as exceptions.
*
* @name no-throw-literal
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-throw-literal]{@link https://eslint.org/docs/rules/no-throw-literal}
*/
rules[ 'no-throw-literal' ] = 'error';

/**
* Disallows trailing whitespace at the end of lines.
*
* @name no-trailing-spaces
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-trailing-spaces]{@link https://eslint.org/docs/rules/no-trailing-spaces}
*/
rules[ 'no-trailing-spaces' ] = 'error';

/**
* Disallows initializing variables to `undefined`.
*
* @name no-undef-init
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-undef-init]{@link https://eslint.org/docs/rules/no-undef-init}
*/
rules[ 'no-undef-init' ] = 'error';

/**
* Disallows dangling underscores in identifiers.
*
* @name no-underscore-dangle
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-underscore-dangle]{@link https://eslint.org/docs/rules/no-underscore-dangle}
*/
rules[ 'no-underscore-dangle' ] = 'error';

/**
* Disallows control flow statements in `finally` blocks.
*
* @name no-unsafe-finally
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unsafe-finally]{@link https://eslint.org/docs/rules/no-unsafe-finally}
*/
rules[ 'no-unsafe-finally' ] = 'error';

/**
* Disallows unused labels.
*
* @name no-unused-labels
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-unused-labels]{@link https://eslint.org/docs/rules/no-unused-labels}
*/
rules[ 'no-unused-labels' ] = 'error';

/**
* Disallows unnecessary constructors.
*
* @name no-useless-constructor
* @memberof rules
* @type {string}
* @default 'error'
* @see [no-useless-constructor]{@link https://eslint.org/docs/rules/no-useless-constructor}
*/
rules[ 'no-useless-constructor' ] = 'error';

/**
* Disables the rule against usage of the `void` operator.
*
* @name no-void
* @memberof rules
* @type {string}
* @default 'off'
* @see [no-void]{@link https://eslint.org/docs/rules/no-void}
*/
rules[ 'no-void' ] = 'off';

/**
* Enforces the consistent use of object literal shorthand syntax where possible.
*
* @name object-shorthand
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [object-shorthand]{@link https://eslint.org/docs/rules/object-shorthand}
*/
rules[ 'object-shorthand' ] = [ 'error', 'never' ];

/**
* Enforces variables to be declared either separately or in a single declaration.
*
* @name one-var
* @memberof rules
* @type {Array}
* @default [ 'error', 'never' ]
* @see [one-var]{@link https://eslint.org/docs/rules/one-var}
*/
rules[ 'one-var' ] = [ 'error', 'never' ];

/**
* Disables the rule for padding lines between statements.
*
* @name padding-line-between-statements
* @memberof rules
* @type {Array}
* @default [ 'off', { 'blankLine': 'always', 'prev': '*', 'next': 'return' } ]
* @see [padding-line-between-statements]{@link https://eslint.org/docs/rules/padding-line-between-statements}
*/
rules[ 'padding-line-between-statements' ] = [ 'off', {
	'blankLine': 'always',
	'prev': '*',
	'next': 'return'
}];

/**
* Requires the use of `const` for variables that are never reassigned after declared.
*
* @name prefer-const
* @memberof rules
* @type {string}
* @default 'error'
* @see [prefer-const]{@link https://eslint.org/docs/rules/prefer-const}
*/
rules[ 'prefer-const' ] = 'error';

/**
* Disables the preference for using object spread over `Object.assign`.
*
* @name prefer-object-spread
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-object-spread]{@link https://eslint.org/docs/rules/prefer-object-spread}
*/
rules[ 'prefer-object-spread' ] = 'off';

/**
* Disables the preference for template literals over string concatenation.
*
* @name prefer-template
* @memberof rules
* @type {string}
* @default 'off'
* @see [prefer-template]{@link https://eslint.org/docs/rules/prefer-template}
*/
rules[ 'prefer-template' ] = 'off';

/**
* Enforces quote properties in object literals to be always present.
*
* @name quote-props
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [quote-props]{@link https://eslint.org/docs/rules/quote-props}
*/
rules[ 'quote-props' ] = [ 'error', 'always' ];

/**
* Disables the enforcement of the consistent use of either backticks, double, or single quotes.
*
* @name quotes
* @memberof rules
* @type {string}
* @default 'off'
* @see [quotes]{@link https://eslint.org/docs/rules/quotes}
*/
rules[ 'quotes' ] = 'off';

/**
* Enforces passing the radix parameter to the `parseInt()` function.
*
* @name radix
* @memberof rules
* @type {string}
* @default 'error'
* @see [radix]{@link https://eslint.org/docs/rules/radix}
*
* @example
* // Bad...
* const bad = parseInt( '123' );
*
* // Good...
* const good = parseInt( '123', 10 );
*/
rules[ 'radix' ] = 'error';

/**
* Enforces consistent spacing before function parentheses.
*
* @name @typescript-eslint/space-before-function-paren
* @memberof rules
* @type {Array}
* @default [ 'error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' } ]
* @see [space-before-function-paren]{@link https://typescript-eslint.io/rules/space-before-function-paren}
*/
rules[ '@typescript-eslint/space-before-function-paren' ] = [
	'error',
	{
		'anonymous': 'always',
		'named': 'never',
		'asyncArrow': 'always'
	}
];

/**
* Enforces consistent spacing inside parentheses.
*
* @name space-in-parens
* @memberof rules
* @type {Array}
* @default [ 'error', 'always' ]
* @see [space-in-parens]{@link https://eslint.org/docs/rules/space-in-parens}
*/
rules[ 'space-in-parens' ] = [ 'error', 'always' ];

/**
* Enforces consistent spacing after the `//` or `/*` in a comment.
*
* @name spaced-comment
* @memberof rules
* @type {Array}
* @default [ 'error', 'always', { 'markers': [ '/' ] } ]
* @see [spaced-comment]{@link https://eslint.org/docs/rules/spaced-comment}
*/
rules[ 'spaced-comment' ] = [ 'error', 'always', {
	'markers': [ '/' ]
}];

/**
* Enforces the use of `isNaN()` when checking for `NaN`.
*
* @name use-isnan
* @memberof rules
* @type {string}
* @default 'error'
* @see [use-isnan]{@link https://eslint.org/docs/rules/use-isnan}
*
* @example
* // Bad...
* if ( foo === NaN ) {
*     // ...
* }
*
* // Good...
* if ( isNaN( foo ) ) {
*     // ...
* }
*/
rules[ 'use-isnan' ] = 'error';

/**
* Enforces the style of conditions to avoid Yoda conditions.
*
* @name yoda
* @memberof rules
* @type {string}
* @default 'error'
* @see [yoda]{@link https://eslint.org/docs/rules/yoda}
*
* @example
* // Bad...
* if ( 'red' === color ) {
*     // ...
* }
*
* // Good...
* if ( color === 'red' ) {
*     // ...
* }
*/
rules[ 'yoda' ] = 'error';

/**
* Enforces that types indicated in special comments match the types of code values.
*
* @name expect-type
* @memberof rules
* @type {string}
* @default 'error'
* @see [expect-type]{@link https://github.com/JoshuaKGoldberg/eslint-plugin-expect-type/blob/main/docs/rules/expect.md}
*
* @example
* // Bad...
* const str = 'abc'; // $ExpectType number
*
* // Good...
* const val = 9001; // $ExpectType number
*/
rules[ 'expect-type/expect' ] = 'error';


// EXPORTS //

module.exports = rules;
