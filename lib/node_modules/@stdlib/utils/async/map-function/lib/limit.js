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

var logger = require( 'debug' );


// VARIABLES //

var debug = logger( 'map-function-async:limit' );


// MAIN //

/**
* Invokes a function `n` times, limiting the number of concurrently pending invocations, and returns an array of accumulated function return values.
*
* @private
* @param {NonNegativeInteger} n - number of function invocations
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {PositiveInteger} [opts.limit] - maximum number of pending function invocations
* @param {Function} fcn - function to invoke
* @param {Callback} done - function to invoke upon completion or upon encountering an error
* @returns {void}
*/
function limit( n, opts, fcn, done ) {
	var count;
	var flg;
	var out;
	var lim;
	var idx;
	var m;
	var i;

	debug( 'Number of invocations: %d', n );

	// Note: we explicitly preallocate in order to facilitate inserting a function result into its associated output array index. This means we do not ensure "fast" elements for large output arrays.
	out = new Array( n );
	if ( n === 0 ) {
		debug( 'Finished invoking a function.' );
		return done( null, out );
	}
	if ( n < opts.limit ) {
		lim = n;
	} else {
		lim = opts.limit;
	}
	debug( 'Concurrency limit: %d', lim );

	count = 0;
	idx = -1;
	m = n - 1;
	for ( i = 0; i < lim; i++ ) {
		// This guard is necessary to protect against synchronous functions which exhaust all invocations...
		if ( idx < m ) {
			next(); // eslint-disable-line callback-return
		}
	}
	/**
	* Callback to process the next function invocation.
	*
	* @private
	*/
	function next() {
		var j;
		idx += 1;
		j = idx;
		debug( 'Invocation number: %d', j );
		fcn.call( opts.thisArg, j, cb );

		/**
		* Callback invoked once a provided function completes.
		*
		* @private
		* @param {*} [error] - error
		* @param {*} [result] - result
		* @returns {void}
		*/
		function cb( error, result ) {
			if ( flg ) {
				// Prevent further invocations:
				return;
			}
			if ( error ) {
				flg = true;
				return clbk( error );
			}
			out[ j ] = result;
			clbk();
		}
	}

	/**
	* Callback invoked once ready to process the next invocation.
	*
	* @private
	* @param {*} [error] - error
	* @returns {void}
	*/
	function clbk( error ) {
		if ( error ) {
			debug( 'Encountered an error: %s', error.message );
			return done( error );
		}
		count += 1;
		debug( 'Completed invocation %d of %d.', count, n );
		if ( idx < m ) {
			return next();
		}
		if ( count === n ) {
			debug( 'Finished invoking a function.' );
			return done( null, out );
		}
	}
}


// EXPORTS //

module.exports = limit;
