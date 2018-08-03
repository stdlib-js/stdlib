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
* Function composition.
*
* @param {...Function} f - functions to compose
* @throws {Error} must provide more than one argument
* @throws {TypeError} must provide functions
* @returns {Function} composite function
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
* var f = compose( c, b, a );
*
* var z = f( 6 );
* // returns 3
*/
function compose() {
	var nFuncs;
	var f;
	var i;
	nFuncs = arguments.length;
	if ( nFuncs < 2 ) {
		throw new Error( 'insufficient input arguments. Must provide multiple functions to compose.' );
	}
	f = new Array( nFuncs );
	for ( i = 0; i < nFuncs; i++ ) {
		f[ i ] = arguments[ i ];
		if ( !isFunction( f[ i ] ) ) {
			throw new TypeError( 'invalid argument. All arguments must be functions. Value: `'+f[ i ]+'`.' );
		}
	}
	return composite;

	/**
	* Composite function.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {*} result
	*/
	function composite() {
		var args;
		var i;
		args = new Array( arguments.length );
		for ( i = 0; i < args.length; i++ ) {
			args[ i ] = arguments[ i ];
		}
		args = f[ nFuncs-1 ].apply( null, args );
		for ( i = nFuncs-2; i >= 0; i-- ) {
			args = f[ i ]( args );
		}
		return args;
	}
}


// EXPORTS //

module.exports = compose;
