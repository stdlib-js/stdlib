/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Wraps an index on the interval `[0,max]`.
*
* @param {integer} idx - index
* @param {NonNegativeInteger} max - maximum index
* @returns {NonNegativeInteger} index
*
* @example
* var idx = wrapIndex( -1, 10 );
* // returns 10
*
* idx = wrapIndex( 13, 10 );
* // returns 2
*
* idx = wrapIndex( 6, 10 );
* // returns 6
*/
function wrapIndex( idx, max ) {
	var mp1 = max + 1;
	if ( idx < 0 ) {
		idx += mp1; // slight optimization to avoid modulo arithmetic when |idx| <= max+1
		if ( idx < 0 ) {
			idx %= mp1;
			if ( idx !== 0 ) {
				idx += mp1;
			}
		}
		return idx;
	}
	if ( idx > max ) {
		idx -= mp1; // slight optimization to avoid modulo arithmetic when max+1 < idx <= 2*(max+1)
		if ( idx > max ) {
			idx %= mp1;
		}
		return idx;
	}
	return idx;
}


// EXPORTS //

module.exports = wrapIndex;
