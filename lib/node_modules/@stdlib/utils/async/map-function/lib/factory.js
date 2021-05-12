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

var isFunction = require( '@stdlib/assert/is-function' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var limit = require( './limit.js' );


// MAIN //

/**
* Returns a function to invoke a function `n` times and return an array of accumulated function return values.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function again
* @param {Function} fcn - function to invoke
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
* @returns {Function} function which invokes a function `n` times and returns an array of accumulated function return values
*
* @example
* function fcn( i, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, i );
*     }
* }
*
* var opts = {
*     'series': true
* };
*
* var mapFunAsync = factory( opts, fcn );
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
* }
*
* mapFunAsync( 10, done );
*/
function factory( options, fcn ) {
	var opts;
	var err;
	var f;

	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		f = fcn;
	} else {
		f = options;
	}
	if ( !isFunction( f ) ) {
		throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+f+'`.' );
	}
	if ( opts.series ) {
		opts.limit = 1;
	} else if ( !opts.limit ) {
		opts.limit = PINF;
	}
	return mapFunAsync;

	/**
	* Invokes a function `n` times and returns an array of accumulated function return values.
	*
	* @private
	* @param {NonNegativeInteger} n - number of function invocations
	* @param {Callback} done - function to invoke upon completion
	* @throws {TypeError} first argument must be a nonnegative integer
	* @throws {TypeError} last argument must be a function
	* @returns {void}
	*/
	function mapFunAsync( n, done ) {
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( 'invalid argument. Number of function invocations must be a nonnegative integer. Value: `'+n+'`.' );
		}
		if ( !isFunction( done ) ) {
			throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
		}
		return limit( n, opts, f, clbk );

		/**
		* Callback invoked upon completion.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {Array} results - results
		* @returns {void}
		*/
		function clbk( error, results ) {
			if ( error ) {
				return done( error );
			}
			done( null, results );
		}
	}
}


// EXPORTS //

module.exports = factory;
