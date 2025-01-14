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

#include "stdlib/math/base/ops/cdiv.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include "stdlib/constants/float64/max.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/smallest_normal.h"
#include <stdint.h>

static const double LARGE_THRESHOLD = STDLIB_CONSTANT_FLOAT64_MAX * 0.5;
static const double SMALL_THRESHOLD = STDLIB_CONSTANT_FLOAT64_SMALLEST_NORMAL * ( 2.0 / STDLIB_CONSTANT_FLOAT64_EPS );
static const double RECIP_EPS_SQR = 2.0 / ( STDLIB_CONSTANT_FLOAT64_EPS * STDLIB_CONSTANT_FLOAT64_EPS );

/**
* Computes the real part of the quotient.
*
* ## Notes
*
* -   See figure 10 of [Baudin (2012)][@baudin:2012].
*
* [@baudin:2012]: https://arxiv.org/abs/1210.4539
*
* @param re1       real component
* @param im1       imaginary component
* @param re2       real component
* @param im2       imaginary component
* @param r         partial result
* @param t         partial result
* @return          real part of the quotient
*/
static double internalCompreal( const double re1, const double im1, const double re2, const double im2, const double r, const double t ) {
	double br;
	if ( r == 0.0 ) {
		return ( re1 + (im2 * ( im1 / re2 )) ) * t;
	}
	br = im1 * r;
	if ( br == 0.0 ) {
		return ( re1 * t ) + ( ( im1 * t ) * r );
	}
	return ( re1 + br ) * t;
}

/**
* Computes the complex division.
*
* ## Notes
*
* -   See figure 10 of [reference][@baudin:2012].
*
* [@baudin:2012]: https://arxiv.org/abs/1210.4539
*
* @param re1      real component
* @param im1      imaginary component
* @param re2      real component
* @param im2      imaginary component
* @param re       real result
* @param im       imaginary result
*/
static void robustInternal( const double re1, const double im1, const double re2, const double im2, double* re, double* im ) {
	double r;
	double t;

	r = im2 / re2;
	t = 1.0 / ( re2 + ( im2 * r ) );

	*re = internalCompreal( re1, im1, re2, im2, r, t );
	*im = internalCompreal( im1, -re1, re2, im2, r, t );
}

/**
* Divides two double-precision complex floating-point numbers.
*
* @param z1       input value
* @param z2       input value
* @return         result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
*
* stdlib_complex128_t z1 = stdlib_complex128( -13.0, -1.0 );
* stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );
*
* stdlib_complex128_t out = stdlib_base_cdiv( z1, z2 );
*
* double re = stdlib_complex128_real( out );
* // returns 5.0
*
* double im = stdlib_complex128_imag( out );
* // returns 3.0
*/
stdlib_complex128_t stdlib_base_cdiv( const stdlib_complex128_t z1, const stdlib_complex128_t z2 ) {
	double re1;
	double re2;
	double im1;
	double im2;
	double t1;
	double t2;
	double ab;
	double cd;
	double re;
	double im;
	double s;

	stdlib_complex128_reim( z1, &re1, &im1 );
	stdlib_complex128_reim( z2, &re2, &im2 );

	t1 = stdlib_base_abs( re1 );
	t2 = stdlib_base_abs( im1 );
	if ( t1 > t2 ) {
		ab = t1;
	} else {
		ab = t2;
	}
	t1 = stdlib_base_abs( re2 );
	t2 = stdlib_base_abs( im2 );
	if ( t1 > t2 ) {
		cd = t1;
	} else {
		cd = t2;
	}

	s = 1.0;

	if ( ab >= LARGE_THRESHOLD ) {
		re1 *= 0.5;
		im1 *= 0.5;
		s *= 2.0;
	} else if ( ab <= SMALL_THRESHOLD ) {
		re1 *= RECIP_EPS_SQR;
		im1 *= RECIP_EPS_SQR;
		s /= RECIP_EPS_SQR;
	}
	if ( cd >= LARGE_THRESHOLD ) {
		re2 *= 0.5;
		im2 *= 0.5;
		s *= 0.5;
	} else if ( cd <= SMALL_THRESHOLD ) {
		re2 *= RECIP_EPS_SQR;
		im2 *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	re = 0.0;
	im = 0.0;
	if ( stdlib_base_abs( im2 ) <= stdlib_base_abs( re2 ) ) {
		robustInternal( re1, im1, re2, im2, &re, &im );
	} else {
		robustInternal( im1, re1, im2, re2, &re, &im );
		im *= -1.0;
	}
	re *= s;
	im *= s;

	return stdlib_complex128( re, im );
}
