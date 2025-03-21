/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var debug = logger( 'parallel-async:limit' );


// MAIN //

/**
* Invokes functions in a provided array, limiting the number of concurrently pending functions.
*
* @private
* @param {FunctionArray} fcns - array of functions
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {PositiveInteger} [opts.limit] - maximum number of pending function invocations
* @param {Callback} done - function to invoke upon completion or upon encountering an error
* @returns {void}
*/
function limit( fcns, opts, done ) {
	var maxIndex;
	var count;
	var flg;
	var lim;
	var len;
	var idx;
	var out;
	var i;

	len = fcns.length;
	debug( 'Number of functions: %d', len );

	out = new Array( len );
	if ( len < opts.limit ) {
		lim = len;
	} else {
		lim = opts.limit;
	}
	debug( 'Concurrency limit: %d', lim );

	maxIndex = len - 1;
	count = 0;
	idx = -1;
	for ( i = 0; i < lim; i++ ) {
		// This guard is necessary to protect against synchronous functions...
		if ( idx < maxIndex ) {
			next(); // eslint-disable-line node/callback-return
		}
	}
	/**
	* Callback to invoke the next function.
	*
	* @private
	*/
	function next() {
		var i;

		idx += 1;

		// Cache the current index value to allow storing results later:
		i = idx;

		fcns[ idx ].call( opts.thisArg, resolve );

		/**
		* Callback invoked once a provided function finishes.
		*
		* @private
		* @param {*} [error] - error
		* @param {*} [results] - results
		* @returns {void}
		*/
		function resolve( error, results ) {
			if ( flg ) {
				// Prevent further processing:
				return;
			}
			if ( error ) {
				flg = true;
				return clbk( error );
			}
			out[ i ] = results;
			clbk();
		}
	}

	/**
	* Callback invoked once ready to process the next function.
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
		debug( 'Processed %d of %d functions.', count, len );
		if ( idx < maxIndex ) {
			return next();
		}
		if ( count === len ) {
			debug( 'Finished processing the functions.' );
			return done( null, out );
		}
	}
}


// EXPORTS //

module.exports = limit;
