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

#include "stdlib/blas/ext/base/dnanasumors.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanasumors)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnanasumors_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation and alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
double API_SUFFIX(stdlib_strided_dnanasumors_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	double sum;
	CBLAS_INT ix;
	CBLAS_INT i;
	double v;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX == 0 ) {
		if ( stdlib_base_is_nan( X[ ix ] ) ) {
			return 0.0;
		}
		return stdlib_base_abs( X[ ix ] ) * N;
	}
	sum = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( !stdlib_base_is_nan( v ) ) {
			sum += stdlib_base_abs( v );
		}
		ix += strideX;
	}
	return sum;
}
