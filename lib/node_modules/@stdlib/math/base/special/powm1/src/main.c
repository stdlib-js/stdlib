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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

#include "stdlib/math/base/special/powm1.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/expm1.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/trunc.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/fmod.h"

/**
* Evaluates `bˣ - 1`.
*
* @param x    base
* @param y    exponent
* @return     function value
*
* @example
* double out = stdlib_base_powm1( 2.0, 3.0 );
* // returns 7.0
*
* @example
* double out = stdlib_base_powm1( 4.0, 0.5 );
* // returns 1.0
*/
double stdlib_base_powm1( const double b, const double x ) {
	double result;
	double bc;
	double y;

	if ( stdlib_base_is_nan( b ) || stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( x == 0.0 ) {
		// Any number raised to zero (including 0) is always 1 => b^0 - 1 = 0
		return 0.0;
	}
	if ( b == 0.0 ) {
		// Zero raised to any number (except 0) is always zero => 0^x - 1 = -1
		return -1.0;
	}
	bc = b;
	if ( b < 0.0 && stdlib_base_fmod( x, 2.0 ) == 0 ) {
		// If `x` is even, recognize that `(-b)**x == (b)**x`...
		bc = -b;
	}
	if ( bc > 0.0 ) {
		if ( stdlib_base_abs( x * ( bc - 1.0 ) ) < 0.5 || stdlib_base_abs( x ) < 0.2 ) {
			// No good/quick approximation for ln(b)*x, so we have to evaluate...
			y = stdlib_base_ln( bc ) * x;
			if ( y < 0.5 ) {
				return stdlib_base_expm1( y );
			}
		}
	} else if ( stdlib_base_trunc( x ) != x ) {
		// Exponentiation would yield a complex result...
		return 0.0 / 0.0; // NaN
	}
	result = stdlib_base_pow( bc, x ) - 1.0;
	if ( stdlib_base_is_infinite( result ) || stdlib_base_is_nan( result ) ) {
		return 0.0 / 0.0; // NaN
	}
	return result;
}
