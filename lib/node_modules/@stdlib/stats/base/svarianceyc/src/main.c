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

#include "stdlib/stats/base/svarianceyc.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## Method
*
* -   This implementation uses a one-pass algorithm, as proposed by Youngs and Cramer (1971).
*
* ## References
*
* -   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826](https://doi.org/10.1080/00401706.1971.10488826).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     stride length
* @return            output value
*/
float API_SUFFIX(stdlib_strided_svarianceyc)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX ) {
    CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
    return API_SUFFIX(stdlib_strided_svarianceyc_ndarray)( N, correction, X, strideX, ox );
}


/**
* Computes the variance of a single-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer and alternative indexing semantics.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     stride length
* @param offsetX     starting index of X
* @return            output value
*/
float API_SUFFIX(stdlib_strided_svarianceyc_ndarray)( const CBLAS_INT N, const float correction, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
    CBLAS_INT ix;
    CBLAS_INT i;
    double di;
    float sum;
    double n;
    float S;
    float v;
    float d;

    n = (double)N - (double)correction;
    if ( N <= 0 || n <= 0.0f ) {
        return 0.0f / 0.0f; // NaN
    }
    if ( N == 1 || strideX == 0 ) {
        return 0.0f;
    }
    ix = offsetX;
    sum = X[ ix ];
	ix += strideX;
	S = 0.0f;
	for ( i = 2; i <= N; i++ ) {
		di = (double)i;
		v = X[ ix ];
		sum += v;
		d = (float)(di*(double)v) - sum;
		S += (float)(1.0/(di*(di-1.0))) * d * d;
		ix += strideX;
	}
	return (double)S / n;
}
