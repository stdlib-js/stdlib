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
* function a( x ) {
*     return 2 * x;
* }
*
* function b( x ) {
*     return x + 3;
* }
*
* function c( x ) {
*     return x / 5;
* }
*
* var f = funseq( a, b, c );
*
* var z = f( 6 );
* // returns 3
*/
function funseq() {
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
	* @returns {*} result
	*/
	function pipeline() {
		var args;
		var i;
		args = new Array( arguments.length );
		for ( i = 0; i < args.length; i++ ) {
			args[ i ] = arguments[ i ];
		}
		args = f[ 0 ].apply( null, args );
		for ( i = 1; i < nFuncs; i++ ) {
			args = f[ i ]( args );
		}
		return args;
	}
}


// EXPORTS //

module.exports = funseq;
