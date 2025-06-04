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

#include "stdlib/blas/ext/base/zsum.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/blas/ext/base/zsumkbn.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision complex floating-point strided array elements.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsum)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_zsum_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of double-precision complex floating-point strided array elements using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsum_ndarray)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	return API_SUFFIX(stdlib_strided_zsumkbn_ndarray)( N, X, strideX, offsetX );
}
