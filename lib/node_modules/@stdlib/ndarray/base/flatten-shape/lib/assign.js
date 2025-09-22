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

// MODULES //

var min = require( '@stdlib/math/base/special/fast/min' );


// MAIN //

/**
* Flattens a shape to a specified depth and assigns results to a provided output array.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} depth - maximum depth to flatten
* @param {(Array|TypedArray|Object)} out - output object
* @returns {(Array|TypedArray|Object)} array shape
*
* @example
* var sh = [ 0, 0 ];
*
* var out = flattenShape( [ 3, 2 ], 1, sh );
* // returns [ 6 ]
*
* var bool = ( out === sh );
* // returns true
*/
function flattenShape( shape, depth, out ) {
	var ndims;
	var d;
	var s;
	var i;
	var j;

	ndims = shape.length;
	d = min( ndims-1, depth );
	s = 1;
	j = 0;
	for ( i = 0; i < ndims; i++ ) { // e.g., shape=[2,3,4,5], depth=2 => shape=[24,5]
		if ( i <= d ) {
			s *= shape[ i ];
			if ( i === d ) {
				out[ j ] = s;
				j += 1;
			}
		} else {
			out[ j ] = shape[ i ];
			j += 1;
		}
	}
	return out;
}


// EXPORTS //

module.exports = flattenShape;
