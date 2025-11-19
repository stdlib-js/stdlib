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

#include "stdlib/math/base/special/kernel_sincos.h"

static const double S1 = -1.66666666666666324348e-01; // 0xBFC55555, 0x55555549

// BEGIN: polyval_s24

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_s24( const double x ) {
	return 0.00833333333332249 + (x * (-0.0001984126982985795 + (x * 0.0000027557313707070068)));
}

// END: polyval_s24

// BEGIN: polyval_s56

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_s56( const double x ) {
	return -2.5050760253406863e-8 + (x * 1.58969099521155e-10);
}

// END: polyval_s56

// BEGIN: polyval_c13

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_c13( const double x ) {
	return 0.0416666666666666 + (x * (-0.001388888888887411 + (x * 0.00002480158728947673)));
}

// END: polyval_c13

// BEGIN: polyval_c46

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the polynomial
* @return     evaluated polynomial
*/
static double polyval_c46( const double x ) {
	return -2.7557314351390663e-7 + (x * (2.087572321298175e-9 + (x * -1.1359647557788195e-11)));
}

// END: polyval_c46

/**
* Simultaneously computes the sine and cosine of an angle measured in radians within the interval \\( \approx \[-\pi/4, \pi/4\] \\) (except for \\(-0\\)), where \\( \pi/4 \approx 0.7854 \\), and stores the results in the provided output parameters.
*
* @param x         input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param y         tail of `x`
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*
* @example
* double x = 0.0;
* double y = 0.0;
*
* double cosine;
* double sine;
* stdlib_base_kernel_sincos( x, y, &sine, &cosine );
*/
void stdlib_base_kernel_sincos( const double x, const double y, double* sine, double* cosine ) {
	double hz;
	double r;
	double v;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = polyval_s24( z ) + (z * w * polyval_s56( z ));
	v = z * x;
	if ( y == 0.0 ) {
		*sine = x + (v * (S1 + (z*r)));
	} else {
		*sine = x - (((z*((0.5*y) - (v*r))) - y) - (v*S1));
	}
	r = z * polyval_c13( z );
	r += w * w * polyval_c46( z );
	hz = 0.5 * z;
	w = 1.0 - hz;
	*cosine = w + ( ((1.0-w) - hz) + ((z*r) - (x*y)) );
	return;
}
