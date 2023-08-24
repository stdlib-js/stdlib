/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Interface for decorating a provided function.
*/
interface Decorator {
	/**
	* Decorates a provided function such that the function's return value is provided as an argument to another function.
	*
	* ## Notes
	*
	* -   Decorators are intended to be transparent, meaning that, when interfacing with an API, the decorated API should have the same signature (i.e., number of parameters) as the decorated function. Thus, a typical value for `arity` is `fcn.length`. This function does not require equality, however, and the `arity` argument is allowed to diverge from that of the decorated function. Specifying a differing `arity` does **not** affect function evaluation behavior, as the returned function passes all provided arguments to the decorated function.
	* -   The returned decorator supports an `arity` less than or equal to `10` (i.e., the maximum arity of the returned function is `10`). For an arity greater than `10`, the returned function has an arity equal to `0`. While this violates strict notions of a decorator, for all practical purposes, this is unlikely to be an issue, as the vast majority of functions have fewer than `10` parameters and the need for explicitly checking function length is relatively uncommon.
	*
	* @param fcn - function to decorate
	* @param arity - number of parameters
	* @param after - function to invoke with the return value of the decorated function
	* @param thisArg - evaluation context for `after`
	* @throws `arity` must be a nonnegative integer
	* @returns decorator
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function negate( v ) {
	*     return -v;
	* }
	*
	* var f = decorateAfter( abs, 1, negate );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns -5
	*
	* v = f( 5 );
	* // returns -5
	*/
	<T extends Array<any>, U, V>( fcn: ( ...args: T ) => U, arity: number, after: ( v: U ) => V, thisArg?: any ): ( ...args: T ) => V; // tslint-disable-line max-line-length

	/**
	* Decorates a provided function such that the function's return value is provided as an argument to another function.
	*
	* ## Notes
	*
	* -   Decorators are intended to be transparent, meaning that, when interfacing with an API, the decorated API should have the same signature (i.e., number of parameters) as the decorated function. Thus, a typical value for `arity` is `fcn.length`. This function does not require equality, however, and the `arity` argument is allowed to diverge from that of the decorated function. Specifying a differing `arity` does **not** affect function evaluation behavior, as the returned function passes all provided arguments to the decorated function.
	* -   The returned decorator supports an `arity` less than or equal to `10` (i.e., the maximum arity of the returned function is `10`). For an arity greater than `10`, the returned function has an arity equal to `0`. While this violates strict notions of a decorator, for all practical purposes, this is unlikely to be an issue, as the vast majority of functions have fewer than `10` parameters and the need for explicitly checking function length is relatively uncommon.
	*
	* @param fcn - function to decorate
	* @param arity - number of parameters
	* @param after - function to invoke with the return value of the decorated function
	* @param thisArg - evaluation context for `after`
	* @throws `arity` must be a nonnegative integer
	* @returns decorator
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function log( v ) {
	*     console.log( v );
	* }
	*
	* var f = decorateAfter( abs, 1, log );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns 5
	*
	* v = f( 5 );
	* // returns 5
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function counter() {
	*     this.count += 1;
	* }
	*
	* var ctx = {
	*     'count': 0
	* };
	*
	* var f = decorateAfter( abs, 1, counter, ctx );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns 5
	*
	* v = f( 5 );
	* // returns 5
	*
	* var count = ctx.count;
	* // returns 2
	*/
	<T extends Array<any>, U>( fcn: ( ...args: T ) => U, arity: number, after: ( v: U ) => void, thisArg?: any ): ( ...args: T ) => U; // tslint-disable-line max-line-length

