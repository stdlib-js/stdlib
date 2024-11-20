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
* Normalizes an index to the interval `[0,max]`.
*
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @returns {integer} index
*
* @example
* var idx = normalizeIndex( -2, 10 );
* // returns 9
*
* idx = normalizeIndex( 15, 10 );
* // returns -1
*
* idx = normalizeIndex( 5, 10 );
* // returns 5
*/
function normalizeIndex( idx, max ) {
	if ( idx < 0 ) {
		idx += max + 1;
		if ( idx < 0 ) {
			return -1;
		}
		return idx;
	}
	if ( idx > max ) {
		return -1;
	}
	return idx;
}


// EXPORTS //

module.exports = normalizeIndex;
