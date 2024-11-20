/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );


// MAIN //

/**
* Determines if an array is contiguous.
*
* @private
* @param {NonNegativeInteger} len - array length
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @param {integer} iterationOrder - iteration order
* @returns {boolean} boolean indicating if an array is contiguous
*/
function isContiguous( len, shape, strides, offset, iterationOrder ) {
	var buf;

	// If an array does not contain any elements, then no data to store, and, if the array is unordered, adjacent array elements are not guaranteed to be stored next to each other.
	if ( len === 0 || iterationOrder === 0 ) {
		return false;
	}
	// Ensure that the array is compatible with a single memory segment:
	buf = minmaxViewBufferIndex( shape, strides, offset );
	return ( len === ( buf[1]-buf[0]+1 ) );
}


// EXPORTS //

module.exports = isContiguous;
