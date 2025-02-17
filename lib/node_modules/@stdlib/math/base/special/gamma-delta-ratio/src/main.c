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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for use in stdlib.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/gamma_delta_ratio.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/factorial.h"
#include "stdlib/constants/float64/max_safe_nth_factorial.h"
#include "stdlib/math/base/special/gamma_lanczos_sum.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/constants/float64/e.h"
#include "stdlib/constants/float64/gamma_lanczos_g.h"

static const double FACTORIAL_169 = 4.269068009004705e+304;

/**
* Calculates the ratio of two gamma functions via Lanczos approximation.
*
* ## Notes
*
* -   When \\( z < \epsilon \\), we get spurious numeric overflow unless we're very careful. This can occur either inside `lanczosSum(z)` or in the final combination of terms. To avoid this, split the product up into 2 (or 3) parts:
*
*     ```tex
*     \begin{align*}
*     G(z) / G(L) &= 1 / (z \cdot G(L)) ; z < \eps, L = z + \delta = \delta \\
*     z * G(L) &= z * G(lim) \cdot (G(L)/G(lim)) ; lim = \text{largest factorial}
*     \end{align*}
*     ```
*
* @param z        first gamma parameter
* @param delta    difference
* @return         gamma ratio
*/
static double gammaDeltaRatioLanczos( const double z, const double delta ) {
	double result;
	double ratio;
	double zgh;

	if ( z < STDLIB_CONSTANT_FLOAT64_EPS ) {
		if ( delta >= STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL ) {
			ratio = gammaDeltaRatioLanczos( delta, STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL - delta );
			ratio *= z;
			ratio *= FACTORIAL_169;
			return 1.0 / ratio;
		}
		return 1.0 / ( z * stdlib_base_gamma( z + delta ) );
	}
	zgh = z + STDLIB_CONSTANT_FLOAT64_GAMMA_LANCZOS_G - 0.5;
	if ( z + delta == z ) {
		if ( stdlib_base_abs( delta / zgh ) < STDLIB_CONSTANT_FLOAT64_EPS ) {
			result = stdlib_base_exp( -delta );
		} else {
			result = 1.0;
		}
	} else {
		if ( stdlib_base_abs( delta ) < 10.0 ) {
			result = stdlib_base_exp( ( 0.5 - z ) * stdlib_base_log1p( delta / zgh ) );
		} else {
			result = stdlib_base_pow( zgh / ( zgh + delta ), z - 0.5 );
		}
		// Split up the calculation to avoid spurious overflow:
		result *= stdlib_base_gamma_lanczos_sum( z ) / stdlib_base_gamma_lanczos_sum( z + delta );
	}
	result *= stdlib_base_pow( STDLIB_CONSTANT_FLOAT64_E / ( zgh + delta ), delta );
	return result;
}

/**
* Computes the ratio of two gamma functions.
*
* ## Notes
*
* -   Specifically, the function evaluates
*
*     ```tex
*     \frac{ \Gamma( z ) }{ \Gamma( z + \delta ) }
*     ```
*
* @param z        first gamma parameter
* @param delta    difference
* @return         gamma ratio
*
* @example
* double out = stdlib_base_gamma_delta_ratio( 2.0, 3.0 );
* // returns ~0.042
*/
double stdlib_base_gamma_delta_ratio( const double z, const double delta ) {
	double deltac;
	double result;
	double idelta;
	double zc;
	double iz;

	if ( z <= 0.0 || z + delta <= 0.0 ) {
		// This isn't very sophisticated, or accurate, but it does work:
		return stdlib_base_gamma( z ) / stdlib_base_gamma( z + delta );
	}
	idelta = stdlib_base_floor( delta );
	if ( idelta == delta ) {
		iz = stdlib_base_floor( z );
		if ( iz == z ) {
			// As both `z` and `delta` are integers, see if we can use a table lookup:
			if ( z <= STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL && ( z + delta <= STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FACTORIAL ) ) {
				return stdlib_base_factorial( iz - 1.0 ) / stdlib_base_factorial( idelta + iz - 1.0 );
			}
		}
		if ( stdlib_base_abs( delta ) < 20.0 ) {
			// As `delta` is a small integer, we can use a finite product:
			if ( delta == 0.0 ) {
				return 1.0;
			}
			zc = z;
			deltac = delta;
			if ( deltac < 0.0 ) {
				zc -= 1.0;
				result = zc;
				deltac += 1.0;
				while ( deltac != 0.0 ) {
					zc -= 1.0;
					result *= zc;
					deltac += 1.0;
				}
				return result;
			}
			result = 1.0 / zc;
			deltac -= 1.0;
			while ( deltac != 0.0 ) {
				zc += 1.0;
				result /= zc;
				deltac -= 1.0;
			}
			return result;
		}
	}
	return gammaDeltaRatioLanczos( z, delta );
}
