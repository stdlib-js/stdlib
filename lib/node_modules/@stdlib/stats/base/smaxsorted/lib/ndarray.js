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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );


// MAIN //

/**
* Computes the maximum value of a sorted single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - sorted input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} maximum value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, -3.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = smaxsorted( 4, x, 2, 1 );
* // returns 4.0
*/
function smaxsorted( N, x, strideX, offsetX ) {
	var v1;
	var v2;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ 0 ];
	}
	v1 = x[ offsetX ];
	v2 = x[ offsetX + ((N-1)*strideX) ];
	if ( isnanf( v1 ) || isnanf( v2 ) ) {
		return NaN;
	}
	if ( v1 === v2 ) {
		if ( isPositiveZerof( v1 ) || isPositiveZerof( v2 ) ) {
			return 0.0;
		}
		return v1;
	}
	if ( v1 > v2 ) {
		return v1;
	}
	return v2;
}


// EXPORTS //

module.exports = smaxsorted;
