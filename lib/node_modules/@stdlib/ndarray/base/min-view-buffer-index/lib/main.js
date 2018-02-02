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

// MAIN //

/**
* Computes the minimum linear index in an underlying data buffer accessible to an array view.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @returns {NonNegativeInteger} linear index
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 10, 1 ];
* var offset = 10;
*
* var idx = minViewBufferIndex( shape, strides, offset );
* // returns 10
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -10, -1 ];
* var offset = 109;
*
* var idx = minViewBufferIndex( shape, strides, offset );
* // returns 10
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 1, 10 ];
* var offset = 10;
*
* var idx = minViewBufferIndex( shape, strides, offset );
* // returns 10
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -1, -10 ];
* var offset = 109;
*
* var idx = minViewBufferIndex( shape, strides, offset );
* // returns 10
*/
function minViewBufferIndex( shape, strides, offset ) {
	var ndims;
	var idx;
	var i;

	ndims = shape.length;
	idx = offset;
	for ( i = 0; i < ndims; i++ ) {
		if ( strides[ i ] < 0 ) {
			idx += strides[ i ] * (shape[ i ] - 1); // decrements the index
		}
	}
	return idx;
}


// EXPORTS //

module.exports = minViewBufferIndex;
