/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var ddot = require( '@stdlib/blas/base/ddot' ).ndarray;
var sdot = require( '@stdlib/blas/base/sdot' ).ndarray;
var dot = require( '@stdlib/blas/base/gdot' ).ndarray;


// MAIN //

/**
* Computes the dot product of vectors `x` and `y`.
*
* ## Notes
*
* -   In general, for best performance, especially for large vectors, provide 1-dimensional `ndarrays` whose underlying data type is either `float64` or `float32`.
*
* @param {(Collection|VectorLike)} x - first input array
* @param {(Collection|VectorLike)} y - second input array
* @throws {TypeError} first argument must be either an array-like object or a 1-dimensional ndarray
* @throws {TypeError} second argument must be either an array-like object or a 1-dimensional ndarray
* @throws {RangeError} input arrays must be the same length
* @returns {number} dot product
*
* @example
* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
*
* var z = gdot( x, y );
* // returns -5.0
*/
function gdot( x, y ) {
	var isxf64;
	var isxf32;
	var isyf64;
	var isyf32;
	var isxa;
	var isxv;
	var isya;
	var isyv;

	isxa = isndarrayLike( x );
	isya = isndarrayLike( y );
	isxv = isxa && x.ndims === 1 && x.strides.length === 1; // is ndarray-like vector?
	isyv = isya && y.ndims === 1 && y.strides.length === 1; // is ndarray-like vector?
	if ( isxv ) {
		isxf64 = isFloat64Array( x.data );
		isxf32 = ( isxf64 ) ? false : isFloat32Array( x.data );
	} else if ( isxa === false && isCollection( x ) ) {
		isxf64 = isFloat64Array( x );
		isxf32 = ( isxf64 ) ? false : isFloat32Array( x );
	} else {
		throw new TypeError( 'invalid argument. First argument must be either an array-like object or a 1-dimensional ndarray. Value: `' + x + '`.' );
	}
	if ( isyv ) {
		isyf64 = isFloat64Array( y.data );
		isyf32 = ( isyf64 ) ? false : isFloat32Array( y.data );
	} else if ( isya === false && isCollection( y ) ) {
		isyf64 = isFloat64Array( y );
		isyf32 = ( isyf64 ) ? false : isFloat32Array( y );
	} else {
		throw new TypeError( 'invalid argument. Second argument must be either an array-like object or a 1-dimensional ndarray. Value: `' + y + '`.' );
	}
	if ( x.length !== y.length ) {
		throw new RangeError( 'invalid argument. Arrays must be the same length. First argument length: ' + x.length + '. Second argument length: ' + y.length + '.' );
	}
	if ( isxv && isyv ) {
		if ( isxf64 && isyf64 ) {
			return ddot( x.length, x.data, x.strides[ 0 ], x.offset, y.data, y.strides[ 0 ], y.offset ); // eslint-disable-line max-len
		}
		if ( isxf32 && isyf32 ) {
			return sdot( x.length, x.data, x.strides[ 0 ], x.offset, y.data, y.strides[ 0 ], y.offset ); // eslint-disable-line max-len
		}
		return dot( x.length, x.data, x.strides[ 0 ], x.offset, y.data, y.strides[ 0 ], y.offset ); // eslint-disable-line max-len
	}
	if ( isxv ) {
		return dot( x.length, x.data, x.strides[ 0 ], x.offset, y, 1, 0 );
	}
	if ( isyv ) {
		return dot( x.length, x, 1, 0, y.data, y.strides[ 0 ], y.offset );
	}
	return dot( x.length, x, 1, 0, y, 1, 0 );
}


// EXPORTS //

module.exports = gdot;
