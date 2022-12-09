/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/kernel_tan.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/number/float64/base/set_low_word.h"
#include "polyval_t_even.c"
#include "polyval_t_odd.c"

static const double PI04 = 7.85398163397448278999e-01;
static const double PI04LO = 3.06161699786838301793e-17;
static const double T0 = 3.33333333333334091986e-01; // 3FD55555, 55555563

// Absolute value mask: 2147483647 => 0x7fffffff => 01111111111111111111111111111111
static const int32_t HIGH_WORD_ABS_MASK = 0x7fffffff;


/**
* Computes the tangent of a number on [-π/4, π/4].
*
* @param x    input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @param y    tail of `x`
* @param k    if `k = 1`, the function returns `tan(x+y)`. To return the negative inverse `-1/tan(x+y)`, set `k = -1`.
* @return	  tangent value
*
* @example
* double x = 1.0;
* double y = 2.0;
* int32_t k = 1;
*
* double out = stdlib_base_kernel_tan( x, y, k );
*/
double stdlib_base_kernel_tan( const double x, const double y, const int32_t k ) {
	int32_t ix;
	uint32_t hx;
	double z;
	double r;
	double t;
	double v;
	double w;
	double s;
	double xc = x;
	double yc = y;

	stdlib_base_float64_get_high_word( x, &hx );

	// High word of |x|:
	ix =  (  hx & HIGH_WORD_ABS_MASK );

	// Case: |x| >= 0.6744
	if ( ix >= 0x3FE59428 ) {
		if ( xc < 0 ) {
			xc = -xc;
			yc = -yc;
		}
		z = PI04 - xc;
		w = PI04LO - yc;
		xc = z + w;
		yc = 0.0;
	}
	z = xc * xc;
	w = z * z;

	// Break x^5*(T[1]+x^2*T[2]+...) into x^5(T[1]+x^4*T[3]+...+x^20*T[11]) + x^5(x^2*(T[2]+x^4*T[4]+...+x^22*T[12]))...
	r = polyvalOdd( w );
	v = z * polyvalEven( w );
	s = z * xc;
	r = yc + (z * ((s * (r + v)) + yc));
	r += T0 * s;
	w = xc + r;
	if ( ix >= 0x3FE59428 ) {
		v = k;
		return ( 1.0 - ( (hx >> 30) & 2 ) ) * ( v - (2.0 * (xc - ((w * w / (w + v)) - r)) ));
	}
	if ( k == 1 ) {
		return w;
	}
	// Compute -1/(x+r) accurately...
	z = w;
	stdlib_base_float64_set_low_word( 0, &z );
	v = r - (z - xc); // z + v = r + xc
	double a = -1.0 / w;
	t = a;
	stdlib_base_float64_set_low_word( 0, &t );
	s = 1.0 + t * z;
	return t + (a * (s + (t * v)));
}
