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

// MAIN //

/**
* Reverses a strided accessor array in-place according to a mask.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} mask - mask array object
* @param {Collection} mask.data - mask array data
* @param {Array<Function>} mask.accessors - mask element accessors
* @param {integer} strideMask - stride length for `mask`
* @param {NonNegativeInteger} offsetMask - starting index for `mask`
* @returns {Object} input array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
* var mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
*
* gmskrev( 8, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( mask ) ), 1, 0 );
* // x => [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
*/
function gmskrev( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var right;
	var xbuf;
	var mbuf;
	var mget;
	var xget;
	var xset;
	var left;
	var tmp;
	var ix;
	var jx;
	var im;
	var jm;

	xbuf = x.data;
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];
	mbuf = mask.data;
	mget = mask.accessors[ 0 ];

	left = 0;
	right = N - 1;
	ix = offsetX;
	jx = offsetX + ( right * strideX );
	im = offsetMask;
	jm = offsetMask + ( right * strideMask );
	while ( left < right ) {
		// Scan to find the next unmasked elements...
		while ( left < right && mget( mbuf, im ) !== 0 ) {
			left += 1;
			ix += strideX;
			im += strideMask;
		}
		while ( right > left && mget( mbuf, jm ) !== 0 ) {
			right -= 1;
			jx -= strideX;
			jm -= strideMask;
		}
		// Check whether there are any more elements left to reverse...
		if ( left >= right ) {
			break;
		}
		// Swap unmasked elements...
		tmp = xget( xbuf, ix );
		xset( xbuf, ix, xget( xbuf, jx ) );
		xset( xbuf, jx, tmp );

		// Adjust indices to point to the next reversal candidates...
		left += 1;
		ix += strideX;
		im += strideMask;
		right -= 1;
		jx -= strideX;
		jm -= strideMask;
	}
	return x;
}


// EXPORTS //

module.exports = gmskrev;
