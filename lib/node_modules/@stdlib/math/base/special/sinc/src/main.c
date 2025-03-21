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

#include "stdlib/math/base/special/sinc.h"
#include "stdlib/math/base/special/sinpi.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/constants/float64/pi.h"

/**
* Computes the normalized cardinal sine of a number.
*
* ## Method
*
* For \\( x \neq 0 \\), the normalized cardinal sine is calculated as
*
* ```tex
* \operatorname{sinc}(x) = \frac{\operatorname{sin}(\pi x)}{\pi x}.
* ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{sinc}(0) &= 1 & \\
* \operatorname{sinc}(\infty) &= 0 & \\
* \operatorname{sinc}(-\infty) &= 0 & \\
* \operatorname{sinc}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
* @param x    input value
* @return     cardinal sine
*
* @example
* double y = stdlib_base_sinc( 0.5 );
* // returns ~0.637
*/
double stdlib_base_sinc( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) ) {
		return 0.0;
	}
	if ( x == 0.0 ) {
		return 1.0;
	}
	return stdlib_base_sinpi( x ) / ( STDLIB_CONSTANT_FLOAT64_PI * x );
}
