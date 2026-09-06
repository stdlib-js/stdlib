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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {NumericArray} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {NumericArray} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxpy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
function gwxpy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
	var ix;
	var iy;
	var iw;
	var ox;
	var oy;
	var ow;
	var m;
	var i;

	if ( N <= 0 ) {
		return w;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	ow = arraylike2object( w );
	if ( ox.accessorProtocol || oy.accessorProtocol || ow.accessorProtocol ) {
		accessors( N, ox, strideX, offsetX, oy, strideY, offsetY, ow, strideW, offsetW ); // eslint-disable-line max-len
		return w;
	}
	ix = offsetX;
	iy = offsetY;
	iw = offsetW;

	// Use loop unrolling if all strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 && strideW === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				w[ iw ] = x[ ix ] + y[ iy ];
				ix += strideX;
				iy += strideY;
				iw += strideW;
			}
		}
		if ( N < M ) {
			return w;
		}
		for ( i = m; i < N; i += M ) {
			w[ iw ] = x[ ix ] + y[ iy ];
			w[ iw+1 ] = x[ ix+1 ] + y[ iy+1 ];
			w[ iw+2 ] = x[ ix+2 ] + y[ iy+2 ];
			w[ iw+3 ] = x[ ix+3 ] + y[ iy+3 ];
			w[ iw+4 ] = x[ ix+4 ] + y[ iy+4 ];
			ix += M;
			iy += M;
			iw += M;
		}
		return w;
	}
	for ( i = 0; i < N; i++ ) {
		w[ iw ] = x[ ix ] + y[ iy ];
		ix += strideX;
		iy += strideY;
		iw += strideW;
	}
	return w;
}


// EXPORTS //

module.exports = gwxpy;
