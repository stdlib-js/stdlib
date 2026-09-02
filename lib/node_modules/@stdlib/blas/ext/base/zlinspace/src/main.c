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

#include "stdlib/blas/ext/base/zlinspace.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdbool.h>

/**
* Fills a double-precision complex floating-point strided array with linearly spaced values over a specified interval.
*
* @param N        number of indexed elements
* @param start    start of interval
* @param stop     end of interval
* @param endpoint boolean indicating whether to include the `stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
*/
void API_SUFFIX(stdlib_strided_zlinspace)( const CBLAS_INT N, const stdlib_complex128_t start, const stdlib_complex128_t stop, const bool endpoint, stdlib_complex128_t *X, const CBLAS_INT strideX ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_zlinspace_ndarray)( N, start, stop, endpoint, X, strideX, ox );
}

/**
* Fills a double-precision complex floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param start    start of interval
* @param stop     end of interval
* @param endpoint boolean indicating whether to include the `stop` value when writing values to the input array
* @param X        input array
* @param strideX  stride length
* @param offsetX  starting index
*/
void API_SUFFIX(stdlib_strided_zlinspace_ndarray)( const CBLAS_INT N, const stdlib_complex128_t start, const stdlib_complex128_t stop, const bool endpoint, stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	double start_re;
	double start_im;
	double stop_re;
	double stop_im;
	CBLAS_INT ix;
	CBLAS_INT M;
	CBLAS_INT i;
	double dre;
	double dim;
	double sM;
	double si;

	if ( N <= 0 ) {
		return;
	}

	// Decompose the bounds into their real and imaginary components:
	start_re = stdlib_complex128_real( start );
	start_im = stdlib_complex128_imag( start );
	stop_re = stdlib_complex128_real( stop );
	stop_im = stdlib_complex128_imag( stop );

	// Set the first value:
	ix = offsetX;
	if ( N == 1 ) {
		if ( endpoint ) {
			X[ ix ] = stdlib_complex128( stop_re, stop_im );
		} else {
			X[ ix ] = stdlib_complex128( start_re, start_im );
		}
		return;
	}

	// Write the first value:
	X[ ix ] = stdlib_complex128( start_re, start_im );
	ix += strideX;

	// Calculate the complex increment:
	if ( endpoint ) {
		M = N - 1;
	} else {
		M = N;
	}
	sM = (double)M;
	dre = ( stop_re - start_re ) / sM;
	dim = ( stop_im - start_im ) / sM;

	// Generate linearly spaced values:
	si = 1.0;
	for ( i = 1; i < M; i++ ) {
		X[ ix ] = stdlib_complex128( start_re + ( dre * si ), start_im + ( dim * si ) );
		ix += strideX;
		si += 1.0;
	}
	// Check whether to include the `stop` value:
	if ( endpoint ) {
		X[ ix ] = stdlib_complex128( stop_re, stop_im );
	}
	return;
}
