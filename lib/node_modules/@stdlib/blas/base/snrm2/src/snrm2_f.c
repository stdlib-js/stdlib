/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/blas/base/snrm2.h"
#include "stdlib/blas/base/snrm2_fortran.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Computes the L2-norm of a single-precision floating-point vector.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float API_SUFFIX(c_snrm2)( const CBLAS_INT N, const float *X, const CBLAS_INT stride ) {
	float nrm2;
	snrm2sub( &N, X, &stride, &nrm2 );
	return nrm2;
}

/**
* Computes the L2-norm of a single-precision floating-point vector using alternative indexing semantics.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @param offset  starting index
* @return        output value
*/
float API_SUFFIX(c_snrm2_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT stride, const CBLAS_INT offset ) {
	float nrm2;
	X += stdlib_strided_min_view_buffer_index( N, stride, offset ); // adjust array pointer
	snrm2sub( &N, X, &stride, &nrm2 );
	return nrm2;
}
