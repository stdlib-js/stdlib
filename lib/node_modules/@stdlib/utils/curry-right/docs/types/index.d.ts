/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Curry function.
*
* @param v - curried function parameter
* @returns partially applied curry function or curried function result
*/
type Closure = ( v: any ) => any;

/**
* Transforms a function into a sequence of functions each accepting a single argument.
*
* ## Notes
*
* -   Until return value resolution, each invocation returns a new partially applied curry function.
* -   This function applies arguments starting from the right.
*
* @param fcn - function to curry
* @param arity - number of parameters
* @param thisArg - evaluation context
* @throws `arity` must be a positive integer
* @returns curry function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curryRight( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/
declare function curryRight( fcn: Function, arity?: number, thisArg?: any ): Closure; // tslint-disable-line max-line-length

/**
* Transforms a function into a sequence of functions each accepting a single argument.
*
* ## Notes
*
* -   Until return value resolution, each invocation returns a new partially applied curry function.
* -   This function applies arguments starting from the right.
*
* @param fcn - function to curry
* @param thisArg - evaluation context
* @returns curry function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var f = curryRight( add );
*
* var sum = f( 2 )( 3 );
* // returns 5
*/
declare function curryRight( fcn: Function, thisArg?: any ): Closure;


// EXPORTS //

export = curryRight;
