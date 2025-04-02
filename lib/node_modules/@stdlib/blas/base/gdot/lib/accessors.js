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

// VARIABLES //

var M = 5;


// MAIN //

/**
* Computes the dot product of `x` and `y`.
*
* @private
* @param {integer} N - number of indexed elements
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - first array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - second array element accessors
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} dot product
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
*
* var z = gdot( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0 );
* // returns -5.0
*/
function gdot( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var xget;
	var yget;
	var dot;
	var ix;
	var iy;
	var m;
	var i;

	xbuf = x.data;
	ybuf = y.data;
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];

	dot = 0.0;
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += xget( xbuf, ix ) * yget( ybuf, iy );
				ix += 1;
				iy += 1;
			}
		}
		if ( N < M ) {
			return dot;
		}
		for ( i = m; i < N; i += M ) {
			dot += ( xget( xbuf, ix ) * yget( ybuf, iy ) ) + ( xget( xbuf, ix+1 ) * yget( ybuf, iy+1 ) ) + ( xget( xbuf, ix+2 ) * yget( ybuf, iy+2 ) ) + ( xget( xbuf, ix+3 ) * yget( ybuf, iy+3 ) ) + ( xget( xbuf, ix+4 ) * yget( ybuf, iy+4 ) ); // eslint-disable-line max-len
			ix += M;
			iy += M;
		}
		return dot;
	}
	for ( i = 0; i < N; i++ ) {
		dot += xget( xbuf, ix ) * yget( ybuf, iy );
		ix += strideX;
		iy += strideY;
	}
	return dot;
}


// EXPORTS //

module.exports = gdot;
