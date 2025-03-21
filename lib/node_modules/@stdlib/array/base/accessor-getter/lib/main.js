/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// VARIABLES //

var GETTERS = {
	'complex128': getComplex128,
	'complex64': getComplex64,
	'default': getArrayLike
};


// FUNCTIONS //

/**
* Returns an element from a `Complex128Array`.
*
* @private
* @param {Complex128Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var arr = new Complex128Array( [ 1, 2, 3, 4 ] );
*
* var v = getComplex128( arr, 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 3.0
*
* var im = imag( v );
* // returns 4.0
*/
function getComplex128( arr, idx ) {
	return arr.get( idx );
}

/**
* Returns an element from a `Complex64Array`.
*
* @private
* @param {Complex64Array} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {number} element value
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var v = getComplex64( arr, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/
function getComplex64( arr, idx ) {
	return arr.get( idx );
}

/**
* Returns an element from an array-like object supporting the get/set protocol.
*
* @private
* @param {Collection} arr - input array
* @param {NonNegativeInteger} idx - element index
* @returns {*} element value
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* function get( idx ) {
*    return arr[ idx ];
* }
*
* function set( value, idx ) {
*    arr[ idx ] = value;
* }
*
* arr.get = get;
* arr.set = set;
*
* var v = getArrayLike( arr, 2 );
* // returns 3
*/
function getArrayLike( arr, idx ) {
	return arr.get( idx );
}


// MAIN //

/**
* Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
*
* @param {string} dtype - array dtype
* @returns {Function} accessor
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var dtype = require( '@stdlib/array/dtype' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( dtype( arr ) );
* var v = get( arr, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/
function getter( dtype ) {
	var f = GETTERS[ dtype ];
	if ( typeof f === 'function' ) {
		return f;
	}
	return GETTERS.default;
}


// EXPORTS //

module.exports = getter;