	/**
	* Uses code generation to decorate a provided function such that the function's return value is provided as an argument to another function.
	*
	* ## Notes
	*
	* -   Decorators are intended to be transparent, meaning that, when interfacing with an API, the decorated API should have the same signature (i.e., number of parameters) as the decorated function. Thus, a typical value for `arity` is `fcn.length`. This function does not require equality, however, and the `arity` argument is allowed to diverge from that of the decorated function. Specifying a differing `arity` does **not** affect function evaluation behavior, as the returned function passes all provided arguments to the decorated function.
	* -   Code generation may be problematic in browser contexts enforcing a strict content security policy] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.
	* -   For non-native functions, the function supports returning a decorator whose API exactly matches the API of the decorated function, including function length and parameter names.
	* -   For native functions, due to how native functions serialize to strings, the function generates placeholder parameter names, which are unlikely to match the canonical parameter names. Using placeholder parameter names ensures that the length of the decorator (i.e., number of parameters) matches the decorated function and, except in scenarios involving function source code inspection, will not affect runtime behavior.
	*
	* @param fcn - function to decorate
	* @param arity - number of parameters
	* @param after - function to invoke with the return value of the decorated function
	* @param thisArg - evaluation context for `after`
	* @throws `arity` must be a nonnegative integer
	* @returns decorator
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function negate( v ) {
	*     return -v;
	* }
	*
	* var f = decorateAfter.factory( abs, 1, negate );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns -5
	*
	* v = f( 5 );
	* // returns -5
	*/
	factory<T extends Array<any>, U, V>( fcn: ( ...args: T ) => U, arity: number, after: ( v: U ) => V, thisArg?: any ): ( ...args: T ) => V; // tslint-disable-line max-line-length

	/**
	* Uses code generation to decorate a provided function such that the function's return value is provided as an argument to another function.
	*
	* ## Notes
	*
	* -   Decorators are intended to be transparent, meaning that, when interfacing with an API, the decorated API should have the same signature (i.e., number of parameters) as the decorated function. Thus, a typical value for `arity` is `fcn.length`. This function does not require equality, however, and the `arity` argument is allowed to diverge from that of the decorated function. Specifying a differing `arity` does **not** affect function evaluation behavior, as the returned function passes all provided arguments to the decorated function.
	* -   Code generation may be problematic in browser contexts enforcing a strict content security policy] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.
	* -   For non-native functions, the function supports returning a decorator whose API exactly matches the API of the decorated function, including function length and parameter names.
	* -   For native functions, due to how native functions serialize to strings, the function generates placeholder parameter names, which are unlikely to match the canonical parameter names. Using placeholder parameter names ensures that the length of the decorator (i.e., number of parameters) matches the decorated function and, except in scenarios involving function source code inspection, will not affect runtime behavior.
	*
	* @param fcn - function to decorate
	* @param arity - number of parameters
	* @param after - function to invoke with the return value of the decorated function
	* @param thisArg - evaluation context for `after`
	* @throws `arity` must be a nonnegative integer
	* @returns decorator
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function log( v ) {
	*     console.log( v );
	* }
	*
	* var f = decorateAfter.factory( abs, 1, log );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns 5
	*
	* v = f( 5 );
	* // returns 5
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function counter() {
	*     this.count += 1;
	* }
	*
	* var ctx = {
	*     'count': 0
	* };
	*
	* var f = decorateAfter.factory( abs, 1, counter, ctx );
	* // returns <Function>
	*
	* var v = f( -5 );
	* // returns 5
	*
	* v = f( 5 );
	* // returns 5
	*
	* var count = ctx.count;
	* // returns 2
	*/
	factory<T extends Array<any>, U>( fcn: ( ...args: T ) => U, arity: number, after: ( v: U ) => void, thisArg?: any ): ( ...args: T ) => U; // tslint-disable-line max-line-length
}

/**
* Decorates a provided function such that the function's return value is provided as an argument to another function.
*
* @param fcn - function to decorate
* @param arity - number of parameters
* @param after - function to invoke with the return value of the decorated function
* @param thisArg - evaluation context for `after`
* @throws `arity` must be a nonnegative integer
* @returns decorator
*
* @example
* var abs = require( `@stdlib/math/base/special/abs` );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter( abs, 1, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*
* @example
* var abs = require( `@stdlib/math/base/special/abs` );
*
* function negate( v ) {
*     return -v;
* }
*
* var f = decorateAfter.factory( abs, 1, negate );
* // returns <Function>
*
* var v = f( -5 );
* // returns -5
*
* v = f( 5 );
* // returns -5
*/
declare var decorateAfter: Decorator;


// EXPORTS //

export = decorateAfter;
