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

var debug = logger( 'reduce-async:limit' );


// MAIN //

/**
* Invokes a function once for each element in a collection, limiting the number of concurrently pending functions.
*
* @private
* @param {Collection} collection - input collection
* @param {*} acc - initial value
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {PositiveInteger} [opts.limit] - maximum number of pending function invocations
* @param {Function} fcn - function to invoke
* @param {Callback} done - function to invoke upon completion or upon encountering an error
* @returns {void}
*/
function limit( collection, acc, opts, fcn, done ) {
	var maxIndex;
	var count;
	var flg;
	var lim;
	var len;
	var idx;
	var i;

	len = collection.length;
	debug( 'Collection length: %d', len );

	if ( len === 0 ) {
		debug( 'Finished processing a collection.' );
		return done( null, acc );
	}
	if ( len < opts.limit ) {
		lim = len;
	} else {
		lim = opts.limit;
	}
	debug( 'Concurrency limit: %d', lim );
	debug( 'Number of arguments: %d', fcn.length );

	maxIndex = len - 1;
	count = 0;
	idx = -1;
	for ( i = 0; i < lim; i++ ) {
		// This guard is necessary to protect against synchronous functions which exhaust all collection elements...
		if ( idx < maxIndex ) {
			next(); // eslint-disable-line callback-return
		}
	}
	/**
	* Callback to invoke a provided function for the next element in a collection.
	*
	* @private
	*/
	function next() {
		idx += 1;
		debug( 'Collection element %d: %s.', idx, JSON.stringify( collection[ idx ] ) );
		if ( fcn.length === 3 ) {
			fcn.call( opts.thisArg, acc, collection[ idx ], cb );
		} else if ( fcn.length === 4 ) {
			fcn.call( opts.thisArg, acc, collection[ idx ], idx, cb );
		} else {
			fcn.call( opts.thisArg, acc, collection[ idx ], idx, collection, cb ); // eslint-disable-line max-len
		}
		/**
		* Callback invoked once a provided function finishes processing a collection element.
		*
		* @private
		* @param {*} [error] - error
		* @param {*} [result] - accumulation result
		* @returns {void}
		*/
		function cb( error, result ) {
			if ( flg ) {
				// Prevent further processing of collection elements:
				return;
			}
			if ( error ) {
				flg = true;
				return clbk( error );
			}
			debug( 'Accumulator: %s', JSON.stringify( result ) );
			acc = result;
			clbk();
		}
	}

	/**
	* Callback invoked once ready to process the next collection element.
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
		debug( 'Processed %d of %d collection elements.', count, len );
		if ( idx < maxIndex ) {
			return next();
		}
		if ( count === len ) {
			debug( 'Finished processing a collection.' );
			return done( null, acc );
		}
	}
}


// EXPORTS //

module.exports = limit;
