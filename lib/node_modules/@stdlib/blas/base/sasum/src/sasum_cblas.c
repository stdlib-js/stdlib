/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

#include "stdlib/blas/base/sasum.h"
#include "stdlib/blas/base/sasum_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Computes the sum of absolute values.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        sum of absolute values
*/
float API_SUFFIX(c_sasum)( const CBLAS_INT N, const float *X, const CBLAS_INT stride ) {
	CBLAS_INT sx = stride;
	if ( sx < 0 ) {
		sx = -sx;
	}
	return API_SUFFIX(cblas_sasum)( N, X, sx );
}

/**
* Computes the sum of absolute values using alternative indexing semantics.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @param offset  starting index
* @return        sum of absolute values
*/
float API_SUFFIX(c_sasum_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT stride, const CBLAS_INT offset ) {
	CBLAS_INT sx = stride;
	if ( sx < 0 ) {
		sx = -sx;
	}
	X += stdlib_strided_min_view_buffer_index( N, stride, offset ); // adjust array pointer
	return API_SUFFIX(cblas_sasum)( N, X, sx );
}
