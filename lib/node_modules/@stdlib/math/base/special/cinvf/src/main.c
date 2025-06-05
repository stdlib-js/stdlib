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

#include "stdlib/math/base/special/cinvf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/maxf.h"
#include "stdlib/constants/float32/max.h"
#include "stdlib/constants/float32/eps.h"
#include "stdlib/constants/float32/smallest_normal.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"


// VARIABLES //

static const float LARGE_THRESHOLD = STDLIB_CONSTANT_FLOAT32_MAX * 0.5f;
static const float SMALL_THRESHOLD = STDLIB_CONSTANT_FLOAT32_SMALLEST_NORMAL * ( 2.0f / STDLIB_CONSTANT_FLOAT32_EPS );
static const float RECIP_EPS_SQR = 2.0f / ( STDLIB_CONSTANT_FLOAT32_EPS * STDLIB_CONSTANT_FLOAT32_EPS );


// MAIN //

/**
* Computes the inverse of a single-precision complex floating-point number.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 2.0f, 4.0f );
*
* stdlib_complex64_t out = stdlib_base_cinvf( z );
*
* float re = stdlib_complex64_real( out );
* // returns 0.1f
*
* float im = stdlib_complex64_imag( out );
* // returns -0.2f
*/
stdlib_complex64_t stdlib_base_cinvf( const stdlib_complex64_t z ) {
	float re;
	float im;
	float ab;
	float s;
	float r;
	float t;

	stdlib_complex64_reim( z, &re, &im );

	ab = stdlib_base_maxf( stdlib_base_absf( re ), stdlib_base_absf( im ) );
	s = 1.0f;
	if ( ab >= LARGE_THRESHOLD ) {
		re *= 0.5f;
		im *= 0.5f;
		s *= 0.5f;
	}
	else if ( ab <= SMALL_THRESHOLD ) {
		re *= RECIP_EPS_SQR;
		im *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( stdlib_base_absf( im ) <= stdlib_base_absf( re ) ) {
		r = im / re;
		t = 1.0f / ( re + (im * r) );
		re = t;
		im = -r * t;
	} else {
		r = re / im;
		t = 1.0f / ( im + (re * r) );
		re = r * t;
		im = -t;
	}
	re *= s;
	im *= s;
	return stdlib_complex64( re, im );
}
