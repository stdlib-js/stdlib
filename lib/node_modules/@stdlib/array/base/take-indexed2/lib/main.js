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
* Takes elements from two indexed arrays in a single pass.
*
* @param {Collection} x - first input array
* @param {Collection} y - second input array
* @param {NonNegativeIntegerArray} indices - list of indices
* @returns {Array<Array>} output arrays
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var out = take2( x, y, indices );
* // returns [ [ 4, 2, 3, 1 ], [ 8, 6, 7, 5 ] ]
*/
function take2( x, y, indices ) {
	var o1;
	var o2;
	var i;

	o1 = [];
	o2 = [];
	for ( i = 0; i < indices.length; i++ ) {
		o1.push( x[ indices[ i ] ] ); // use `Array#push` to ensure "fast" elements
		o2.push( y[ indices[ i ] ] );
	}
	return [ o1, o2 ];
}


// EXPORTS //

module.exports = take2;
