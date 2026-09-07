/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/blas/ext/base/swhere.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Takes elements from one of two single-precision floating-point strided arrays depending on a condition.
*
* @param N          number of indexed elements
* @param Condition  condition array
* @param strideC    stride length for `Condition`
* @param X          first input array
* @param strideX    stride length for `X`
* @param Y          second input array
* @param strideY    stride length for `Y`
* @param Out        output array
* @param strideOut  stride length for `Out`
*/
void API_SUFFIX(stdlib_strided_swhere)( const CBLAS_INT N, const bool *Condition, const CBLAS_INT strideC, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *Out, const CBLAS_INT strideOut ) {
	const CBLAS_INT oc = stdlib_strided_stride2offset( N, strideC );
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	const CBLAS_INT oo = stdlib_strided_stride2offset( N, strideOut );
	API_SUFFIX(stdlib_strided_swhere_ndarray)( N, Condition, strideC, oc, X, strideX, ox, Y, strideY, oy, Out, strideOut, oo );
}

/**
* Takes elements from one of two single-precision floating-point strided arrays depending on a condition using alternative indexing semantics.
*
* @param N          number of indexed elements
* @param Condition  condition array
* @param strideC    stride length for `Condition`
* @param offsetC    starting index for `Condition`
* @param X          first input array
* @param strideX    stride length for `X`
* @param offsetX    starting index for `X`
* @param Y          second input array
* @param strideY    stride length for `Y`
* @param offsetY    starting index for `Y`
* @param Out        output array
* @param strideOut  stride length for `Out`
* @param offsetOut  starting index for `Out`
*/
void API_SUFFIX(stdlib_strided_swhere_ndarray)( const CBLAS_INT N, const bool *Condition, const CBLAS_INT strideC, const CBLAS_INT offsetC, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT ic;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT io;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return;
	}
	ic = offsetC;
	ix = offsetX;
	iy = offsetY;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( Condition[ ic ] ) {
			Out[ io ] = X[ ix ];
		} else {
			Out[ io ] = Y[ iy ];
		}
		ic += strideC;
		ix += strideX;
		iy += strideY;
		io += strideOut;
	}
	return;
}
