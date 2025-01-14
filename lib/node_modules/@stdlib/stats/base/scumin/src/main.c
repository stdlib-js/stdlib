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

#include "stdlib/stats/base/scumin.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the cumulative minimum of single-precision floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void API_SUFFIX(stdlib_strided_scumin)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	API_SUFFIX(stdlib_strided_scumin_ndarray)( N, X, strideX, ox, Y, strideY, oy );
	return;
}

/**
* Computes the cumulative minimum of single-precision floating-point strided array elements using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        output array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
*/
void API_SUFFIX(stdlib_strided_scumin_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;
	float min;
	float v;

	if ( N <= 0 ) {
		return;
	}
	ix = offsetX;
	iy = offsetY;
	min = X[ ix ];
	Y[ iy ] = min;

	iy += strideY;
	i = 1;
	if ( !stdlib_base_is_nanf( min ) ) {
		for (; i < N; i++ ) {
			ix += strideX;
			v = X[ ix ];
			if ( stdlib_base_is_nanf( v ) ) {
				min = v;
				break;
			}
			if ( v < min || ( v == min && stdlib_base_is_negative_zerof( v ) ) ) {
				min = v;
			}
			Y[ iy ] = min;
			iy += strideY;
		}
	}
	if ( stdlib_base_is_nanf( min ) ) {
		for (; i < N; i++ ) {
			Y[ iy ] = min;
			iy += strideY;
		}
	}
	return;
}
