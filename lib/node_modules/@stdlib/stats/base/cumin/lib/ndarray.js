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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );


// MAIN //

/**
* Computes the cumulative minimum of a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} output array
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var N = floor( x.length / 2 );
*
* var v = cumin( N, x, 2, 1, y, 1, 0 );
* // returns [ 1.0, -2.0, -2.0, -2.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function cumin( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var min;
	var ix;
	var iy;
	var v;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;

	min = x[ ix ];
	y[ iy ] = min;

	iy += strideY;
	i = 1;
	if ( isnan( min ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) ) {
				min = v;
				break;
			}
			if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
				min = v;
			}
			y[ iy ] = min;
			iy += strideY;
		}
	}
	if ( isnan( min ) ) {
		for ( i; i < N; i++ ) {
			y[ iy ] = min;
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = cumin;
