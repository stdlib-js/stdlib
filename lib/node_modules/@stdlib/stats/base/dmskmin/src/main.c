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

#include "stdlib/stats/base/dmskmin.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_negative_zero.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Computes the minimum value of a double-precision floating-point strided array according to a mask.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param Mask        mask array
* @param strideMask  Mask stride length
* @return            output value
*/
double API_SUFFIX(stdlib_strided_dmskmin)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const uint8_t *Mask, const CBLAS_INT strideMask ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT om = stdlib_strided_stride2offset( N, strideMask );
	return API_SUFFIX(stdlib_strided_dmskmin_ndarray)( N, X, strideX, ox, Mask, strideMask, om );
}

/**
* Computes the minimum value of a double-precision floating-point strided array according to a mask and using alternative indexing semantics.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param offsetX     starting index for X
* @param Mask        mask array
* @param strideMask  Mask stride length
* @param offsetMask  starting index for Mask
* @return            output value
*/
double API_SUFFIX(stdlib_strided_dmskmin_ndarray)( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const uint8_t *Mask, const CBLAS_INT strideMask, const CBLAS_INT offsetMask ) {
	CBLAS_INT ix;
	CBLAS_INT im;
	CBLAS_INT i;
	double min;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	ix = offsetX;
	im = offsetMask;
	for ( i = 0; i < N; i++ ) {
		if ( Mask[ im ] == 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i == N ) {
		return 0.0 / 0.0; // NaN
	}
	min = X[ ix ];
	if ( stdlib_base_is_nan( min ) ) {
		return 0.0 / 0.0; // NaN
	}
	i += 1;
	for (; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( Mask[ im ] ) {
			continue;
		}
		v = X[ ix ];
		if ( stdlib_base_is_nan( v ) ) {
			return 0.0 / 0.0; // NaN
		}
		if ( v < min || ( v == min && stdlib_base_is_negative_zero( v ) ) ) {
			min = v;
		}
	}
	return min;
}
