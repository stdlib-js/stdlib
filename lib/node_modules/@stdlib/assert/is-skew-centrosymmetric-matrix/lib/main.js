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
var floor = require( '@stdlib/math/base/special/floor' );
var isOdd = require( '@stdlib/math/base/assert/is-odd' );


// MAIN //

/**
* Tests if a value is a skew-centrosymmetric matrix.
*
* ## Notes
*
* -   The implementation must rely on manually checking that \\(M_{ij} = -M_{N-i-1,N-j-1}\\), and, while element access is deterministic, no way exists to prevent cache misses outside of reordering the underlying matrix elements, thus incurring a larger performance penalty than just "jumping around" in a single pass.
* -   Worst case scenario: O(N^2).
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a skew-centrosymmetric matrix
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var arr = ndarray( 'generic', [ 2, 1, -1, -2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* var bool = isSkewCentrosymmetricMatrix( arr );
* // returns true
*
* bool = isSkewCentrosymmetricMatrix( [] );
* // returns false
*/
function isSkewCentrosymmetricMatrix( v ) { // eslint-disable-line id-length
	var m1;
	var M;
	var N;
	var n;
	var i;
	var j;
	if ( !isSquareMatrix( v ) ) {
		return false;
	}
	M = v.shape[ 0 ];
	N = floor( M/2.0 ); // corresponds to a row index + 1
	m1 = M - 1;
	for ( i = 0; i < N; i++ ) {
		n = m1 - i;
		for ( j = 0; j < M; j++ ) {
			if ( v.get( i, j ) !== -v.get( n, m1-j ) ) {
				return false;
			}
		}
	}
	if ( isOdd( M ) ) {
		// Only need to examine the first half of the row (including the center element) due to symmetry...
		for ( j = 0; j <= N; j++ ) {
			if ( v.get( i, j ) !== -v.get( N, m1-j ) ) {
				return false;
			}
		}
	}
	return true;
}


// EXPORTS //

module.exports = isSkewCentrosymmetricMatrix;
