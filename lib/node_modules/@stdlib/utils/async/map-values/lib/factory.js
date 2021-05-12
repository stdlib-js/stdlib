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
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var limit = require( './limit.js' );


// MAIN //

/**
* Returns a function to map values from one object to a new object having the same keys.
*
* ## Notes
*
* -   If a provided function calls the provided callback with a truthy error argument, the function suspends execution and immediately calls the `done` callback for subsequent error handling.
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
* -   Iteration and insertion order are **not** guaranteed.
* -   The function only operates on own properties, not inherited properties.
*
*
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property
* @param {Function} transform - transform function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
* @returns {Function} function which maps values from one object to a new object having the same keys
*
* @example
* var stat = require( 'fs' ).stat;
*
* function getStats( file, next ) {
*     stat( file, onStats );
*
*     function onStats( error, data ) {
*         if ( error ) {
*             return next( error );
*         }
*         next( null, data );
*     }
* }
*
* var opts = {
*     'series': true
* };
*
* // Create a reusable function:
* var mapValuesAsync = factory( opts, getStats );
*
* // Create a dictionary of file names:
* var files = {
*     'file1': './beep.js',
*     'file2': './boop.js'
* };
*
* // Define a callback which handles errors:
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*
* // Process each file in `files`:
* mapValuesAsync( files, done );
*/
function factory( options, transform ) {
	var opts;
	var err;
	var f;

	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		f = transform;
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
	return mapValuesAsync;

	/**
	* Maps values from one object to a new object having the same keys.
	*
	* @private
	* @param {Object} obj - source object
	* @param {Callback} done - function to invoke upon completion
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} last argument must be a function
	* @returns {void}
	*/
	function mapValuesAsync( obj, done ) {
		if ( typeof obj !== 'object' || obj === null ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `'+obj+'.`' );
		}
		if ( !isFunction( done ) ) {
			throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
		}
		return limit( obj, opts, f, clbk );

		/**
		* Callback invoked upon completion.
		*
		* @private
		* @param {*} [error] - error
		* @param {Object} [out] - output object
		* @returns {void}
		*/
		function clbk( error, out ) {
			if ( error ) {
				return done( error );
			}
			done( null, out );
		}
	}
}


// EXPORTS //

module.exports = factory;
