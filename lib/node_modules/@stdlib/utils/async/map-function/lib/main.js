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

// MODULES //

var factory = require( './factory.js' );


// MAIN //

/**
* Invokes a function `n` times and returns an array of accumulated function return values.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param {Function} fcn - function to invoke
* @param {NonNegativeInteger} n - number of function invocations
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again
* @param {Function} done - callback to invoke upon invoking a function `n` times
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
* @returns {void}
*
* @example
* function fcn( i, next ) {
*     setTimeout( onTimeout, i );
*     function onTimeout() {
*         next( null, i );
*     }
* }
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( JSON.stringify( out ) );
*     // => [ 0, 1, 2, 3, 4 ]
* }
*
* mapFunAsync( fcn, 5, done );
*/
function mapFunAsync( fcn, n, options, done ) {
	if ( arguments.length < 4 ) {
		return factory( fcn )( n, options );
	}
	factory( options, fcn )( n, done );
}


// EXPORTS //

module.exports = mapFunAsync;
