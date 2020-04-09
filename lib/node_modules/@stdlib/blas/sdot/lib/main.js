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

var isFloat32VectorLike = require( '@stdlib/assert/is-float32vector-like' );
var dot = require( '@stdlib/blas/base/sdot' ).ndarray;


// MAIN //

/**
* Computes the dot product of two single-precision floating-point vectors.
*
* @param {VectorLike} x - first input array
* @param {VectorLike} y - second input array
* @throws {TypeError} first argument must be a 1-dimensional ndarray containing single-precision floating-point numbers
* @throws {TypeError} second argument must be a 1-dimensional ndarray containing single-precision floating-point numbers
* @throws {RangeError} input arrays must be the same length
* @returns {number} dot product
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* var z = sdot( x, y );
* // returns -5.0
*/
function sdot( x, y ) {
	if ( !isFloat32VectorLike( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a 1-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `' + x + '`.' );
	}
	if ( !isFloat32VectorLike( y ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a 1-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `' + y + '`.' );
	}
	if ( x.length !== y.length ) {
		throw new RangeError( 'invalid argument. Arrays must be the same length. First argument length: ' + x.length + '. Second argument length: ' + y.length + '.' );
	}
	return dot( x.length, x.data, x.strides[ 0 ], x.offset, y.data, y.strides[ 0 ], y.offset ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = sdot;
