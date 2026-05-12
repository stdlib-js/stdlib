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


// MAIN //

/**
* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values and using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = snanmeanors( 5, x, 2, 1 );
* // returns 1.25
*/
function snanmeanors( N, x, strideX, offsetX ) {
	var sum;
	var ix;
	var v;
	var n;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ offsetX ];
	}
	ix = offsetX;
	sum = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			sum = float64ToFloat32( sum + v );
			n += 1;
		}
		ix += strideX;
	}
	if ( n === 0 ) {
		return NaN;
	}
	return float64ToFloat32( sum / n );
}


// EXPORTS //

module.exports = snanmeanors;
