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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );


// MAIN //

/**
* Computes the cumulative maximum of a strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - output array object
* @param {Collection} y.data - output array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* cumax( 4, arraylike2object( toAccessorArray( x ) ), 2, 1, arraylike2object( toAccessorArray( y ) ), 1, 0 );
* // y => [ 1.0, 1.0, 2.0, 4.0, 0.0, 0.0, 0.0, 0.0 ];
*/
function cumax( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var xget;
	var yset;
	var max;
	var ix;
	var iy;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache a reference to the element accessor:
	xget = x.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	ix = offsetX;
	iy = offsetY;

	max = xget( xbuf, ix );
	yset( ybuf, iy, max );

	iy += strideY;
	i = 1;
	if ( isnan( max ) === false ) {
		for ( i; i < N; i++ ) {
			ix += strideX;
			v = xget( xbuf, ix );
			if ( isnan( v ) ) {
				max = v;
				break;
			}
			if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
				max = v;
			}
			yset( ybuf, iy, max );
			iy += strideY;
		}
	}
	if ( isnan( max ) ) {
		for ( i; i < N; i++ ) {
			yset( ybuf, iy, max );
			iy += strideY;
		}
	}
	return y;
}


// EXPORTS //

module.exports = cumax;
