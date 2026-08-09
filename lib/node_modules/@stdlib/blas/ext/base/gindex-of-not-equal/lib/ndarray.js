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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Returns the first index of an element in a strided array which is not equal to a specified search element using alternative indexing semantics.
*
* ## Notes
*
* -   If all elements are equal to the search element, the function returns `-1`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {*} searchElement - search element
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfNotEqual( x.length, 1.0, x, 1, 0 );
* // returns 2
*/
function gindexOfNotEqual( N, searchElement, x, strideX, offsetX ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return -1;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, searchElement, o, strideX, offsetX );
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] !== searchElement ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = gindexOfNotEqual;
