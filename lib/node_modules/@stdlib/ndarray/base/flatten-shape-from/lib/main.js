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
var zeros = require( '@stdlib/array/base/zeros' );
var assign = require( './assign.js' );


// MAIN //

/**
* Flattens a shape starting from a specified dimension.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {integer} dim - dimension to start flattening from
* @returns {NonNegativeIntegerArray} flattened shape
*
* @example
* var sh = flattenShapeFrom( [ 3, 3, 2 ], 1 );
* // returns [ 3, 6 ]
*
* sh = flattenShapeFrom( [ 3, 2, 1 ], 1 );
* // returns [ 3, 2 ]
*
* sh = flattenShapeFrom( [ 3 ], 0 );
* // returns [ 3 ]
*
* sh = flattenShapeFrom( [ 3, 2 ], 0 );
* // returns [ 6 ]
*
* sh = flattenShapeFrom( [], 0 );
* // returns []
*
* @example
* var sh = flattenShapeFrom( [ 3, 3, 2 ], -2 );
* // returns [ 3, 6 ]
*
* sh = flattenShapeFrom( [ 3, 2, 1 ], -2 );
* // returns [ 3, 2 ]
*
* sh = flattenShapeFrom( [ 3 ], -1 );
* // returns [ 3 ]
*
* sh = flattenShapeFrom( [ 3, 2 ], -2 );
* // returns [ 6 ]
*
* sh = flattenShapeFrom( [], -1 );
* // returns []
*/
function flattenShapeFrom( shape, dim ) {
	var ndims;
	var out;
	var d;

	ndims = shape.length;

	// Normalize the dimension index...
	if ( dim < 0 ) {
		dim += ndims;
		if ( dim < 0 ) {
			dim = 0;
		}
	}
	d = min( ndims-1, dim );
	out = zeros( d+1 );
	assign( shape, d, out );
	return out;
}


// EXPORTS //

module.exports = flattenShapeFrom;
