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
* Flattens a shape starting from a specified dimension and assigns results to a provided output array.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {integer} dim - dimension to start flattening from
* @param {Collection} out - output object
* @returns {Collection} array shape
*
* @example
* var sh = [ 0, 0 ];
*
* var out = flattenShapeFrom( [ 3, 3, 2 ], 1, sh );
* // returns [ 3, 6 ]
*
* var bool = ( out === sh );
* // returns true
*
* @example
* var sh = [ 0, 0 ];
*
* var out = flattenShapeFrom( [ 3, 3, 2 ], -2, sh );
* // returns [ 3, 6 ]
*
* var bool = ( out === sh );
* // returns true
*/
function flattenShapeFrom( shape, dim, out ) {
	var ndims;
	var s;
	var i;
	var j;

	ndims = shape.length;

	// Normalize the dimension index...
	if ( dim < 0 ) {
		dim += ndims;
		if ( dim < 0 ) {
			dim = 0;
		}
	}
	s = 1;
	j = 0;
	for ( i = 0; i < ndims; i++ ) { // e.g., shape=[2,3,4,5], dim=2 => shape=[2,3,20]
		if ( i >= dim ) {
			s *= shape[ i ];
			if ( i === ndims-1 ) {
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

module.exports = flattenShapeFrom;
