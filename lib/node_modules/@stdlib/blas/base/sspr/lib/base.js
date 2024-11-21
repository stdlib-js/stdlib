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

var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @private
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} AP - packed form of a symmetric matrix `A`
* @param {integer} strideAP - `AP` stride length
* @param {NonNegativeInteger} offsetAP - starting index for `AP`
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* sspr( 'row-major', 'upper', 3, 1.0, x, 1, 0, AP, 1, 0 );
* // AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*/
function sspr( order, uplo, N, alpha, x, strideX, offsetX, AP, strideAP, offsetAP ) { // eslint-disable-line max-len
	var tmp;
	var ix0;
	var ix1;
	var iap;
	var i0;
	var i1;
	var kk;
	var ox;

	ox = offsetX;
	kk = offsetAP;
	if (
		( order === 'column-major' && uplo === 'upper' ) ||
		( order === 'row-major' && uplo === 'lower' )
	) {
		ix1 = ox;
		for ( i1 = 0; i1 < N; i1++ ) {
			if ( x[ ix1 ] !== 0.0 ) {
				tmp = f32( alpha * x[ ix1 ] );
				ix0 = ox;
				iap = kk;
				for ( i0 = 0; i0 <= i1; i0++ ) {
					AP[ iap ] += f32( x[ ix0 ] * tmp );
					ix0 += strideX;
					iap += strideAP;
				}
			}
			ix1 += strideX;
			kk += ( i1 + 1 ) * strideAP;
		}
		return AP;
	}
	// ( order === 'column-major' && uplo === 'lower' ) || ( order === 'row-major' && uplo === 'upper' )
	ix1 = ox;
	for ( i1 = 0; i1 < N; i1++ ) {
		if ( x[ ix1 ] !== 0.0 ) {
			tmp = f32( alpha * x[ ix1 ] );
			ix0 = ix1;
			iap = kk;
			for ( i0 = 0; i0 < N - i1; i0++ ) {
				AP[ iap ] += f32( x[ ix0 ] * tmp );
				ix0 += strideX;
				iap += strideAP;
			}
		}
		ix1 += strideX;
		kk += ( N - i1 ) * strideAP;
	}
	return AP;
}


// EXPORTS //

module.exports = sspr;
