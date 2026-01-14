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

#include "stdlib/math/base/special/boxcox.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_positive_zero.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Computes a one-parameter Box-Cox transformation.
*
* ## Method
*
* -   If \\( \lambda << 1 \\) and \\( \ln( x ) < 1.0 \\), then the product \\( \lambda \cdot \ln(x) \\) can lose precision, and, furthermore, \\( \operatorname{expm1}(x) = x \\) for \\( x < \epsilon \\).
* -   For double-precision floating-point numbers, the range of the natural log is \\( \[-744.44, 709.78\] and \\( \epsilon \\) is the smallest value produced.
* -   The value range means that we will have \\( |\lambda \cdot \ln(x)| < \epsilon \\) whenever \\( |\lambda| \leq \frac{\epsilon}{-\ln(d) \\), where \\( d \\) is the minimum double-precision floating-point number, thus corresponding to the value \\( \approx 2.98 \times 10^{-19} \\).
*
* @param x         input value
* @param lambda    power parameter
* @return          Box-Cox transformation
*
* @example
* double v = stdlib_base_boxcox( 1.0, 2.5 );
* // returns 0.0
*/
double stdlib_base_boxcox( const double x, const double lambda ) {
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( lambda ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_positive_zero( x ) && lambda < 0.0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( stdlib_base_abs( lambda ) < 1.0e-19 ) {
		return stdlib_base_ln( x );
	}
	return stdlib_base_expm1( lambda * stdlib_base_ln( x ) ) / lambda;
}
