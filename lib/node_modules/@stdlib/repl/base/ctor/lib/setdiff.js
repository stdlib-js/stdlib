/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// VARIABLES //

var TYPE_SORT_ORDER = {
	'number': 0,
	'string': 1,
	'symbol': 2
};


// MAIN //

/**
* Returns the set difference between two similarly **sorted** lists.
*
* ## Notes
*
* -   The contents of the provided arrays are assumed to be either numbers, strings, or symbols.
*
* -   The lists are **expected** to be sorted not only, e.g., lexicographically, but also according to type in the **following** order: `numbers`, `strings`, and then `symbols`.
*
*     ```text
*     A = [ 1, 2, 3, '1', '2', '3', Symbol('1'), Symbol('2'), Symbol('3') ]
*     B = [ 1, 2, '1', '3', Symbol('2'), Symbol('3') ]
*     // => [ 3, '2', Symbol('1') ]
*     ```
*
* @private
* @param {Array} A - first sorted list
* @param {Array} B - second sorted list
* @returns {Array} set difference
*
* @example
* var out = setdiff( [ 1, 2, 3 ], [ 2, 4, 5 ] );
* // returns [ 1, 3, 4, 5 ]
*
* @example
* var out = setdiff( [ 1 ], [ 2, 4, 5 ] );
* // returns [ 1, 2, 4, 5 ]
*
* @example
* var out = setdiff( [ 1, 2, 3 ], [ 2 ] );
* // returns [ 1, 3 ]
*
* @example
* var out = setdiff( [ 1, 2, 3 ], [] );
* // returns [ 1, 2, 3 ]
*
* @example
* var out = setdiff( [], [ 2, 4, 5 ] );
* // returns [ 2, 4, 5 ]
*
* @example
* var out = setdiff( [ 1, 2, 3 ], [ 1, 2, 3 ] );
* // returns []
*
* @example
* var out = setdiff( [], [] );
* // returns []
*
* @example
* var out = setdiff( [ 1 ], [ 1 ] );
* // returns []
*
* @example
* var out = setdiff( [ 1, 2, 2, 3, 3 ], [ 2, 4, 5, 5 ] );
* // returns [ 1, 2, 3, 3, 4, 5, 5 ]
*
* @example
* var out = setdiff( [ 1, 2, 3 ], [ 4, 5 ] );
* // returns [ 1, 2, 3, 4, 5 ]
*
* @example
* var out = setdiff( [ 1, 2 ], [ 3, 4, 5 ] );
* // returns [ 1, 2, 3, 4, 5 ]
*
* @example
* var out = setdiff( [ 1, 2, 3, 7 ], [ 0, 1, 2, 4, 5 ] );
* // returns [ 0, 3, 4, 5, 7 ]
*
* @example
* var out = setdiff( [ 1, 2, 3, 7, 9 ], [ -2, -1, 0, 1, 2, 4, 5 ] );
* // returns [ -2, -1, 0, 3, 4, 5, 7, 9 ]
*/
function setdiff( A, B ) {
	var out;
	var la;
	var lb;
	var ta;
	var tb;
	var a;
	var b;
	var i;
	var j;
	var k;

	la = A.length;
	lb = B.length;
	if ( la === 0 ) {
		return B.slice();
	}
	if ( lb === 0 ) {
		return A.slice();
	}
	out = [];
	i = 0;
	j = 0;
	while ( i < la && j < lb ) {
		a = A[ i ];
		b = B[ j ];
		if ( a === b ) { // addresses numbers, strings, and symbols alike
			i += 1;
			j += 1;
			continue;
		}
		ta = typeof a;
		tb = typeof b;
		if ( ta !== tb ) {
			// Note: we assume we have found a "type" border!
			ta = TYPE_SORT_ORDER[ ta ];
			tb = TYPE_SORT_ORDER[ tb ];
			if ( ta < tb ) {
				out.push( a );
				i += 1;
			} else { // tb < ta
				out.push( b );
				j += 1;
			}
		}
		// Note: the types for `a` and `b` are the *same*!
		else if ( ta === 'symbol' ) {
			// Note: symbols don't have a "natural" sort order, so we need to do things in a more computationally intensive way via linear scans...
			while ( i < la ) {
				for ( k = j+1; k < lb; k++ ) { // `j+1` because we already know the symbols are not equal
					if ( a === B[ k ] ) {
						break;
					}
				}
				// If we searched through all the symbols in `B` and failed to find a match, we found a unique symbol...
				if ( k === lb ) {
					out.push( a );
				} else {
					// We can leverage the fact that symbols in `A` and `B` should be similarly sorted by recognizing that, if we found a match, this means that the symbols in `B` preceding the match should be unique...
					for ( ; j < k; j++ ) {
						out.push( B[ j ] );
					}
				}
				i += 1;
			}
		} else if ( a < b ) {
			out.push( a );
			i += 1;
		} else { // b < a
			out.push( b );
			j += 1;
		}
	}
	if ( i < la ) {
		for ( ; i < la; i++ ) {
			out.push( A[ i ] );
		}
	}
	if ( j < lb ) {
		for ( ; j < lb; j++ ) {
			out.push( B[ j ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = setdiff;
