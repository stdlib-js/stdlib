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

#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaled.h"

// BEGIN: rational_pq

/**
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param x    value at which to evaluate the rational function
* @return     evaluated rational function
*/
static double rational_pq( const double x ) {
	double ax;
	double ix;
	double s1;
	double s2;
	if ( x == 0.0 ) {
		return 1.0 / 0.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 709811.662581658 + (x * (679979.8474157227 + (x * (293136.7857211597 + (x * (74887.54032914672 + (x * (12555.290582413863 + (x * (1443.4299244417066 + (x * (115.24194596137347 + (x * (6.309239205732627 + (x * (0.22668404630224365 + (x * (0.004826466289237662 + (x * 0.00004624429436045379)))))))))))))))))));
		s2 = 0.0 + (x * (362880.0 + (x * (1026576.0 + (x * (1172700.0 + (x * (723680.0 + (x * (269325.0 + (x * (63273.0 + (x * (9450.0 + (x * (870.0 + (x * (45.0 + (x * 1.0)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 0.00004624429436045379 + (ix * (0.004826466289237662 + (ix * (0.22668404630224365 + (ix * (6.309239205732627 + (ix * (115.24194596137347 + (ix * (1443.4299244417066 + (ix * (12555.290582413863 + (ix * (74887.54032914672 + (ix * (293136.7857211597 + (ix * (679979.8474157227 + (ix * 709811.662581658)))))))))))))))))));
		s2 = 1.0 + (ix * (45.0 + (ix * (870.0 + (ix * (9450.0 + (ix * (63273.0 + (ix * (269325.0 + (ix * (723680.0 + (ix * (1172700.0 + (ix * (1026576.0 + (ix * (362880.0 + (ix * 0.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_pq

/**
* Calculates the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 10.900511`).
*
* @param x    input value
* @return     Lanczos sum approximation
*
* @example
* double v = stdlib_base_gamma_lanczos_sum_expg_scaled( 4.0 );
* // returns ~0.018
*/
double stdlib_base_gamma_lanczos_sum_expg_scaled( const double x ) {
	return rational_pq( x );
}
