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

// MODULES //

var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Returns the index of the first element in a sorted strided array which is greater than a specified search element.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {*} searchElement - search element
* @param {Object} x - sorted input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfGreaterThanSorted( x.length, 2.0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 3
*/
function gindexOfGreaterThanSorted( N, searchElement, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var mid;
	var lo;
	var hi;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessors:
	get = x.accessors[ 0 ];

	lo = 0;
	hi = N;
	while ( lo < hi ) {
		mid = lo + floor( ( hi - lo ) / 2 );
		if ( searchElement < get( xbuf, offsetX + ( mid * strideX ) ) ) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	if ( lo === N ) {
		return -1;
	}
	return lo;
}


// EXPORTS //

module.exports = gindexOfGreaterThanSorted;
