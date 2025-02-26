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
* Computes the variance of a single-precision floating-point strided array using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = svariancetk( 4, 1, x, 2, 1 );
* // returns 6.25
*/
function svariancetk( N, correction, x, strideX, offsetX ) {
	var S2;
	var ix;
	var S;
	var v;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return 0.0;
	}
	ix = offsetX;
	S2 = 0.0;
	S = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		S2 = float64ToFloat32( S2 + float64ToFloat32( v*v ) );
		S = float64ToFloat32( S+v );
		ix += strideX;
	}
	return float64ToFloat32( float64ToFloat32(S2 - float64ToFloat32(float64ToFloat32(S/N)*S)) / n ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = svariancetk;
