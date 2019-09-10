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
* Function invoked if initial function throws an error.
*
* @returns return value of `trythen` function
*/
type Nullary = () => any;

/**
* Function invoked if initial function throws an error.
*
* @param err - the error thrown by `x`
* @returns return value of `trythen` function
*/
type Unary = ( err: Error ) => any;

/**
* Function invoked if initial function throws an error.
*
* @param err - the error thrown by `x`
* @returns return value of `trythen` function
*/
type ErrorHandler = Nullary | Unary;


/**
* If a function does not throw, returns the function return value; otherwise, returns the return value of a second function `y`.
*
* ## Notes
*
* -   The function `y` is provided a single argument:
*
*     -   error: the error thrown by `x`
*
* @param x - function to try invoking
* @param y - function to invoke if a function throws
* @returns the return value of either `x` or `y`
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* function x() {
*     if ( randu() < 0.5 ) {
*         throw new Error( 'beep' );
*     }
*     return 1.0;
* }
*
* function y() {
*     return randu();
* }
*
* var z = trythen( x, y );
* // returns <number>
*/
declare function trythen( x: Function, y: ErrorHandler ): any;


// EXPORTS //

export = trythen;
