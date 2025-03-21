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

var numel = require( '@stdlib/ndarray/base/numel' );
var minmax = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );


// MAIN //

/**
* Returns a boolean indicating if an array is compatible with a single memory segment.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @returns {boolean} boolean indicating if an array is compatible with a single memory segment
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isSingleSegmentCompatible( shape, strides, offset );
* // returns true
*
* @example
* var shape = [ 10 ];
* var strides = [ 3 ];
* var offset = 0;
*
* var bool = isSingleSegmentCompatible( shape, strides, offset );
* // returns false
*/
function isSingleSegmentCompatible( shape, strides, offset ) {
	var len;
	var buf;

	// Compute the total number of elements:
	len = numel( shape );
	if ( len === 0 ) {
		return false;
	}
	// Determine the minimum and maximum linear indices which are accessible by the array view:
	buf = minmax( shape, strides, offset );

	return ( len === ( buf[1]-buf[0]+1 ) );
}


// EXPORTS //

module.exports = isSingleSegmentCompatible;
