/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/cinv.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/smallest_normal.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"
#include <math.h>


// VARIABLES //

static const double LARGE_THRESHOLD = STDLIB_CONSTANT_FLOAT64_MAX * 0.5;
static const double SMALL_THRESHOLD = STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL * ( 2.0 / STDLIB_CONSTANT_FLOAT64_EPS );
static const double RECIP_EPS_SQR = 2.0 / ( STDLIB_CONSTANT_FLOAT64_EPS * STDLIB_CONSTANT_FLOAT64_EPS );


// MAIN //

/**
Computes the inverse of a double-precision complex floating-point number.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 2.0, 4.0 );
*
* stdlib_complex128_t out = stdlib_base_cinv( z );
*
* double re = stdlib_real( out );
* // returns 0.1
*
* double im = stdlib_imag( out );
* // returns -0.2
*/
stdlib_complex128_t stdlib_base_cinv( const stdlib_complex128_t z ) {
	double re;
	double im;
	double ab;
	double s;
	double r;
	double t;

	stdlib_reim( z, &re, &im );

	// TODO: replace `fmax` with stdlib max implementation once available
	ab = fmax( stdlib_base_abs( re ), stdlib_base_abs( im ) );
	s = 1.0;
	if ( ab >= LARGE_THRESHOLD ) {
		re *= 0.5;
		im *= 0.5;
		s *= 0.5;
	}
	else if ( ab <= SMALL_THRESHOLD ) {
		re *= RECIP_EPS_SQR;
		im *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( stdlib_base_abs( im ) <= stdlib_base_abs( re ) ) {
		r = im / re;
		t = 1.0 / ( re + (im * r) );
		re = t;
		im = -r * t;
	} else {
		r = re / im;
		t = 1.0 / ( im + (re * r) );
		re = r * t;
		im = -t;
	}
	re *= s;
	im *= s;
	return stdlib_complex128( re, im );
}
