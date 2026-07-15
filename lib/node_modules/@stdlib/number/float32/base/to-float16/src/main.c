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

#include "stdlib/number/float32/base/to_float16.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/constants/float32/sign_mask.h"
#include "stdlib/constants/float32/exponent_mask.h"
#include "stdlib/constants/float32/significand_mask.h"
#include "stdlib/constants/float32/num_significand_bits.h"
#include "stdlib/number/float32/base/exponent.h"
#include <stdint.h>
#include <string.h>

// VARIABLES //

static const uint32_t FLOAT32_MAX_EXPONENT = 255;
static const uint32_t FLOAT32_IMPLICIT_BIT = 0x800000; // 0x800000 = 8388608 => 0 00000001 00000000000000000000000
static const uint32_t FLOAT32_STICKY_MASK = 0xFFF;     // 0xFFF = 4095 => 0 00000000 00000000000111111111111
static const uint16_t UINT16_PINF = 0x7C00;            // 0x7C00 = 31744 => 0 11111 0000000000
static const uint16_t UINT16_NINF = 0xFC00;            // 0xFC00 = 64512 => 1 11111 0000000000
static const uint16_t UINT16_NAN = 0x7E00;             // 0x7E00 = 32256 => 0 11111 1000000000
static const uint16_t UINT16_POSITIVE_ZERO = 0x0000;   // 0x0000 = 0 => 0 00000 0000000000
static const uint16_t UINT16_NEGATIVE_ZERO = 0x8000;   // 0x8000 = 32768 => 1 00000 0000000000
static const uint16_t MAX_MANTISSA = 0x3FF;            // 0x3FF = 1023 => 0 00000 1111111111

/**
* Converts a single-precision floating-point number to the nearest half-precision floating-point number.
*
* @param x    single-precision floating-point number
* @return     half-precision floating-point number
*
* @example
* #include "stdlib/number/float16/ctor.h"
*
* stdlib_float16_t x = stdlib_base_float32_to_float16( 3.14f );
*/
stdlib_float16_t stdlib_base_float32_to_float16( const float x ) {
	stdlib_float16_t result;
	uint32_t f32Mantissa;
	uint32_t f32Exponent;
	uint32_t f16Mantissa;
	uint32_t sticky_bits;
	int32_t f16Exponent;
	uint32_t round_bit;
	uint32_t sign;
	uint32_t f32;
	int shift;

	// Copy float bits to uint32_t:
	memcpy( &f32, &x, sizeof(float) );

	// Extract sign bit and shift to bit 15:
	sign = ( f32 & STDLIB_CONSTANT_FLOAT32_SIGN_MASK ) >> 16;

	// Extract exponent bits:
	f32Exponent = ( f32 & STDLIB_CONSTANT_FLOAT32_EXPONENT_MASK ) >> STDLIB_CONSTANT_FLOAT32_NUM_SIGNIFICAND_BITS;

	// Extract mantissa bits:
	f32Mantissa = f32 & STDLIB_CONSTANT_FLOAT32_SIGNIFICAND_MASK;

	// Handle special cases...
	if ( f32Exponent == FLOAT32_MAX_EXPONENT ) {
		if ( f32Mantissa == 0 ) {
			if ( sign ) {
				result = stdlib_float16_from_bits( UINT16_NINF ); // -Infinity
			} else {
				result = stdlib_float16_from_bits( UINT16_PINF ); // +Infinity
			}
		} else {
			result = stdlib_float16_from_bits( UINT16_NAN ); // NaN
		}
		return result;
	}

	if ( f32Exponent == 0 && f32Mantissa == 0 ) {
		if (sign) {
			result = stdlib_float16_from_bits( UINT16_NEGATIVE_ZERO );
		} else {
			result = stdlib_float16_from_bits( UINT16_POSITIVE_ZERO );
		}
		return result;
	}

	// Convert exponent from float32 bias (127) to float16 bias (15):
	f16Exponent = stdlib_base_float32_exponent( x ) + 15;

	// Handle overflow (infinity in float16)...
	if ( f16Exponent >= 31 ) {
		if ( sign ) {
			result = stdlib_float16_from_bits( UINT16_NINF ); // -Infinity
		} else {
			result = stdlib_float16_from_bits( UINT16_PINF ); // +Infinity
		}
		return result;
	}

	// Handle underflow (subnormal or zero in float16)...
	if ( f16Exponent <= 0 ) {
		// Check if the value is too small to be represented even as a subnormal float16 number:
		if ( f16Exponent < -10 ) {
			// Too small, round to zero...
			if ( sign ) {
				result = stdlib_float16_from_bits( UINT16_NEGATIVE_ZERO );
			} else {
				result = stdlib_float16_from_bits( UINT16_POSITIVE_ZERO );
			}
			return result;
		}

		// Calculate the amount of right shift needed to denormalize the mantissa for subnormal representation:
		shift = 1 - f16Exponent;

		// Create an 11-bit mantissa by adding the implicit leading 1 bit and extracting the top 10 bits from mantissa:
		f32Mantissa |= FLOAT32_IMPLICIT_BIT;
		f16Mantissa = f32Mantissa >> ( 13 + shift );

		// Round to nearest, ties to even:
		round_bit = ( f32Mantissa >> ( 12 + shift ) ) & 1;
		sticky_bits = f32Mantissa & ( ( 1u << ( 12 + shift ) ) - 1 );

		if ( round_bit && ( sticky_bits || ( f16Mantissa & 1 ) ) ) {
			f16Mantissa += 1;
		}

		result = stdlib_float16_from_bits( (uint16_t)(sign | f16Mantissa) );
		return result;
	}

	// Extract the top 10 bits of the mantissa from 23 bits:
	f16Mantissa = f32Mantissa >> 13;

	// Extract the round bit (the first bit that will be truncated):
	round_bit = ( f32Mantissa >> 12 ) & 1;

	// Check sticky bits (all bits below bit 12):
	sticky_bits = f32Mantissa & FLOAT32_STICKY_MASK;

	if ( round_bit && ( sticky_bits || ( f16Mantissa & 1 ) ) ) {
		f16Mantissa += 1;

		// Check for mantissa overflow (carries into exponent)...
		if ( f16Mantissa > MAX_MANTISSA ) {
			f16Exponent += 1;
			f16Mantissa = 0;

			// Check for exponent overflow...
			if ( f16Exponent >= 31 ) {
				if ( sign ) {
					result = stdlib_float16_from_bits( UINT16_NINF ); // -Infinity
				} else {
					result = stdlib_float16_from_bits( UINT16_PINF ); // +Infinity
				}
				return result;
			}
		}
	}

	// Combine sign (1 bit), exponent (5 bits), and mantissa (10 bits):
	return stdlib_float16_from_bits( (uint16_t)(sign | (f16Exponent << 10) | f16Mantissa) );
}
