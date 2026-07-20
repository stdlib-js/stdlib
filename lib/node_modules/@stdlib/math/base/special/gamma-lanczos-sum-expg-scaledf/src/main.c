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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_88_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified according to stdlib conventions.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/gamma_lanczos_sum_expg_scaledf.h"

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
static float rational_pq( const float x ) {
	float ax;
	float ix;
	float s1;
	float s2;
	if ( x == 0.0f ) {
		return 1.0f / 0.0f;
	}
	if ( x < 0.0f ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0f ) {
		s1 = 14.026143287499648f + (x * (43.74732405540314f + (x * (50.59547402616589f + (x * (26.904566805625482f + (x * (6.595765571169315f + (x * 0.600785401051529f)))))))));
		s2 = 0.0f + (x * (24.0f + (x * (50.0f + (x * (35.0f + (x * (10.0f + (x * 1.0f)))))))));
	} else {
		ix = 1.0f / x;
		s1 = 0.600785401051529f + (ix * (6.595765571169315f + (ix * (26.904566805625482f + (ix * (50.59547402616589f + (ix * (43.74732405540314f + (ix * 14.026143287499648f)))))))));
		s2 = 1.0f + (ix * (10.0f + (ix * (35.0f + (ix * (50.0f + (ix * (24.0f + (ix * 0.0f)))))))));
	}
	return s1 / s2;
}

// END: rational_pq

/**
* Calculates the Lanczos sum for the approximation of the gamma function (scaled by `exp(-g)`, where `g = 1.42845618724823`) as a single precision floating-point number.
*
* @param x    input value
* @return     Lanczos sum approximation
*
* @example
* float v = stdlib_base_gamma_lanczos_sum_expg_scaledf( 4.0f );
* // returns ~0.748f
*/
float stdlib_base_gamma_lanczos_sum_expg_scaledf( const float x ) {
	return rational_pq( x );
}
