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
var isCollection = require( '@stdlib/assert/is-collection' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var validate = require( './validate.js' );
var limit = require( './limit.js' );


// MAIN //

/**
* Returns a function to invoke a function once for each element in a collection.
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
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection
* @param {Function} fcn - function to invoke for each element in a collection
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
* @returns {Function} function which invokes the provided function once for each element in a collection
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function read( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( error );
*         }
*         console.log( 'Successfully read file: %s', file );
*         next();
*     }
* }
*
* var opts = {
*     'series': true
* };
*
* // Create a `forEachAsync` function which invokes `read` for each collection element sequentially:
* var forEachAsync = factory( opts, read );
*
* // Create a collection over which to iterate:
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* // Define a callback which handles errors:
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Successfully read all files.' );
* }
*
* // Run `read` for each element in `files`:
* forEachAsync( files, done );
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
	return forEachAsync;

	/**
	* Invokes a function for each element in a collection.
	*
	* @private
	* @param {Collection} collection - input collection
	* @param {Callback} done - function to invoke upon completion
	* @throws {TypeError} first argument must be a collection
	* @throws {TypeError} last argument must be a function
	* @returns {void}
	*/
	function forEachAsync( collection, done ) {
		if ( !isCollection( collection ) ) {
			throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'.`' );
		}
		if ( !isFunction( done ) ) {
			throw new TypeError( 'invalid argument. Last argument must be a function. Value: `'+done+'`.' );
		}
		return limit( collection, opts, f, clbk );

		/**
		* Callback invoked upon completion.
		*
		* @private
		* @param {*} [error] - error
		* @returns {void}
		*/
		function clbk( error ) {
			if ( error ) {
				return done( error );
			}
			done();
		}
	}
}


// EXPORTS //

module.exports = factory;
