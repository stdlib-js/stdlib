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

#include "stdlib/blas/base/sscal.h"
#include "stdlib/blas/base/sscal_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Multiplies a single-precision floating-point vector `X` by a constant.
*
* @param N       number of indexed elements
* @param alpha   scalar
* @param X       input array
* @param stride  index increment
*/
void API_SUFFIX(c_sscal)( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT stride ) {
	CBLAS_INT sx = stride;
	if ( sx < 0 ) {
		sx = -sx;
	}
	API_SUFFIX(cblas_sscal)( N, alpha, X, sx );
}

/**
* Multiplies a single-precision floating-point vector `X` by a constant using alternative indexing semantics.
*
* @param N       number of indexed elements
* @param alpha   scalar
* @param X       input array
* @param stride  index increment
* @param offset  starting index
*/
void API_SUFFIX(c_sscal_ndarray)( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT stride, const CBLAS_INT offset ) {
	CBLAS_INT sx = stride;
	X += stdlib_strided_min_view_buffer_index( N, stride, offset ); // adjust array pointer
	if ( sx < 0 ) {
		sx = -sx;
	}
	API_SUFFIX(cblas_sscal)( N, alpha, X, sx );
}
