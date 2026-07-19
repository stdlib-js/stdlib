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


// MAIN //

/**
* Computes the range of a strided array according to a mask, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array element
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} mask - mask array object
* @param {Collection} mask.data - mask array element
* @param {Array<Function>} mask.accessors - mask array element accessors
* @param {integer} strideMask - stride length `mask`
* @param {NonNegativeInteger} offsetMask - starting index `mask`
* @returns {number} range
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var mask = toAccessorArray( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = nanmskrange( 5, arraylike2object( x ), 2, 1, arraylike2object( mask ), 2, 1 );
* // returns 6.0
*/
function nanmskrange( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var xbuf;
	var mbuf;
	var mget;
	var xget;
	var max;
	var min;
	var ix;
	var im;
	var v;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	mbuf = mask.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	mget = mask.accessors[ 0 ];

	ix = offsetX;
	im = offsetMask;
	for ( i = 0; i < N; i++ ) {
		v = xget( xbuf, ix );
		if ( v === v && mget( mbuf, im ) === 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i === N ) {
		return NaN;
	}
	min = v;
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mget( mbuf, im ) ) {
			continue;
		}
		v = xget( xbuf, ix );
		if ( isnan( v ) ) {
			continue;
		}
		if ( v < min ) {
			min = v;
		} else if ( v > max ) {
			max = v;
		}
	}
	return max - min;
}


// EXPORTS //

module.exports = nanmskrange;
