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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );


// MAIN //

/**
* Computes the mid-range of a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} mid-range
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = smidrange( 4, x, 2, 1 );
* // returns 1.0
*/
function smidrange( N, x, strideX, offsetX ) {
	var max;
	var min;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ offsetX ];
	}
	ix = offsetX;
	min = x[ ix ];
	max = min;
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = x[ ix ];
		if ( isnanf( v ) ) {
			return v;
		}
		if ( v < min || ( v === min && isNegativeZerof( v ) ) ) {
			min = v;
		} else if ( v > max || ( v === max && isPositiveZerof( v ) ) ) {
			max = v;
		}
	}
	return float64ToFloat32( float64ToFloat32( max+min ) / 2.0 );
}


// EXPORTS //

module.exports = smidrange;
