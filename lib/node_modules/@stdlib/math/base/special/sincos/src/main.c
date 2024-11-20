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

#include "stdlib/math/base/special/sincos.h"
#include "stdlib/constants/float64/high_word_abs_mask.h"
#include "stdlib/constants/float64/high_word_exponent_mask.h"
#include "stdlib/number/float64/base/get_high_word.h"
#include "stdlib/math/base/special/rempio2.h"
#include <stdint.h>

static const double S1 = -1.66666666666666324348e-01; // 0xBFC55555, 0x55555549
static const double S2 = 8.33333333332248946124e-03;  // 0x3F811111, 0x1110F8A6
static const double S3 = -1.98412698298579493134e-04; // 0xBF2A01A0, 0x19C161D5
static const double S4 = 2.75573137070700676789e-06;  // 0x3EC71DE3, 0x57B1FE7D
static const double S5 = -2.50507602534068634195e-08; // 0xBE5AE5E6, 0x8A2B9CEB
static const double S6 = 1.58969099521155010221e-10;  // 0x3DE5D93A, 0x5ACFD57C
static const double C1 = 4.16666666666666019037e-02;  // 0x3FA55555, 0x5555554C
static const double C2 = -1.38888888888741095749e-03; // 0xBF56C16C, 0x16C15177
static const double C3 = 2.48015872894767294178e-05;  // 0x3EFA01A0, 0x19CB1590
static const double C4 = -2.75573143513906633035e-07; // 0xBE927E4F, 0x809C52AD
static const double C5 = 2.08757232129817482790e-09;  // 0x3E21EE9E, 0xBDB4B1C4
static const double C6 = -1.13596475577881948265e-11; // 0xBDA8FAE9, 0xBE8838D4

// High word for PI/4: 0x3fe921fb = 1072243195 => 00111111111010010010000111111011
static const int32_t PIO4_HIGH_WORD = 0x3fe921fb;

// The smaller of the two cutoffs for the sine and cosine kernels: 2^-27 = 0x3e400000 => 00111110010000000000000000000000
static const int32_t SMALL_HIGH_WORD = 0x3e400000;

/**
* Computes the sine and cosine on \\( \approx \[-\pi/4, \pi/4\] \\) (except for \\(-0\\)), where \\( \pi/4 \approx 0.7854 \\).
*
* @private
* @param x         input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param y         tail of `x`
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*/
static void kernelSincos( const double x, const double y, double* sine, double* cosine ) {
	double hz;
	double r;
	double v;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = S2 + ( z * ( S3 + ( z * S4 ) ) ) + ( z * w * ( S5 + ( z * S6 ) ) );
	v = z * x;
	if ( y == 0.0 ) {
		*sine = x + ( v * ( S1 + ( z * r ) ) );
	} else {
		*sine = x - ( ( ( z * ( ( 0.5 * y ) - ( v * r ) ) ) - y ) - ( v * S1 ) );
	}
	r = z * ( C1 + ( z * ( C2 + ( z * C3 ) ) ) );
	r += w * w * ( C4 + ( z * ( C5 + ( z * C6 ) ) ) );
	hz = 0.5 * z;
	w = 1.0 - hz;
	*cosine = w + ( ( ( 1.0 - w ) - hz ) + ( ( z * r ) - ( x * y ) ) );
	return;
}

/**
* Simultaneously computes the sine and cosine of a number.
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\) and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y1+y2 = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
*
* -   We have
*
*     | n | sin(x) | cos(x) | tan(x) |
*     | - | ------ | ------ | ------ |
*     | 0 |    S   |    C   |   T    |
*     | 1 |    C   |   -S   |  -1/T  |
*     | 2 |   -S   |   -C   |   T    |
*     | 3 |   -C   |    S   |  -1/T  |
*
* @param x         input value
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*
* @example
* double x = 0.0;
*
* double cosine;
* double sine;
* stdlib_base_sincos( x, &sine, &cosine );
*/
void stdlib_base_sincos( const double x, double* sine, double* cosine ) {
	uint32_t uix;
	double rem1;
	double rem2;
	double tmp;
	int32_t ix;
	int32_t n;

	stdlib_base_float64_get_high_word( x, &uix );
	ix = (int32_t)uix;

	// Case: |x| ~< π/4
	ix &= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_ABS_MASK;
	if ( ix <= PIO4_HIGH_WORD ) {
		// Case: |x| ~< 2^-26
		if ( ix < SMALL_HIGH_WORD ) {
			if ( (int32_t)x == 0 ) {
				*sine = x;
				*cosine = 0.0;
			}
		}
		kernelSincos( x, 0.0, sine, cosine );
		return;
	}

	// Case: x is NaN or infinity
	if ( ix >= STDLIB_CONSTANT_FLOAT64_HIGH_WORD_EXPONENT_MASK ) {
		*sine = 0.0 / 0.0; // NaN
		*cosine = 0.0 / 0.0; // NaN
		return;
	}

	// Argument reduction...
	n = stdlib_base_rempio2( x, &rem1, &rem2 );

	// Compute the sine and cosine together:
	kernelSincos( rem1, rem2, sine, cosine );

	switch ( n & 3 ) {
		case 1:
			tmp = *cosine;
			*cosine = -*sine;
			*sine = tmp;
			return;
		case 2:
			*sine *= -1;
			*cosine *= -1;
			return;
		case 3:
			// Passing
			tmp = -*cosine;
			*cosine = *sine;
			*sine = tmp;
			return;
		default:
			return;
	}
}
