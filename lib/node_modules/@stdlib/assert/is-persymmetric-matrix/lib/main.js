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

// MODULES //

var isSquareMatrix = require( '@stdlib/assert/is-square-matrix' );


// MAIN //

/**
* Tests if a value is a persymmetric matrix.
*
* ## Notes
*
* -   The implementation must rely on manually checking that \\(M_{ij} = M_{N-j-1,N-i-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
* -   Worst case scenario: O(N^2).
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a persymmetric matrix
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 1, 2, 3, 1 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* var bool = isPersymmetricMatrix( arr );
* // returns true
*
* bool = isPersymmetricMatrix( [] );
* // returns false
*/
function isPersymmetricMatrix( v ) {
	var M;
	var n;
	var i;
	var j;
	if ( !isSquareMatrix( v ) ) {
		return false;
	}
	M = v.shape[ 0 ] - 1;
	for ( i = 0; i < M; i++ ) {
		n = M - i;
		for ( j = 0; j < n; j++ ) {
			if ( v.get( i, j ) !== v.get( M-j, n ) ) {
				return false;
			}
		}
	}
	return true;
}


// EXPORTS //

module.exports = isPersymmetricMatrix;
