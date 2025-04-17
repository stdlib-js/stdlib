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

// MAIN //

/**
* Adds a scalar constant to each strided array element and computes the sum using ordinary recursive summation.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gapxsumors( 4, 5.0, arraylike2object( x ), 2, 1 );
* // returns 25.0
*/
function gapxsumors( N, alpha, x, strideX, offsetX ) {
	var xbuf;
	var sum;
	var get;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	ix = offsetX;
	if ( strideX === 0 ) {
		return N * ( alpha + get( xbuf, ix ) );
	}
	sum = 0.0;
	for ( i = 0; i < N; i++ ) {
		sum += alpha + get( xbuf, ix );
		ix += strideX;
	}
	return sum;
}


// EXPORTS //

module.exports = gapxsumors;
