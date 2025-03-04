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
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @private
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar
* @param {Float32Array} x - input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
* // A => <Float32Array>[ 2.0, 4.0, 6.0, 0.0, 5.0, 8.0, 0.0, 0.0, 10.0 ]
*/
function ssyr( uplo, N, alpha, x, strideX, offsetX, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len
	var isrm;
	var tmp;
	var ix0;
	var ix1;
	var sa0;
	var sa1;
	var i0;
	var i1;
	var oa;
	var ox;

	isrm = isRowMajor( [ strideA1, strideA2 ] );
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
		( isrm && uplo === 'lower' ) ||
		( !isrm && uplo === 'upper' )
	) {
		ix1 = ox;
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( x[ ix1 ] !== 0.0 ) {
				tmp = f32( alpha * x[ ix1 ] );
				oa = offsetA + (sa1*i1);
				ix0 = ox;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					A[ oa+(sa0*i0) ] += f32( x[ ix0 ] * tmp );
					ix0 += strideX;
				}
			}
			ix1 += strideX;
		}
		return A;
	}
	// ( isrm && uplo === 'upper' ) || ( !isrm && uplo === 'lower' )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( x[ ix1 ] !== 0.0 ) {
			tmp = f32( alpha * x[ ix1 ] );
			oa = offsetA + (sa1*i1);
			ix0 = ix1;
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ oa+(sa0*i0) ] += f32( x[ ix0 ] * tmp );
				ix0 += strideX;
			}
		}
		ix1 += strideX;
	}
	return A;
}


// EXPORTS //

module.exports = ssyr;
