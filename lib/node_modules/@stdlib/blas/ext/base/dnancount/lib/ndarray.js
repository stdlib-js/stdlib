/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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


// MAIN //

/**
* Computes the number of non-`NaN` elements in a double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NonNegativeInteger} number of non-`NaN` elements
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = dnancount( 5, x, 2, 1 );
* // returns 4
*/
function dnancount( N, x, strideX, offsetX ) {
	var count;
	var ix;
	var i;

	if ( N <= 0 ) {
		return 0;
	}
	count = 0;
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( !isnan( x[ ix ] ) ) {
			count += 1;
		}
		ix += strideX;
	}
	return count;
}


// EXPORTS //

module.exports = dnancount;
