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
* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @returns {NonNegativeInteger} offset - offset
*
* @example
* var shape = [ 2, 3, 10 ];
* var strides = [ 30, -10, 1 ];
*
* var offset = strides2offset( shape, strides );
* // returns 20
*/
function strides2offset( shape, strides ) {
	var offset;
	var ndims;
	var i;

	ndims = shape.length;
	offset = 0;
	for ( i = 0; i < ndims; i++ ) {
		if ( strides[ i ] < 0 ) {
			// Note that, since the stride is negative, this operation increments, not decrements, the offset...
			offset -= strides[ i ] * ( shape[ i ]-1 );
		}
	}
	return offset;
}


// EXPORTS //

module.exports = strides2offset;
