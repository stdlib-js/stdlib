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
* Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view and assigns results to a provided output array.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - index offset
* @param {(Array|TypedArray|Object)} out - output object
* @returns {(Array|TypedArray|Object)} linear indices
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 10, 1 ];
* var offset = 10;
*
* var out = [ 0, 0 ];
* var idx = minmaxViewBufferIndex( shape, strides, offset, out );
* // returns [ 10, 109 ]
*
* var bool = ( idx === out );
* // returns true
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -10, -1 ];
* var offset = 99;
*
* var out = [ 0, 0 ];
* var idx = minmaxViewBufferIndex( shape, strides, offset, out );
* // returns [ 0, 99 ]
*
* var bool = ( idx === out );
* // returns true
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ 1, 10 ];
* var offset = 10;
*
* var out = [ 0, 0 ];
* var idx = minmaxViewBufferIndex( shape, strides, offset, out );
* // returns [ 10, 109 ]
*
* var bool = ( idx === out );
* // returns true
*
* @example
* var shape = [ 10, 10 ];
* var strides = [ -1, -10 ];
* var offset = 99;
*
* var out = [ 0, 0 ];
* var idx = minmaxViewBufferIndex( shape, strides, offset, out );
* // returns [ 0, 99 ]
*
* var bool = ( idx === out );
* // returns true
*/
function minmaxViewBufferIndex( shape, strides, offset, out ) {
	var ndims;
	var min;
	var max;
	var s;
	var i;

	ndims = shape.length;
	min = offset;
	max = offset;
	for ( i = 0; i < ndims; i++ ) {
		if ( shape[ i ] === 0 ) {
			out[ 0 ] = offset;
			out[ 1 ] = offset;
			return out;
		}
		s = strides[ i ];
		if ( s > 0 ) {
			max += s * ( shape[i]-1 );
		} else if ( s < 0 ) {
			min += s * ( shape[i]-1 ); // decrements min
		}
	}
	out[ 0 ] = min;
	out[ 1 ] = max;
	return out;
}


// EXPORTS //

module.exports = minmaxViewBufferIndex;
