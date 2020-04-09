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

var isFloat64VectorLike = require( '@stdlib/assert/is-float64vector-like' );
var swap = require( '@stdlib/blas/base/dswap' ).ndarray;


// MAIN //

/**
* Interchanges two double-precision floating-point vectors.
*
* @param {VectorLike} x - first input array
* @param {VectorLike} y - second input array
* @throws {TypeError} first argument must be a 1-dimensional ndarray containing double-precision floating-point numbers
* @throws {TypeError} second argument must be a 1-dimensional ndarray containing double-precision floating-point numbers
* @throws {RangeError} input arrays must be the same length
* @returns {VectorLike} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* dswap( x, y );
*
* var xbuf = x.data;
* // returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
*
* var ybuf = y.data;
* // returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
*/
function dswap( x, y ) {
	if ( !isFloat64VectorLike( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a 1-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `' + x + '`.' );
	}
	if ( !isFloat64VectorLike( y ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a 1-dimensional ndarray containing double-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float64Array). Value: `' + y + '`.' );
	}
	if ( x.length !== y.length ) {
		throw new RangeError( 'invalid argument. Arrays must be the same length. First argument length: ' + x.length + '. Second argument length: ' + y.length + '.' );
	}
	swap( x.length, x.data, x.strides[ 0 ], x.offset, y.data, y.strides[ 0 ], y.offset ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = dswap;
