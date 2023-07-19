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

var minmax = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );


// MAIN //

/**
* Returns a boolean indicating if a buffer length is compatible with provided ndarray meta data.
*
* @param {NonNegativeInteger} len - buffer length
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @returns {boolean} boolean indicating if a buffer length is compatible
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns true
*
* @example
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns false
*/
function isBufferLengthCompatible( len, shape, strides, offset ) {
	// Determine the minimum and maximum linear indices which are accessible by the array view:
	var buf = minmax( shape, strides, offset );

	// If the indices are "inbounds", then the buffer length is compatible:
	return ( buf[ 0 ] >= 0 && buf[ 1 ] < len );
}


// EXPORTS //

module.exports = isBufferLengthCompatible;
