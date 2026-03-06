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

var zeroTo = require( '@stdlib/array/base/zero-to' );
var copy = require( '@stdlib/array/base/copy-indexed' );
var take = require( '@stdlib/array/base/take-indexed' );
var sort2ins = require( './sort2ins.js' );


// MAIN //

/**
* Reorders ndarray dimensions and associated strides for loop interchange.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **sh**: dimensions sorted in loop order.
*     -   **sx**: ndarray strides sorted in loop order.
*     -   **idx**: dimension indices sorted in loop order.
*
* @param {NonNegativeIntegerArray} sh - array dimensions
* @param {IntegerArray} sx - array stride lengths
* @returns {Object} loop interchange data
*
* @example
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
*
* var o = loopOrder( sh, sx );
* // returns {...}
*
* var ssh = o.sh;
* // returns [ 4, 3, 2 ]
*
* var ssx = o.sx;
* // returns [ 1, 4, 12 ]
*
* var idx = o.idx;
* // returns [ 2, 1, 0 ]
*/
function loopOrder( sh, sx ) {
	var idx;

	// Initialize a loop interchange index array for generating a loop order permutation:
	idx = zeroTo( sh.length );

	// Sort the array strides in increasing order (of magnitude):
	sx = copy( sx );
	sort2ins( sx, idx );

	// Permute the shape based on the sorted array strides:
	sh = take( sh, idx );

	return {
		'sh': sh,
		'sx': sx,
		'idx': idx
	};
}


// EXPORTS //

module.exports = loopOrder;
