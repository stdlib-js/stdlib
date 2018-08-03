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


// MAIN //

/**
* Invokes a function until a test condition is true.
*
* @param {Function} predicate - function which indicates whether to continue invoking a function
* @param {Function} fcn - function to invoke
* @param {Callback} done - callback to invoke upon completion
* @param {*} [thisArg] - execution context for the invoked function
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
*
* @example
* function predicate( i, clbk ) {
*     clbk( null, i >= 5 );
* }
*
* function fcn( i, next ) {
*     setTimeout( onTimeout, i );
*     function onTimeout() {
*         console.log( 'beep: %d', i );
*         next();
*     }
* }
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* untilAsync( predicate, fcn, done );
*/
function untilAsync( predicate, fcn, done, thisArg ) {
	var args;
	var idx;
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. First argument must be a function. Value: `'+predicate+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+fcn+'`.' );
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+done+'`.' );
	}
	args = [];
	idx = 0;
	predicate( idx, onPredicate );

	/**
	* Callback invoked upon a predicate result.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} result - predicate result
	* @returns {void}
	*/
	function onPredicate( error, result ) {
		if ( error ) {
			return done( error );
		}
		if ( !result ) {
			return fcn.call( thisArg, idx, next );
		}
		if ( args.length ) {
			args.unshift( null ); // error argument
		}
		done.apply( null, args );
	}

	/**
	* Callback invoked upon completion of a provided function.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {...*} results - function results
	* @returns {void}
	*/
	function next( error ) {
		var i;
		if ( error ) {
			return done( error );
		}
		idx += 1;

		// Cache the most recent results...
		if ( arguments.length > 1 ) {
			args = new Array( arguments.length-1 );
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i-1 ] = arguments[ i ];
			}
		}
		// Run the test condition:
		predicate( idx, onPredicate );
	}
}


// EXPORTS //

module.exports = untilAsync;
