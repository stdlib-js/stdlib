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

#include "stdlib/math/base/special/sincf.h"
#include "stdlib/math/base/special/sinpif.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/constants/float32/pi.h"

/**
* Computes the normalized cardinal sine of a single-precision floating-point number (in radians).
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
* float y = stdlib_base_sincf( 0.5f );
* // returns ~0.637f
*/
float stdlib_base_sincf( const float x ) {
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stdlib_base_is_infinitef( x ) ) {
		return 0.0f;
	}
	if ( x == 0.0f ) {
		return 1.0f;
	}
	return stdlib_base_sinpif( x ) / ( STDLIB_CONSTANT_FLOAT32_PI * x );
}
