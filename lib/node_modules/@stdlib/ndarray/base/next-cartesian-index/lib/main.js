/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var zeros = require( '@stdlib/array/base/zeros' );
var assign = require( './assign.js' );


// MAIN //

/**
* Returns the next Cartesian index (i.e., set of subscripts/dimension indices).
*
* ## Notes
*
* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - index iteration order
* @param {NonNegativeIntegerArray} idx - current dimension indices
* @param {integer} dim - index of the dimension from which to start incrementing (inclusive)
* @returns {(NonNegativeIntegerArray|null)} updated dimension indices
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], 0 );
* // returns [ 3 ]
*
* @example
* var shape = [ 2, 2, 2 ];
*
* var idx = nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1 );
* // returns [ 0, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 0, 1, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 1 ]
*
* @example
* var shape = [];
* var idx = nextCartesianIndex( shape, 'row-major', [], 0 );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], -10 );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'column-major', [ 2 ], 10 );
* // returns null
*/
function nextCartesianIndex( shape, order, idx, dim ) {
	return assign( shape, order, idx, dim, zeros( shape.length ) );
}


// EXPORTS //

module.exports = nextCartesianIndex;
