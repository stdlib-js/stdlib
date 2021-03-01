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
* Returns an evenly spaced array of `n` values from `0` until `n-1`.
*
* @private
* @param {NonNegativeInteger} n - number of values
* @returns {NonNegativeIntegerArray} output array
*
* @example
* var arr = range( 5 );
* // returns [ 0, 1, 2, 3, 4 ]
*/
function range( n ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < n; i++ ) {
		out.push( i );
	}
	return out;
}


// EXPORTS //

module.exports = range;
