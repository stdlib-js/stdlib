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

var floor = require( '@stdlib/math/base/special/floor' );
var RE_END_MINUS = require( './re_end_minus.js' );
var RE_END_DIVIDE = require( './re_end_divide.js' );


// MAIN //

/**
* Resolves an "end" index.
*
* ## Notes
*
* -   The function returns `-1` if provided an invalid character sequence.
* -   The function returns `-2` if the resolved end index is out-of-bounds.
*
* @private
* @param {string} v - character sequence containing the "end" keyword
* @param {NonNegativeInteger} len - maximum number of elements allowed in the slice
* @param {boolean} decrement - boolean indicating whether a subsequence has a negative decrement
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {NonNegativeInteger} end index (exclusive)
*
* @example
* var idx = resolveEnd( 'end', 10, false, false );
* // returns 10
*
* idx = resolveEnd( 'end', 10, true, false );
* // returns 10
*
* @example
* var idx = resolveEnd( 'end-1', 10, false, false );
* // returns 9
*
* idx = resolveEnd( 'end-1', 10, true, false );
* // returns 9
*
* @example
* var idx = resolveEnd( 'end-2', 10, false, false );
* // returns 8
*
* idx = resolveEnd( 'end-2', 10, true, false );
* // returns 8
*
* @example
* var idx = resolveEnd( 'end/2', 10, false, false );
* // returns 5
*
* idx = resolveEnd( 'end/2', 10, true, false );
* // returns 4
*
* @example
* var idx = resolveEnd( 'end/2', 11, false, false );
* // returns 5
*
* idx = resolveEnd( 'end/2', 11, true, false );
* // returns 5
*
* @example
* var idx = resolveEnd( 'end/3', 10, false, false );
* // returns 3
*
* idx = resolveEnd( 'end/3', 10, true, false );
* // returns 3
*
* @example
* var idx = resolveEnd( 'end/3', 11, false, false );
* // returns 3
*
* idx = resolveEnd( 'end/3', 11, true, false );
* // returns 3
*
* @example
* var idx = resolveEnd( 'end/4', 10, false, false );
* // returns 2
*
* idx = resolveEnd( 'end/4', 10, true, false );
* // returns 2
*
* @example
* var idx = resolveEnd( 'end/4', 11, false, false );
* // returns 2
*
* idx = resolveEnd( 'end/4', 11, true, false );
* // returns 2
*
* @example
* var idx = resolveEnd( 'end/5', 10, false, false );
* // returns 2
*
* idx = resolveEnd( 'end/5', 10, true, false );
* // returns 1
*
* @example
* var idx = resolveEnd( 'end/5', 11, false, false );
* // returns 2
*
* idx = resolveEnd( 'end/5', 11, true, false );
* // returns 2
*
* @example
* var idx = resolveEnd( 'end-20', 10, false, false );
* // returns 0
*
* idx = resolveEnd( 'end-20', 10, true, false );
* // returns 0
*
* idx = resolveEnd( 'end-20', 10, true, true );
* // returns -2
*
* @example
* var idx = resolveEnd( 'end*2', 10, false, false );
* // returns -1
*
* idx = resolveEnd( 'end*2', 10, true, false );
* // returns -1
*
* @example
* var idx = resolveEnd( 'end+1', 10, false, false );
* // returns -1
*
* idx = resolveEnd( 'end+1', 10, true, false );
* // returns -1
*
* @example
* var idx = resolveEnd( 'end/0.5', 10, false, false );
* // returns -1
*
* idx = resolveEnd( 'end/0.5', 10, true, false );
* // returns -1
*
* idx = resolveEnd( 'end/0.5', 10, true, true );
* // returns -2
*/
function resolveEnd( v, len, decrement, strict ) {
	var tmp;

	// Check for the simple case where "end" refers to the last index (exclusive)...
	if ( v === 'end' ) {
		return len;
	}
	// Check for a subtraction operation (e.g., `end-2`)...
	tmp = v.match( RE_END_MINUS );
	if ( tmp ) {
		v = len - parseInt( tmp[ 1 ], 10 );

		// If the computed index exceeds the index bounds, clamp to the first index...
		if ( v < 0 ) {
			if ( strict ) {
				return -2; // return out-of-bounds error code
			}
			v = 0;
		}
		return v;
	}
	// Check for a division operation (e.g., `end/2`)...
	tmp = v.match( RE_END_DIVIDE );
	if ( tmp ) {
		v = parseFloat( tmp[ 1 ] );
		if ( v < 1.0 ) {
			return ( strict ) ? -2 : -1; // if `end/x > end`, then need to return out-of-bounds error code
		}
		// Handle division differently for increasing and decreasing increments in order to preserve the `:n + n: = :` identity and to satisfy user expectation that symmetry be maintained. The main issue being that, e.g., given a length 10 subsequence, `end/2` will yield `5`. Hence, `:end/2 + end/2: = :5 + :5 = :` (i.e., the first five elements (0,1,2,3,4) and the second five elements (5,6,7,8,9)); however, if increasing and decreasing are treated the same, `:end/2:-1 + end/2::-1 = :5:-1 + 5::-1 = :`, but the elements are not the same (i.e., the first elements (9,8,7,6) and the second elements (5,4,3,2,1)), due to the non-inclusive aspect of `j` in `i:j:k`. The slight adjustment (`len-1`) yields `:4:-1 + 4::-1 = :` and the slices (9,8,7,6,5) and (4,3,2,1,0), which better matches user expectation. For a length 11 subsequence, we get (0,1,2,3,4) and (5,6,7,8,9,10) for an increasing increment and (10,9,8,7,6) and (5,4,3,2,1,0), which seems fine given asymmetry in both cases.
		if ( decrement && len > 0 && v !== 1.0 ) { // note: avoid violating `end/1 = end` identity
			return floor( (len-1) / v );
		}
		return floor( len / v );
	}
	// The use of "end" includes invalid/unsupported operations...
	return -1;
}


// EXPORTS //

module.exports = resolveEnd;
