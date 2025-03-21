/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a function that applies arguments to a provided function after transforming arguments according to a callback function.
*
* ## Notes
*
* -   The callback function is provided the following arguments:
*
*     -   **value**: argument value.
*     -   **index**: argument index.
*
* @param fcn - input function
* @param clbk - callback function
* @param thisArg - input function context
* @returns function wrapper
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* function clbk( v ) {
*     return v * 2;
* }
*
* var bar = mapArguments( foo, clbk );
*
* var out = bar( 1, 2, 3 );
* // returns [ 2, 4, 6 ]
*/
declare function mapArguments<
	T extends ( ...args: Array<any> ) => any,
	C extends ( this: ThisParameterType<T>, value: Parameters<T>[number], index: number ) => any
>(
	fcn: T,
	clbk: C
): ( ...args: Parameters<T> ) => ReturnType<T>;

/**
* Returns a function that applies arguments to a provided function after transforming arguments according to a callback function.
*
* ## Notes
*
* -   The callback function is provided the following arguments:
*
*     -   **value**: argument value.
*     -   **index**: argument index.
*
* @param fcn - input function
* @param clbk - callback function
* @param thisArg - input function context
* @returns function wrapper
*
* @example
* function foo( a, b, c ) {
*     return [ a, b, c ];
* }
*
* function clbk( v ) {
*     this.count += 1;
*     return v * 2;
* }
*
* var thisArg = { 'count': 0 };
* var bar = mapArguments( foo, clbk, thisArg );
*
* var out = bar( 1, 2, 3 );
* // returns [ 2, 4, 6 ]
*
* var count = thisArg.count;
* // returns 3
*/
declare function mapArguments<
	T extends ( ...args: Array<any> ) => any,
	C extends ( this: ThisParameterType<T>, value: Parameters<T>[number], index: number ) => any,
	ThisArg
>(
	fcn: T,
	clbk: C,
	thisArg: ThisArg
): ( this: ThisArg, ...args: Parameters<T> ) => ReturnType<T>;


// EXPORTS //

export = mapArguments;
