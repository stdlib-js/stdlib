/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/log1pmx.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/constants/float64/eps.h"

/**
* Evaluates \\( \operatorname{log1pmx}(x) = \ln(1+x) - x \\).
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_log1pmx( 0.0 );
* // returns ~0.693
*/
double stdlib_base_log1pmx( const double x ) {
	double ax;
	if ( x <= -1.0 ) {
		return 0.0 / 0.0; // NaN
	}
	ax = stdlib_base_abs( x );
	if ( ax > 0.95 ) {
		return stdlib_base_ln( 1.0 + x ) - x;
	}
	if ( ax < STDLIB_CONSTANT_FLOAT64_EPS ) {
		return -x * x / 2.0;
	}
	return stdlib_base_log1p( x ) - x;
}
