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
* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @private
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar
* @param {Float32Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
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
* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr2( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
* // A => <Float32Array>[ 3.0, 6.0, 9.0, 0.0, 9.0, 14.0, 0.0, 0.0, 19.0 ]
*/
function ssyr2( uplo, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len, max-params
	var tmp1;
	var tmp2;
	var isrm;
	var ix0;
	var ix1;
	var iy0;
	var iy1;
	var sa0;
	var sa1;
	var i0;
	var i1;
	var oa;
	var ox;
	var oy;

	isrm = isRowMajor( [ strideA1, strideA2 ] );
	if ( isrm ) { // row-major
		// For row-major matrices, the last dimension has the fastest changing index...
		sa0 = strideA2; // stride for innermost loop
		sa1 = strideA1; // stride for outermost loop
	} else { // column-major
		// For column-major matrices, the first dimension has the fastest changing index...
		sa0 = strideA1; // stride for innermost loop
		sa1 = strideA2; // stride for outermost loop
	}
	ox = offsetX;
	oy = offsetY;
	ix1 = ox;
	iy1 = oy;
	if (
		( isrm && uplo === 'lower' ) ||
		( !isrm && uplo === 'upper' )
	) {
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( ( x[ ix1 ] !== 0.0 ) || ( y[ iy1 ] !== 0.0 ) ) {
				tmp1 = f32( alpha * y[ iy1 ] );
				tmp2 = f32( alpha * x[ ix1 ] );
				oa = offsetA + (sa1*i1);
				ix0 = ox;
				iy0 = oy;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					A[ oa+(sa0*i0) ] += f32( f32( x[ ix0 ] * tmp1 ) + f32( y[ iy0 ] * tmp2 ) ); // eslint-disable-line max-len
					ix0 += strideX;
					iy0 += strideY;
				}
			}
			ix1 += strideX;
			iy1 += strideY;
		}
		return A;
	}
	// ( isrm && uplo === 'upper' ) || ( !isrm && uplo === 'lower' )
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( ( x[ ix1 ] !== 0.0 ) || ( y[ iy1 ] !== 0.0 ) ) {
			tmp1 = f32( alpha * y[ iy1 ] );
			tmp2 = f32( alpha * x[ ix1 ] );
			oa = offsetA + (sa1*i1);
			ix0 = ix1;
			iy0 = iy1;
			for ( i0 = i1; i0 < N; i0++ ) {
				A[ oa+(sa0*i0) ] += f32( f32( x[ ix0 ] * tmp1 ) + f32( y[ iy0 ] * tmp2 ) ); // eslint-disable-line max-len
				ix0 += strideX;
				iy0 += strideY;
			}
		}
		ix1 += strideX;
		iy1 += strideY;
	}
	return A;
}


// EXPORTS //

module.exports = ssyr2;
