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

#include "stdlib/blas/ext/base/drssbl.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/abs2.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/special/sqrt.h"
#include <stdbool.h>

// Blue's scaling constants...
static const double SBIG = 1.1113793747425387E-162;
static const double SSML = 4.4989137945431964E+161;
static const double TBIG = 1.9979190722022350E+146;
static const double TSML = 1.4916681462400413E-154;


/**
* Computes the residual sum of squares of two double-precision floating-point strided arrays using Blue's algorithm.
*
* @param N            number of indexed elements
* @param X            first input array
* @param strideX      stride length of `X`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @return             output value
*/
double API_SUFFIX( stdlib_strided_drssbl )( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX( stdlib_strided_drssbl_ndarray )( N, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the residual sum of squares of two double-precision floating-point strided arrays using Blue's algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param X            first input array
* @param strideX      stride length of `X`
* @param offsetX      starting index for `X`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @param offsetY      starting index for `Y`
* @return             output value
*/
double API_SUFFIX( stdlib_strided_drssbl_ndarray )( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	bool notbig;
	double sumsq;
	double scale;
	double abig;
	double asml;
	double amed;
	double ymin;
	double ymax;
	double az;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	iy = offsetY;

	// Initialize loop values for accumulation:
	notbig = true;

	abig = 0.0;
	amed = 0.0;
	asml = 0.0;

	/*
	* Compute the sum of squares in 3 accumulators:
	*
	* -   `abig`: sum of squares scaled down to avoid overflow
	* -   `asml`: sum of squares scaled up to avoid underflow
	* -   `amed`: sum of squares that do not require scaling
	*
	* The thresholds and multipliers are
	*
	* -   `tbig`: values bigger than this are scaled down by `sbig`
	* -   `tsml`: values smaller than this are scaled up by `ssml`
	*/
	for ( i = 0; i < N; i++ ) {
		az = stdlib_base_abs( X[ ix ] - Y[ iy ] );
		if ( az > TBIG ) {
			abig += stdlib_base_abs2( az*SBIG );
			notbig = false;
		} else if ( az < TSML ) {
			if ( notbig ) {
				asml += stdlib_base_abs2( az*SSML );
			}
		} else {
			amed += stdlib_base_abs2( az );
		}
		ix += strideX;
		iy += strideY;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig` > 0...
		if ( amed > 0.0 || stdlib_base_is_nan( amed ) ) {
			abig += ( amed*SBIG ) * SBIG;
		}
		scale = 1.0 / SBIG;
		sumsq = abig;
		return sumsq * ( scale*scale );
	}
	if ( asml > 0.0 ) {
		// Combine `amed` and `asml` if `asml` > 0...
		if ( amed > 0.0 || stdlib_base_is_nan( amed ) ) {
			amed = stdlib_base_sqrt( amed );
			asml = stdlib_base_sqrt( asml ) / SSML;
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scale = 1.0;
			sumsq = stdlib_base_abs2( ymax ) * ( 1.0 + stdlib_base_abs2( ymin/ymax ) );
		} else {
			scale = 1.0 / SSML;
			sumsq = asml;
		}
		return sumsq * ( scale*scale );
	}
	// Otherwise all values are mid-range or zero...
	scale = 1.0;
	sumsq = amed;
	return sumsq * ( scale*scale );
}
