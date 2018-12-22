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
* Function sequence.
*
* @param {...Function} f - functions to evaluate in sequential order
* @throws {Error} must provide more than one argument
* @throws {TypeError} must provide functions
* @returns {Function} pipeline function
*
* @example
* function a( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, 2*x );
*     }
* }
*
* function b( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, x+3 );
*     }
* }
*
* function c( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, x/5 );
*     }
* }
*
* var f = funseqAsync( a, b, c );
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
*     // => 3
* }
*
* f( 6, done );
*/
function funseqAsync() {
	var nFuncs;
	var f;
	var i;
	nFuncs = arguments.length;
	if ( nFuncs < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide multiple functions to execute sequentially.' );
	}
	f = new Array( nFuncs );
	for ( i = 0; i < nFuncs; i++ ) {
		f[ i ] = arguments[ i ];
		if ( !isFunction( f[ i ] ) ) {
			throw new TypeError( 'invalid argument. All arguments must be functions. Value: `'+f[ i ]+'`.' );
		}
	}
	return pipeline;

	/**
	* Pipeline function.
	*
	* @private
	* @param {...*} args - arguments
	* @param {Callback} done - callback to invoke after invoking all functions
	*/
	function pipeline() {
		var done;
		var args;
		var i;

		// Cache the callback function:
		done = arguments[ arguments.length-1 ];

		// Copy arguments which should be provided to the first invoked function...
		args = new Array( arguments.length-1 );
		for ( i = 0; i < args.length; i++ ) {
			args[ i ] = arguments[ i ];
		}
		// Append the callback an invoked function should call upon completion:
		args.push( next );

		// Start invoking provided functions:
		i = 0;
		f[ i ].apply( null, args );

		/**
		* Callback invoked upon completion of a provided function.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {*} result - result to pass to next function
		* @returns {void}
		*/
		function next( error, result ) {
			if ( error ) {
				return done( error );
			}
			i += 1;
			if ( i === nFuncs ) {
				return done( null, result );
			}
			f[ i ]( result, next );
		}
	}
}


// EXPORTS //

module.exports = funseqAsync;
