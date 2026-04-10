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

var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the mid-range of a strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - strideX length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} mid-range
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = midrange( 4, arraylike2object( x ), 2, 1 );
* // returns 1.0
*/
function midrange( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var max;
	var min;
	var ix;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		v = get( xbuf, offsetX );
		if ( isnan( v ) ) {
			return NaN;
		}
		return v;
	}
	ix = offsetX;
	min = get( xbuf, ix );
	max = min;
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = get( xbuf, ix );
		if ( isnan( v ) ) {
			return v;
		}
		if ( v < min || ( v === min && isNegativeZero( v ) ) ) {
			min = v;
		} else if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return ( max + min ) / 2.0;
}


// EXPORTS //

module.exports = midrange;
