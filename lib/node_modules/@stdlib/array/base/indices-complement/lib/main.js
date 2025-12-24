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
* Returns the complement of a list of array indices.
*
* @param {NonNegativeInteger} N - array length
* @param {NonNegativeIntegerArray} indices - list of indices
* @returns {NonNegativeIntegerArray} indices complement
*
* @example
* var idx = indicesComplement( 5, [ 1, 2 ] );
* // returns [ 0, 3, 4 ]
*/
function indicesComplement( N, indices ) {
	var hash;
	var out;
	var i;

	hash = {};
	for ( i = 0; i < indices.length; i++ ) {
		hash[ indices[ i ] ] = true;
	}
	out = [];
	for ( i = 0; i < N; i++ ) {
		if ( hash[ i ] === void 0 ) {
			out.push( i );
		}
	}
	return out;
}


// EXPORTS //

module.exports = indicesComplement;
