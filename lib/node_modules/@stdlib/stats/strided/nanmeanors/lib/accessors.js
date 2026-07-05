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
* Computes the arithmetic mean of a strided array, ignoring `NaN` values and using ordinary recursive summation.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = nanmeanors( 5, arraylike2object( x ), 2, 1 );
* // returns 1.25
*/
function nanmeanors( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var sum;
	var ix;
	var v;
	var n;
	var i;

	// Cache references to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		return get( xbuf, offsetX );
	}
	ix = offsetX;
	sum = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			sum += v;
			n += 1;
		}
		ix += strideX;
	}
	if ( n === 0 ) {
		return NaN;
	}
	return sum / n;
}


// EXPORTS //

module.exports = nanmeanors;
