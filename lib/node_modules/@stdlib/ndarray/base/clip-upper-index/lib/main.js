/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Clips an index to the interval `[-1,max]`.
*
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @returns {integer} index
*
* @example
* var idx = clipUpperIndex( -2, 10 );
* // returns 8
*
* idx = clipUpperIndex( 15, 10 );
* // returns 10
*
* idx = clipUpperIndex( 5, 10 );
* // returns 5
*/
function clipUpperIndex( idx, max ) {
	if ( idx < 0 ) {
		idx += max;
		if ( idx < 0 ) {
			return -1;
		}
		return idx;
	}
	if ( idx > max ) {
		return max;
	}
	return idx;
}


// EXPORTS //

module.exports = clipUpperIndex;
