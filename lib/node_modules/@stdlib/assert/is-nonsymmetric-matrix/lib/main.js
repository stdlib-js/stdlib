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

var isMatrixLike = require( '@stdlib/assert/is-matrix-like' );


// MAIN //

/**
* Tests if a value is a non-symmetric matrix.
*
* ## Notes
*
* -   The implementation must rely on manually checking that \\(M_{ij} \neq M_{ji}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
* -   Worst case scenario: O(N^2).
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a non-symmetric matrix
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* var bool = isNonSymmetricMatrix( arr );
* // returns true
*
* bool = isNonSymmetricMatrix( [] );
* // returns false
*/
function isNonSymmetricMatrix( v ) {
	var M;
	var i;
	var j;
	if ( !isMatrixLike( v ) ) {
		return false;
	}
	M = v.shape[ 0 ];
	if ( M !== v.shape[ 1 ] ) {
		return true;
	}
	for ( i = 0; i < M; i++ ) {
		for ( j = 0; j < i; j++ ) {
			if ( v.get( i, j ) !== v.get( j, i ) ) {
				return true;
			}
		}
	}
	return false;
}


// EXPORTS //

module.exports = isNonSymmetricMatrix;
