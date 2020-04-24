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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the L2-norm of a single-precision floating-point vector.
*
* @param {PositiveInteger} N - number of values over which to compute the L2-norm
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} L2-norm
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = floor( x.length / 2 );
*
* var z = snrm2( N, x, 2, 1 );
* // returns 5.0
*/
function snrm2( N, x, stride, offset ) {
	var scale;
	var ssq;
	var ax;
	var ix;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	if ( N === 1 ) {
		return abs( x[ offset ] );
	}
	ix = offset;
	scale = 0.0;
	ssq = 1.0;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] !== 0.0 ) {
			ax = abs( x[ ix ] );
			if ( scale < ax ) {
				ssq = float64ToFloat32( 1.0 + ( ssq * pow( scale/ax, 2 ) ) );
				scale = ax;
			} else {
				ssq = float64ToFloat32( ssq + pow( ax/scale, 2 ) );
			}
		}
		ix += stride;
	}
	return float64ToFloat32( scale * sqrt( ssq ) );
}


// EXPORTS //

module.exports = snrm2;
