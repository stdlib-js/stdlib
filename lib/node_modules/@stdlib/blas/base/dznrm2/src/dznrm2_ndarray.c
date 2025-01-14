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

#include "stdlib/blas/base/dznrm2.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/abs2.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/max.h"
#include <stdbool.h>

// Blue's scaling constants...
static const double tsml = 1.4916681462400413E-154;
static const double tbig = 1.9979190722022350E+146;
static const double ssml = 4.4989137945431964E+161;
static const double sbig = 1.1113793747425387E-162;

/**
* Computes the L2-norm of a complex double-precision floating-point vector using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param ZX        input array
* @param strideX   ZX stride length
* @param offsetX   starting index for ZX
*/
double API_SUFFIX(c_dznrm2_ndarray)( const CBLAS_INT N, const void *ZX, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	const double *x = (double *)ZX;
	CBLAS_INT sx;
	CBLAS_INT ix;
	bool notbig;
	CBLAS_INT i;
	double sumsq;
	double abig;
	double amed;
	double asml;
	double ymax;
	double ymin;
	double scl;
	double ax;

	if ( N <= 0 ) {
		return 0.0;
	}
	sx = strideX * 2;
	ix = offsetX * 2;

	// Compute the sum of squares using 3 accumulators--`abig` (sum of squares scaled down to avoid overflow), `asml` (sum of squares scaled up to avoid underflow), `amed` (sum of squares that do not require scaling)--and thresholds and multipliers--`tbig` (values bigger than this are scaled down by `sbig`) and `tsml` (values smaller than this are scaled up by `ssml`)...
	notbig = true;
	sumsq = 0.0;
	abig = 0.0;
	amed = 0.0;
	asml = 0.0;
	for ( i = 0; i < N; i++ ) {
		ax = stdlib_base_abs( x[ ix ] );
		if ( ax > tbig ) {
			abig += stdlib_base_abs2( ax * sbig );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml += stdlib_base_abs2( ax * ssml );
			}
		} else {
			amed += stdlib_base_abs2( ax );
		}
		ax = stdlib_base_abs( x[ ix + 1 ] );
		if ( ax > tbig ) {
			abig += stdlib_base_abs2( ax * sbig );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml += stdlib_base_abs2( ax * ssml );
			}
		} else {
			amed += stdlib_base_abs2( ax );
		}
		ix += sx;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0 ) {
		// Combine `abig` and `amed` if `abig` > 0...
		if ( amed > 0.0 || ( amed > STDLIB_CONSTANT_FLOAT64_MAX ) || ( amed != amed ) ) {
			abig += ( amed * sbig ) * sbig;
		}
		scl = 1.0 / sbig;
		sumsq = abig;
	} else if ( asml > 0.0 ) {
		// Combine `amed` and `asml` if `asml` > 0...
		if ( amed > 0.0 || amed > STDLIB_CONSTANT_FLOAT64_MAX || ( amed != amed ) ) {
			amed = stdlib_base_sqrt( amed );
			asml = stdlib_base_sqrt( asml ) / ssml;
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scl = 1.0;
			sumsq = stdlib_base_abs2( ymax ) * ( 1.0 + stdlib_base_abs2( ymin / ymax ) );
		} else {
			scl = 1.0 / ssml;
			sumsq = asml;
		}
	} else {
		// All values are mid-range...
		scl = 1.0;
		sumsq = amed;
	}
	return stdlib_base_sqrt( sumsq ) * scl;
}
