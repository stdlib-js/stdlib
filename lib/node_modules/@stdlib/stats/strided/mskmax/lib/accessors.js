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
* Computes the maximum value of a strided array according to a mask.
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
* @returns {Object} output maximum value
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var mask = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ];
*
* var v = mskmax( 5, arraylike2object( toAccessorArray( x ) ), 2, 1, arraylike2object( toAccessorArray( mask ) ), 2, 1 );
* // returns 4.0
*/
function mskmax( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var xbuf;
	var mbuf;
	var xget;
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

	if ( N <= 0 ) {
		return NaN;
	}
	ix = offsetX;
	im = offsetMask;
	for ( i = 0; i < N; i++ ) {
		if ( mget( mbuf, im ) === 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i === N ) {
		return NaN;
	}
	max = xget( xbuf, ix );
	if ( isnan( max ) ) {
		return max;
	}
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mget( mbuf, im ) ) {
			continue;
		}
		v = xget( xbuf, ix );
		if ( isnan( v ) ) {
			return v;
		}
		if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = mskmax;
