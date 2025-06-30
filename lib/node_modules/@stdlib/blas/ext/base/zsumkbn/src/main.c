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

#include "stdlib/blas/ext/base/zsumkbn.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/blas/base/shared.h"

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @return         output value
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsumkbn)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_zsumkbn_ndarray)( N, X, strideX, ox );
}

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
* @return         output value
*/
stdlib_complex128_t API_SUFFIX(stdlib_strided_zsumkbn_ndarray)( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	const double *x = (double *)X;
	CBLAS_INT sx;
	CBLAS_INT ix;
	CBLAS_INT i;
	CBLAS_INT j;
	CBLAS_INT k;
	double rsum;
	double isum;
	double vr;
	double vi;
	double tr;
	double ti;
	double cr;
	double ci;

	if ( N <= 0 ) {
		return stdlib_complex128( 0.0, 0.0 );
	}
	ix = offsetX * 2;
	if ( strideX == 0 ) {
		return stdlib_complex128( N * x[ ix ], N * x[ ix+1 ] );
	}
	sx = strideX * 2;

	vr = x[ ix ];
	vi = x[ ix+1 ];
	rsum = vr;
	isum = vi;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero components...
	if ( vr == 0.0 || vi == 0.0 ) {
		j = -1;
		k = -1;
		for ( i = 0; i < N; i++ ) {
			if ( j < 0 ) {
				vr = x[ ix ];
				if ( vr == 0.0 ) {
					rsum += vr;
				} else {
					j = i;
				}
			}
			if ( k < 0 ) {
				vi = x[ ix+1 ];
				if ( vi == 0.0 ) {
					isum += vi;
				} else {
					k = i;
				}
			}
			if ( j >= 0 && k >= 0 ) {
				break;
			}
			ix += sx;
		}
	} else {
		j = 0;
		k = 0;
	}
	// Reset the pointer:
	ix = ( offsetX * 2 ) + sx;

	// Initialize correction terms:
	cr = 0.0;
	ci = 0.0;
	for ( i = 1; i < N; i++ ) {
		if ( i >= j ) {
			vr = x[ ix ];
			tr = rsum + vr;
			if ( stdlib_base_abs( rsum ) >= stdlib_base_abs( vr ) ) {
				cr += (rsum-tr) + vr;
			} else {
				cr += (vr-tr) + rsum;
			}
			rsum = tr;
		}
		if ( i >= k ) {
			vi = x[ ix+1 ];
			ti = isum + vi;
			if ( stdlib_base_abs( isum ) >= stdlib_base_abs( vi ) ) {
				ci += (isum-ti) + vi;
			} else {
				ci += (vi-ti) + isum;
			}
			isum = ti;
		}
		ix += sx;
	}
	if ( j >= 0 ) {
		rsum += cr;
	}
	if ( k >= 0 ) {
		isum += ci;
	}
	return stdlib_complex128( rsum, isum );
}
