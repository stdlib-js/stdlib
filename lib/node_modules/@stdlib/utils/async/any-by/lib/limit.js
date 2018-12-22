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

var debug = logger( 'any-by-async:limit' );


// MAIN //

/**
* Invokes a predicate function once for each element in a collection, limiting the number of concurrently pending functions.
*
* @private
* @param {Collection} collection - input collection
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {PositiveInteger} [opts.limit] - maximum number of pending function invocations
* @param {Function} predicate - predicate function
* @param {Callback} done - function to invoke upon completion or upon encountering an error
* @returns {void}
*/
function limit( collection, opts, predicate, done ) {
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
		return done( null, false );
	}
	if ( len < opts.limit ) {
		lim = len;
	} else {
		lim = opts.limit;
	}
	debug( 'Concurrency limit: %d', lim );
	debug( 'Number of arguments: %d', predicate.length );

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
		if ( predicate.length === 2 ) {
			predicate.call( opts.thisArg, collection[ idx ], clbk );
		} else if ( predicate.length === 3 ) {
			predicate.call( opts.thisArg, collection[ idx ], idx, clbk );
		} else {
			predicate.call( opts.thisArg, collection[ idx ], idx, collection, clbk ); // eslint-disable-line max-len
		}
	}

	/**
	* Callback invoked once a provided function finishes processing a collection element.
	*
	* @private
	* @param {*} [error] - error
	* @param {*} [result] - test result
	* @returns {void}
	*/
	function clbk( error, result ) {
		if ( flg ) {
			// Prevent further processing of collection elements:
			return;
		}
		if ( error ) {
			flg = true;
			debug( 'Encountered an error: %s', error.message );
			return done( error );
		}
		count += 1;
		debug( 'Processed %d of %d collection elements.', count, len );

		debug( 'Test result: %s', !!result );
		if ( result && !flg ) {
			flg = true;
			debug( 'Finished processing a collection.' );
			return done( null, true );
		}
		if ( idx < maxIndex ) {
			return next();
		}
		if ( count === len ) {
			debug( 'Finished processing a collection.' );
			return done( null, false );
		}
	}
}


// EXPORTS //

module.exports = limit;
