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
*/

#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/number/float64/base/normalize.h"
#include "stdlib/number/float64/base/exponent.h"
#include "stdlib/number/float64/base/to_words.h"
#include "stdlib/number/float64/base/from_words.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/min_base2_exponent_subnormal.h"
#include "stdlib/constants/float64/max_base2_exponent.h"
#include "stdlib/constants/float64/max_base2_exponent_subnormal.h"
#include "stdlib/constants/float64/exponent_bias.h"
#include <stdint.h>

// 1/(1<<52) = 1/(2**52) = 1/4503599627370496
static const double TWO52_INV = 2.220446049250313e-16;

// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
static const uint32_t CLEAR_EXP_MASK = 2148532223;

/**
* Multiplies a double-precision floating-point number by an integer power of two.
*
* @param frac    input value
* @param exp     integer power of two
* @return        product
*
* @example
* double out = stdlib_base_ldexp( 0.5, 3 ); // 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*/
double stdlib_base_ldexp( const double frac, const int32_t exp ) {
	uint32_t high;
	uint32_t low;
	int32_t e;
	double m;
	double y;
	if ( exp == 0 || frac == 0.0 || stdlib_base_is_nan( frac ) || stdlib_base_is_infinite( frac ) ) {
		return frac;
	}
	// Normalize the input fraction:
	stdlib_base_float64_normalize( frac, &y, &e );

	// Extract the exponent from `frac` and add it to `exp`:
	e += exp + stdlib_base_float64_exponent( y );

	// Check for underflow/overflow...
	if ( e < STDLIB_CONSTANT_FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL ) {
		return stdlib_base_copysign( 0.0, y );
	}
	if ( e > STDLIB_CONSTANT_FLOAT64_MAX_BASE2_EXPONENT ) {
		if ( y < 0.0 ) {
			return STDLIB_CONSTANT_FLOAT64_NINF;
		}
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	// Check for a subnormal and scale accordingly to retain precision...
	if ( e <= STDLIB_CONSTANT_FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL ) {
		e += 52;
		m = TWO52_INV;
	} else {
		m = 1.0;
	}
	// Split the fraction into higher and lower order words:
	stdlib_base_float64_to_words( y, &high, &low );

	// Clear the exponent bits within the higher order word:
	high &= CLEAR_EXP_MASK;

	// Set the exponent bits to the new exponent:
	high |= ((e+STDLIB_CONSTANT_FLOAT64_EXPONENT_BIAS) << 20);

	// Create a new floating-point number:
	stdlib_base_float64_from_words( high, low, &y );
	return m * y;
}
