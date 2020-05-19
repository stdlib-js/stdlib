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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );


// MAIN //

/**
* Computes the cumulative maximum of double-precision floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float64Array( x.length );
* var N = x.length;
*
* var v = dcumax( N, x, 1, y, 1 );
* // returns <Float64Array>[ 1.0, 1.0, 2.0 ]
*/
function dcumax( N, x, strideX, y, strideY ) {
	var max;
	var ix;
	var iy;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	max = x[ ix ];
	y[ iy ] = max;

	iy += strideY;
	i = 1;
	if ( isnan( max ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) ) {
				max = v;
				break;
			}
			if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
				max = v;
			}
			y[ iy ] = max;
			iy += strideY;
		}
	}
	if ( isnan( max ) ) {
		for ( i; i < N; i++ ) {
			y[ iy ] = max;
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = dcumax;
