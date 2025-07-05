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
* Computes the maximum value of a strided array according to a mask, ignoring `NaN` values.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - input array element accessor
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} mask - mask array object
* @param {Collection} mask.data - mask array data
* @param {Array<Function>} mask.accessors - mask array element accessor
* @param {integer} strideMask - stride length for `mask`
* @param {NonNegativeInteger} offsetMask - starting index for `mask`
* @returns {number} maximum value
*
* @example
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var mask = toAccessorArray( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = nanmskmax( 5, arraylike2object( x ), 2, 1, arraylike2object( mask ), 2, 1 );
* // returns 4.0
*/
function nanmskmax( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var xbuf;
	var xget;
	var mbuf;
	var mget;
	var max;
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
	max = v;
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
		if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = nanmskmax;
