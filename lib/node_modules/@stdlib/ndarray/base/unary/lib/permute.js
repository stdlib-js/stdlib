/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a permutation of an input array according to a provided index array.
*
* @private
* @param {Collection} x - input array
* @param {NonNegativeIntegerArray} idx - permutation indices
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var idx = [ 3, 1, 2, 0 ];
*
* var y = permute( x, idx );
* // returns [ 4, 2, 3, 1 ]
*/
function permute( x, idx ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < x.length; i++ ) {
		out.push( x[ idx[ i ] ] );
	}
	return out;
}


// EXPORTS //

module.exports = permute;
