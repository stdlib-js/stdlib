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
* Computes the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gnansumors( 4, arraylike2object( x ), 2, 1 );
* // returns 5.0
*/
function gnansumors( N, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var sum;
	var ix;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];

	ix = offsetX;
	if ( strideX === 0 ) {
		v = xget( xbuf, ix );
		if ( isnan( v ) ) {
			return 0.0;
		}
		return N * v;
	}
	sum = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = xget( xbuf, ix );
		if ( isnan( v ) === false ) {
			sum += v;
		}
		ix += strideX;
	}
	return sum;
}


// EXPORTS //

module.exports = gnansumors;
