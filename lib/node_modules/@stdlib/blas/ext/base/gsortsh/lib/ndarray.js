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
* Sorts a strided array using Shellsort.
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
* @param {NumericArray} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {NumericArray} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsortsh( x.length, 1.0, x, 1, 0 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/
function gsortsh( N, order, x, stride, offset ) {
	var flg;
	var gap;
	var v;
	var u;
	var i;
	var j;
	var k;

	if ( N <= 0 || order === 0.0 ) {
		return x;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		stride *= -1;
		offset -= (N-1) * stride;
	}
	for ( i = 0; i < NGAPS; i++ ) {
		gap = GAPS[ i ];
		for ( j = gap; j < N; j++ ) {
			v = x[ offset+(j*stride) ];

			// If `NaN`, the current value is already sorted to its place...
			if ( isnan( v ) ) {
				continue;
			}
			// Perform insertion sort on the "gapped" subarray...
			flg = isNegativeZero( v );
			for ( k = j; k >= gap; k -= gap ) {
				u = x[ offset+((k-gap)*stride) ];
				if ( u <= v && !(flg && u === v) ) {
					break;
				}
				x[ offset+(k*stride) ] = u;
			}
			x[ offset+(k*stride) ] = v;
		}
	}
	return x;
}


// EXPORTS //

module.exports = gsortsh;
