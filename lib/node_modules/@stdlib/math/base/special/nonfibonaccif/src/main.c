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

#include "stdlib/math/base/special/nonfibonaccif.h"
#include "stdlib/constants/float32/nan.h"
#include "stdlib/constants/float32/phi.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/math/base/assert/is_integerf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/lnf.h"
#include <stdint.h>

static const float SQRT5 = 2.23606797749979f;
static const float LN_PHI = 0.48121182506f;

/**
* Computes the nth non-Fibonacci single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float y = stdlib_base_nonfibonaccif( 2 );
* // returns 6.0f
*
* @example
* float y = stdlib_base_nonfibonaccif( 1 );
* // returns 4.0f
*
* @example
* float y = stdlib_base_nonfibonaccif( 3 );
* // returns 7.0f
*
* @example
* float y = stdlib_base_nonfibonaccif( NaN );
* // returns NaN
*
* @example
* float y = stdlib_base_nonfibonaccif( 3.14f );
* // returns NaN
*
* @example
* float y = stdlib_base_nonfibonaccif( -1 );
* // returns NaN
*/
float stdlib_base_nonfibonaccif( const int32_t n ) {
	int32_t m;
	float a;
	float b;

	if (
		stdlib_base_is_nanf( n ) ||
		!stdlib_base_is_integerf( n ) ||
		n < 1.0f ||
		n == STDLIB_CONSTANT_FLOAT32_PINF
	) {
		return STDLIB_CONSTANT_FLOAT32_NAN;
	}
	m = n + 1;
	a = stdlib_base_lnf( m * SQRT5 ) / LN_PHI;
	b = stdlib_base_lnf( ( SQRT5 * ( m + a ) ) - 5.0f + ( 3.0f / m ) ) / LN_PHI;
	return stdlib_base_floorf( m + b - 2.0f );
}
