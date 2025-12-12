/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link https://github.com/boostorg/math/blob/fb82796a79788dc7f9973c9f0c492f8c1b54aa92/include/boost/math/special_functions/sqrt1pm1.hpp}. This implementation follows the original, but has been modified according to project conventions.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/sqrt1pm1.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"

/**
* Computes the value of `sqrt(1+x)-1`.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_sqrt1pm1( 3.0 );
* // returns 1.0
*/
double stdlib_base_sqrt1pm1( const double x ) {
	if ( stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_abs( x ) > 0.75 ) {
		return stdlib_base_sqrt( 1.0 + x ) - 1.0;
	}
	return stdlib_base_expm1( stdlib_base_log1p( x ) / 2.0 );
}
