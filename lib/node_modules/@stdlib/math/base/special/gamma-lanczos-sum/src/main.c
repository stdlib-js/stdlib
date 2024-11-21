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

#include "stdlib/math/base/special/gamma_lanczos_sum.h"

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
		s1 = 38474670393.31777 + (x * (36857665043.51951 + (x * (15889202453.72942 + (x * (4059208354.298835 + (x * (680547661.1834733 + (x * (78239755.00312005 + (x * (6246580.776401795 + (x * (341986.3488721347 + (x * (12287.194511824551 + (x * (261.61404416416684 + (x * 2.5066282746310007)))))))))))))))))));
		s2 = 0.0 + (x * (362880.0 + (x * (1026576.0 + (x * (1172700.0 + (x * (723680.0 + (x * (269325.0 + (x * (63273.0 + (x * (9450.0 + (x * (870.0 + (x * (45.0 + (x * 1.0)))))))))))))))))));
	} else {
		ix = 1.0 / x;
		s1 = 2.5066282746310007 + (ix * (261.61404416416684 + (ix * (12287.194511824551 + (ix * (341986.3488721347 + (ix * (6246580.776401795 + (ix * (78239755.00312005 + (ix * (680547661.1834733 + (ix * (4059208354.298835 + (ix * (15889202453.72942 + (ix * (36857665043.51951 + (ix * 38474670393.31777)))))))))))))))))));
		s2 = 1.0 + (ix * (45.0 + (ix * (870.0 + (ix * (9450.0 + (ix * (63273.0 + (ix * (269325.0 + (ix * (723680.0 + (ix * (1172700.0 + (ix * (1026576.0 + (ix * (362880.0 + (ix * 0.0)))))))))))))))))));
	}
	return s1 / s2;
}

// END: rational_pq

/**
* Calculates the Lanczos sum for the approximation of the gamma function.
*
* @param x    input value
* @return     Lanczos sum approximation
*
* @example
* double v = stdlib_base_gammaLanczosSum( 4.0 );
* // returns ~950.366
*/
double stdlib_base_gamma_lanczos_sum( const double x ) {
	return rational_pq( x );
}
