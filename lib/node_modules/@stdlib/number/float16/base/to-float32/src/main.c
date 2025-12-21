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

#include "stdlib/number/float16/base/to_float32.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/constants/float16/sign_mask.h"
#include "stdlib/constants/float16/exponent_mask.h"
#include "stdlib/constants/float16/significand_mask.h"
#include "stdlib/constants/float16/exponent_bias.h"
#include "stdlib/constants/float16/num_significand_bits.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/exponent_bias.h"
#include "stdlib/constants/float32/num_significand_bits.h"
#include <stdint.h>
#include <string.h>

static const uint32_t FLOAT16_MAX_EXPONENT = 31;

/**
* Converts a half-precision floating-point number to the nearest single-precision floating-point number.
*
* @param x    half-precision floating-point number
* @return     single-precision floating-point number
*
* @example
* #include "stdlib/number/float16/ctor.h"
*
* stdlib_float16_t v = stdlib_float16_from_bits( 51648 ); // => -11.5
* float x = stdlib_base_float16_to_float32( v );
*/
float stdlib_base_float16_to_float32( const stdlib_float16_t x ) {
	uint32_t f32Exponent;
	uint32_t f16Mantissa;
	uint32_t f16Exponent;
	uint32_t sign;
	uint32_t f32;
	uint16_t f16;
	float result;

	f16 = stdlib_float16_to_bits( x );

	// Extract sign bit and shift left 16 bits:
	sign = ((uint32_t)(f16 & STDLIB_CONSTANT_FLOAT16_SIGN_MASK)) << 16;

	// Extract exponent bits:
	f16Exponent = (f16 & STDLIB_CONSTANT_FLOAT16_EXPONENT_MASK) >> STDLIB_CONSTANT_FLOAT16_NUM_SIGNIFICAND_BITS;

	// Extract mantissa bits:
	f16Mantissa = f16 & STDLIB_CONSTANT_FLOAT16_SIGNIFICAND_MASK;

	// Handle special cases...
	if ( f16Exponent == 0 ) {
		if ( f16Mantissa == 0 ) {
			f32 = sign;
			memcpy( &result, &f32, sizeof(float) );
			return result;
		}
		// Denormalized number which should be converted to normalized a float32...
		f32Exponent = 1;
		while ( ( f16Mantissa & 0x0400 ) == 0 ) {
			f16Mantissa <<= 1;
			f32Exponent -= 1;
		}
		f16Mantissa &= STDLIB_CONSTANT_FLOAT16_SIGNIFICAND_MASK;
		f32Exponent = f32Exponent + STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS - STDLIB_CONSTANT_FLOAT16_EXPONENT_BIAS;
		f32 = sign | (f32Exponent << STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS) | (f16Mantissa << 13);
		memcpy( &result, &f32, sizeof(float) );
		return result;
	}
	// Check for Infinity or NaN:
	if (f16Exponent == FLOAT16_MAX_EXPONENT) {
		f32 = sign | STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK | (f16Mantissa << 13);
		memcpy( &result, &f32, sizeof(float) );
		return result;
	}
	// Normal case: convert exponent from float16 bias (15) to float32 bias (127)
	f32Exponent = f16Exponent + STDLIB_CONSTANT_FLOAT32_EXPONENT_BIAS - STDLIB_CONSTANT_FLOAT16_EXPONENT_BIAS;
	f32 = sign | (f32Exponent << STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS) | (f16Mantissa << 13);
	memcpy( &result, &f32, sizeof(float) );
	return result;
}
