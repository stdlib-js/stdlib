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

#include "stdlib/math/base/special/boxcox1p.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Computes a one-parameter Box-Cox transformation of `1+x`.
*
* @param x         input value
* @param lambda    power parameter
* @return          Box-Cox transformation
*
* @example
* double v = stdlib_base_boxcox1p( 1.0, 2.5 );
* // returns ~1.8627
*/
double stdlib_base_boxcox1p( const double x, const double lambda ) {
	double lgx;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( lambda ) || x < -1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == -1.0 && lambda < 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	lgx = stdlib_base_log1p( x );
	if (
		stdlib_base_abs( lambda ) < 1.0e-19 ||

		// Guard against underflow...
		(
			stdlib_base_abs( lgx ) < 1.0e-289 &&
			stdlib_base_abs( lambda ) < 1.0e273
		)
	) {
		return lgx;
	}
	return stdlib_base_expm1( lambda * lgx ) / lambda;
}
