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

#include "stdlib/blas/base/scasum.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/absf.h"

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param CX        input array
* @param strideX   CX stride length
* @param offsetX   starting index for CX
*/
float API_SUFFIX(c_scasum_ndarray)( const CBLAS_INT N, const void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	float *x = (float *)CX;
	float stemp;
	CBLAS_INT sx;
	CBLAS_INT ix;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return 0.0f;
	}
	stemp = 0.0f;
	sx = strideX * 2;
	ix = offsetX * 2;
	for( i = 0; i < N; i++ ) {
		stemp += stdlib_base_absf( x[ix] ) + stdlib_base_absf( x[ix+1] );
		ix += sx;
	}
	return stemp;
}
