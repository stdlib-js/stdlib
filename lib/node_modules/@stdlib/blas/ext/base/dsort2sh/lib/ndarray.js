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

var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var GAPS = require( './gaps.json' );


// VARIABLES //

var NGAPS = GAPS.length;


// MAIN //

/**
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
*
* ## Notes
*
* -   This implementation uses the gap sequence proposed by Ciura (2001).
*
* ## References
*
* -   Shell, Donald L. 1959. "A High-Speed Sorting Procedure." _Communications of the ACM_ 2 (7). Association for Computing Machinery: 30–32. doi:[10.1145/368370.368387](https://doi.org/10.1145/368370.368387).
* -   Ciura, Marcin. 2001. "Best Increments for the Average Case of Shellsort." In _Fundamentals of Computation Theory_, 106–17. Springer Berlin Heidelberg. doi:[10.1007/3-540-44669-9\_12](https://doi.org/10.1007/3-540-44669-9_12).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` index increment
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` index increment
* @param {NonNegativeInteger} offsetY - `y` starting index
* @returns {Float64Array} `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* dsort2sh( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/
function dsort2sh( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
	var flg;
	var gap;
	var vx;
	var vy;
	var ux;
	var i;
	var j;
	var k;

	if ( N <= 0 || order === 0.0 ) {
		return x;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		strideY *= -1;
		offsetX -= (N-1) * strideX;
		offsetY -= (N-1) * strideY;
	}
	for ( i = 0; i < NGAPS; i++ ) {
		gap = GAPS[ i ];
		for ( j = gap; j < N; j++ ) {
			vx = x[ offsetX+(j*strideX) ];

			// If `NaN`, the current value is already sorted to its place...
			if ( isnan( vx ) ) {
				continue;
			}
			vy = y[ offsetY+(j*strideY) ];

			// Perform insertion sort on the "gapped" subarray...
			flg = isNegativeZero( vx );
			for ( k = j; k >= gap; k -= gap ) {
				ux = x[ offsetX+((k-gap)*strideX) ];
				if ( ux <= vx && !(flg && ux === vx) ) {
					break;
				}
				x[ offsetX+(k*strideX) ] = ux;
				y[ offsetY+(k*strideY) ] = y[ offsetY+((k-gap)*strideY) ];
			}
			x[ offsetX+(k*strideX) ] = vx;
			y[ offsetY+(k*strideY) ] = vy;
		}
	}
	return x;
}


// EXPORTS //

module.exports = dsort2sh;
