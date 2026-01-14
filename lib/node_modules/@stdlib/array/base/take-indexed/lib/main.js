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

// MAIN //

/**
* Takes elements from an indexed array.
*
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} indices - list of indices
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var indices = [ 3, 1, 2, 0 ];
*
* var y = take( x, indices );
* // returns [ 4, 2, 3, 1 ]
*/
function take( x, indices ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < indices.length; i++ ) {
		out.push( x[ indices[ i ] ] ); // use `Array#push` to ensure "fast" elements
	}
	return out;
}


// EXPORTS //

module.exports = take;
