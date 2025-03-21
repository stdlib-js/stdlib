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

#include "stdlib/blas/base/isamax.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/absf.h"

/**
* Finds the index of the first element having the maximum absolute value using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @return         index value
*/
CBLAS_INT API_SUFFIX(c_isamax_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT idx;
	CBLAS_INT ix;
	CBLAS_INT i;
	float smax;
	float v;

	if ( N < 1 ) {
		return -1;
	}
	idx = 0;
	if ( N == 1 ) {
		return idx;
	}
	smax = stdlib_base_absf( X[ offsetX ] );
	ix = offsetX + strideX;
	for ( i = 1; i < N; i++ ) {
		v = stdlib_base_absf( X[ ix ] );
		if ( v > smax ) {
			idx = i;
			smax = v;
		}
		ix += strideX;
	}
	return idx;
}
