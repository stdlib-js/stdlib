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

#include "stdlib/blas/ext/base/dssumors.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dssumors)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dssumors_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and alternative indexing semantics and returning an extended precision result.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dssumors_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT m;
	CBLAS_INT i;
	double sum;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		return N * X[ ix ];
	}
	// If the stride is equal to `1`, use unrolled loops...
	if ( strideX == 1 ) {
		m = N % 6;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += (double)X[ i ];
			}
		}
		if ( N < 6 ) {
			return sum;
		}
		for ( i = m; i < N; i += 6 ) {
			sum += (double)X[i] + (double)X[i+1] + (double)X[i+2] + (double)X[i+3] + (double)X[i+4] + (double)X[i+5];
		}
		return sum;
	}

	for ( i = 0; i < N; i++ ) {
		sum += (double)X[ ix ];
		ix += strideX;
	}
	return sum;
}
