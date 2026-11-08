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
* Reverses a single-precision floating-point strided array in-place according to a mask and using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - stride length for `mask`
* @param {NonNegativeInteger} offsetMask - starting index for `mask`
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0, 0 ] );
*
* smskrev( x.length, x, 1, 0, mask, 1, 0 );
* // x => <Float32Array>[ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ]
*/
function smskrev( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var right;
	var left;
	var tmp;
	var ix;
	var jx;
	var im;
	var jm;

	if ( N <= 0 ) {
		return x;
	}
	left = 0;
	right = N - 1;
	ix = offsetX;
	jx = offsetX + ( right * strideX );
	im = offsetMask;
	jm = offsetMask + ( right * strideMask );
	while ( left < right ) {
		// Scan to find the next unmasked elements...
		while ( left < right && mask[ im ] !== 0 ) {
			left += 1;
			ix += strideX;
			im += strideMask;
		}
		while ( right > left && mask[ jm ] !== 0 ) {
			right -= 1;
			jx -= strideX;
			jm -= strideMask;
		}
		// Check whether there are any more elements left to reverse...
		if ( left >= right ) {
			break;
		}
		// Swap unmasked elements...
		tmp = x[ ix ];
		x[ ix ] = x[ jx ];
		x[ jx ] = tmp;

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

module.exports = smskrev;
