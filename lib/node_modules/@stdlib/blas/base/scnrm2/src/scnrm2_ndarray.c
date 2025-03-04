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

#include "stdlib/blas/base/scnrm2.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/abs2f.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/constants/float32/max.h"
#include <stdbool.h>

// Blue's scaling constants...
static const float tsml = 1.08420217E-19f;
static const float tbig = 4.50359963E+15f;
static const float ssml = 3.77789319E+22f;
static const float sbig = 1.32348898E-23f;

/**
* Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param CX        input array
* @param strideX   CX stride length
* @param offsetX   starting index for CX
*/
float API_SUFFIX(c_scnrm2_ndarray)( const CBLAS_INT N, const void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	const float *x = (float *)CX;
	CBLAS_INT sx;
	CBLAS_INT ix;
	bool notbig;
	CBLAS_INT i;
	float sumsq;
	float abig;
	float amed;
	float asml;
	float ymax;
	float ymin;
	float scl;
	float ax;

	if ( N <= 0 ) {
		return 0.0f;
	}
	sx = strideX * 2;
	ix = offsetX * 2;
	
	// Compute the sum of squares using 3 accumulators--`abig` (sum of squares scaled down to avoid overflow), `asml` (sum of squares scaled up to avoid underflow), `amed` (sum of squares that do not require scaling)--and thresholds and multipliers--`tbig` (values bigger than this are scaled down by `sbig`) and `tsml` (values smaller than this are scaled up by `ssml`)...
	notbig = true;
	sumsq = 0.0f;
	abig = 0.0f;
	amed = 0.0f;
	asml = 0.0f;
	for ( i = 0; i < N; i++ ) {
		ax = stdlib_base_absf( x[ ix ] );
		if ( ax > tbig ) {
			abig += stdlib_base_abs2f( ax * sbig );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml += stdlib_base_abs2f( ax * ssml );
			}
		} else {
			amed += stdlib_base_abs2f( ax );
		}
		ax = stdlib_base_absf( x[ ix + 1 ] );
		if ( ax > tbig ) {
			abig += stdlib_base_abs2f( ax * sbig );
			notbig = false;
		} else if ( ax < tsml ) {
			if ( notbig ) {
				asml += stdlib_base_abs2f( ax * ssml );
			}
		} else {
			amed += stdlib_base_abs2f( ax );
		}
		ix += sx;
	}
	// Combine `abig` and `amed` or `amed` and `asml` if more than one accumulator was used...
	if ( abig > 0.0f ) {
		// Combine `abig` and `amed` if `abig` > 0...
		if ( amed > 0.0f || ( amed > STDLIB_CONSTANT_FLOAT32_MAX ) || ( amed != amed ) ) {
			abig += ( amed * sbig ) * sbig;
		}
		scl = 1.0f / sbig;
		sumsq = abig;
	} else if ( asml > 0.0f ) {
		// Combine `amed` and `asml` if `asml` > 0...
		if ( amed > 0.0f || amed > STDLIB_CONSTANT_FLOAT32_MAX || ( amed != amed ) ) {
			amed = stdlib_base_sqrtf( amed );
			asml = stdlib_base_sqrtf( asml ) / ssml;
			if ( asml > amed ) {
				ymin = amed;
				ymax = asml;
			} else {
				ymin = asml;
				ymax = amed;
			}
			scl = 1.0f;
			sumsq = stdlib_base_abs2f( ymax ) * ( 1.0 + stdlib_base_abs2f( ymin / ymax ) );
		} else {
			scl = 1.0f / ssml;
			sumsq = asml;
		}
	} else {
		// All values are mid-range...
		scl = 1.0f;
		sumsq = amed;
	}
	return stdlib_base_sqrtf( sumsq ) * scl;
}
