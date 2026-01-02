/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/stats/strided/distances/dcosine_similarity.h"
#include "stdlib/blas/base/ddot.h"
#include "stdlib/blas/base/dnrm2.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the cosine similarity of two double-precision floating-point strided arrays.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         cosine similarity
*/
double API_SUFFIX( stdlib_strided_dcosine_similarity )( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX( stdlib_strided_dcosine_similarity_ndarray )( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the cosine similarity of two double-precision floating-point strided arrays using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         cosine similarity
*/
double API_SUFFIX( stdlib_strided_dcosine_similarity_ndarray )( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	double ynrm;
	double xnrm;
	double dot;

	if ( N <= 0 ) {
		return 0.0 / 0.0;
	}
	dot = c_ddot_ndarray( N, X, strideX, offsetX, Y, strideY, offsetY );
	xnrm = c_dnrm2_ndarray( N, X, strideX, offsetX );
	ynrm = c_dnrm2_ndarray( N, Y, strideY, offsetY );
	return dot / ( xnrm*ynrm );
}
