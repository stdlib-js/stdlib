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
* Returns a function for grouping values according to an indicator function.
*
* ## Notes
*
* -   This function does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
*
*
* @param {Options} [options] - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series=false] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next element in a collection
* @param {string} [options.returns="values"] - if `values`, values are returned; if `indices`, indices are returned; if `*`, both indices and values are returned
* @param {Function} indicator - indicator function specifying which group an element in the input collection belongs to
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
* @returns {Function} function which invokes the indicator function once for each element in a collection
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
*
* function indicator( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, 'nonreadable' );
*         }
*         next( null, 'readable' );
*     }
* }
*
* var opts = {
*     'series': true
* };
*
* // Create a `groupByAsync` function which invokes the indicator function for each collection element sequentially:
* var groupByAsync = factory( opts, indicator );
*
* // Create a collection over which to iterate:
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* // Define a callback which handles results:
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
*
* // Try to read each element in `files`:
* groupByAsync( files, done );
*/
function factory( options, indicator ) {
	var opts;
	var err;
	var f;

	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		f = indicator;
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
	return groupByAsync;

	/**
	* Invokes an indicator function for each element in a collection.
	*
	* @private
	* @param {Collection} collection - input collection
	* @param {Callback} done - function to invoke upon completion
	* @throws {TypeError} first argument must be a collection
	* @throws {TypeError} last argument must be a function
	* @returns {void}
	*/
	function groupByAsync( collection, done ) {
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
		* @param {Object} result - group-by result
		* @returns {void}
		*/
		function clbk( error, result ) {
			if ( error ) {
				return done( error );
			}
			done( null, result );
		}
	}
}


// EXPORTS //

module.exports = factory;
