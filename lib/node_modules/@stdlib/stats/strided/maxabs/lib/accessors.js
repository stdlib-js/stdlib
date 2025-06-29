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
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the maximum absolute value of a strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} maximum absolute value
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = maxabs( 4, arraylike2object( x ), 2, 1 );
* // returns 4.0
*/
function maxabs( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var max;
	var ix;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		return abs( get( xbuf, offsetX ) );
	}
	ix = offsetX;
	max = abs( get( xbuf, ix ) );
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		v = abs( get( xbuf, ix ) );
		if ( isnan( v ) ) {
			return v;
		}
		if ( v > max ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = maxabs;
