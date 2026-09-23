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
var max = require( '@stdlib/math/base/special/fast/max' );
var zeros = require( '@stdlib/array/base/zeros' );
var assign = require( './assign.js' );


// MAIN //

/**
* Flattens a shape to a specified depth.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} depth - maximum depth to flatten
* @returns {NonNegativeIntegerArray} flattened shape
*
* @example
* var sh = flattenShape( [ 3, 2 ], 1 );
* // returns [ 6 ]
*
* sh = flattenShape( [ 3, 2, 1 ], 1 );
* // returns [ 6, 1 ]
*
* sh = flattenShape( [ 3 ], 0 );
* // returns [ 3 ]
*
* sh = flattenShape( [ 3, 2 ], 0 );
* // returns [ 3, 2 ]
*
* sh = flattenShape( [ 3 ], 1 );
* // returns [ 3 ]
*
* sh = flattenShape( [], 1 );
* // returns []
*/
function flattenShape( shape, depth ) {
	var ndims = shape.length;
	var out = zeros( ndims-max( min( ndims-1, depth ), 0 ) );
	assign( shape, depth, out );
	return out;
}


// EXPORTS //

module.exports = flattenShape;
