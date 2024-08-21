/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );


// MAIN //

/**
* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
*
* @private
* @param {string} uplo - specifies whether `A` is an upper or lower triangular matrix
* @param {string} trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {string} diag - specifies whether `A` has a unit diagonal
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} x - input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {Float64Array} `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dtrmv( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, 1, 0 );
* // x => <Float64Array>[ 14.0, 8.0, 3.0 ]
*/
function dtrmv( uplo, trans, diag, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX ) { // eslint-disable-line max-params, max-len
	var nonunit;
	var isrm;
	var tmp;
	var sa0;
	var sa1;
	var ix0;
	var ix1;
	var i0;
	var i1;
	var oa;
	var ox;

	// Note on variable naming convention: sa#, ix#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	isrm = isRowMajor( [ strideA1, strideA2 ] );
	nonunit = ( diag === 'non-unit' );

	if ( isrm ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		sa0 = strideA2; // stride for innermost loop
		sa1 = strideA1; // stride for outermost loop
	} else { // isColMajor
		// For column-major matrices, the first dimension has the fastest changing index...
		sa0 = strideA1; // stride for innermost loop
		sa1 = strideA2; // stride for outermost loop
	}
	ox = offsetX;

	if (
		( !isrm && trans === 'no-transpose' && uplo === 'upper' ) ||
		( isrm && trans !== 'no-transpose' && uplo === 'lower' )
	) {
		ix1 = ox;
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( x[ ix1 ] !== 0.0 ) {
				tmp = x[ ix1 ];
				oa = offsetA + (sa1*i1);
				ix0 = ox;
				for ( i0 = 0; i0 < i1; i0++ ) {
					x[ ix0 ] += tmp * A[ oa+(sa0*i0) ];
					ix0 += strideX;
				}
				if ( nonunit ) {
					x[ ix1 ] *= A[ oa+(sa0*i1) ];
				}
			}
			ix1 += strideX;
		}
		return x;
	}
	if (
		( !isrm && trans === 'no-transpose' && uplo === 'lower' ) ||
		( isrm && trans !== 'no-transpose' && uplo === 'upper' )
	) {
		ox += ( N - 1 ) * strideX;
		ix1 = ox;
		for ( i1 = N-1; i1 >= 0; i1-- ) {
			if ( x[ ix1 ] !== 0.0 ) {
				tmp = x[ ix1 ];
				oa = offsetA + (sa1*i1);
				ix0 = ox;
				for ( i0 = N-1; i0 > i1; i0-- ) {
					x[ ix0 ] += tmp * A[ oa+(sa0*i0) ];
					ix0 -= strideX;
				}
				if ( nonunit ) {
					x[ ix1 ] *= A[ oa+(sa0*i1) ];
				}
			}
			ix1 -= strideX;
		}
		return x;
	}
	if (
		( !isrm && trans !== 'no-transpose' && uplo === 'upper' ) ||
		( isrm && trans === 'no-transpose' && uplo === 'lower' )
	) {
		ix1 = ox + ( ( N - 1 ) * strideX );
		for ( i1 = N-1; i1 >= 0; i1-- ) {
			tmp = x[ ix1 ];
			oa = offsetA + (sa1*i1);
			ix0 = ix1;
			if ( nonunit ) {
				tmp *= A[ oa+(sa0*i1) ];
			}
			for ( i0 = i1-1; i0 >= 0; i0-- ) {
				ix0 -= strideX;
				tmp += x[ ix0 ] * A[ oa+(sa0*i0) ];
			}
			x[ ix1 ] = tmp;
			ix1 -= strideX;
		}
		return x;
	}
	// ( !isrm && trans !== 'no-transpose' && uplo === 'lower' ) || ( isrm && trans === 'no-transpose' && uplo === 'upper' )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		tmp = x[ ix1 ];
		oa = offsetA + (sa1*i1);
		ix0 = ix1;
		if ( nonunit ) {
			tmp *= A[ oa+(sa0*i1) ];
		}
		for ( i0 = i1+1; i0 < N; i0++ ) {
			ix0 += strideX;
			tmp += x[ ix0 ] * A[ oa+(sa0*i0) ];
		}
		x[ ix1 ] = tmp;
		ix1 += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = dtrmv;
