/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - first input array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - second input array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Object} `x`
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2sh( x.length, 1.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
function gsort2sh( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var xget;
	var yget;
	var xset;
	var yset;
	var flg;
	var gap;
	var vx;
	var vy;
	var ux;
	var i;
	var j;
	var k;

	// Cache reference to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];
	yget = y.accessors[ 0 ];
	yset = y.accessors[ 1 ];

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
			vx = xget( xbuf, offsetX+(j*strideX) );

			// If `NaN`, the current value is already sorted to its place...
			if ( isnan( vx ) ) {
				continue;
			}
			vy = yget( ybuf, offsetY+(j*strideY) );

			// Perform Shellsort on the "gapped" subarray...
			flg = isNegativeZero( vx );
			for ( k = j; k >= gap; k -= gap ) {
				ux = xget( xbuf, offsetX+((k-gap)*strideX) );
				if ( ux <= vx && !(flg && ux === vx) ) {
					break;
				}
				xset( xbuf, offsetX+(k*strideX), ux );
				yset( ybuf, offsetY+(k*strideY), yget( ybuf, offsetY+((k-gap)*strideY) ) ); // eslint-disable-line max-len
			}
			xset( xbuf, offsetX+(k*strideX), vx );
			yset( ybuf, offsetY+(k*strideY), vy );
		}
	}
	return x;
}


// EXPORTS //

module.exports = gsort2sh;
