/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/stats/base/scumaxabs.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the cumulative maximum absolute value of single-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void API_SUFFIX(stdlib_strided_scumaxabs)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_scumaxabs_ndarray)( N, X, strideX, ox, Y, strideY, oy );
	return;
}

/**
* Computes the cumulative maximum absolute value of single-precision floating-point strided array elements using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        output array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
*/
void API_SUFFIX(stdlib_strided_scumaxabs_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	float max;
	float v;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	max = stdlib_base_absf( X[ ix ] );
	Y[ iy ] = max;

	iy += strideY;
	i = 1;
	if ( !stdlib_base_is_nanf( max ) ) {
		for (; i < N; i++ ) {
			ix += strideX;
			v = stdlib_base_absf( X[ ix ] );
			if ( stdlib_base_is_nanf( v ) ) {
				max = v;
				break;
			}
			if ( v > max ) {
				max = v;
			}
			Y[ iy ] = max;
			iy += strideY;
		}
	}
	if ( stdlib_base_is_nanf( max ) ) {
		for (; i < N; i++ ) {
			Y[ iy ] = max;
			iy += strideY;
		}
	}
	return;
}
