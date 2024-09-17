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

#include "stdlib/math/base/special/gcd.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib//constants/float64/ninf.h"
#include <stdint.h>

// 2^63 - 1
static const int64_t STDLIB_CONSTANT_INT64_MAX = 9223372036854775807;

/**
* Computes the greatest common divisor (gcd) using the binary GCD algorithm.
*
* @param a    first number
* @param b    second number
* @return     greatest common divisor
*
* @example
* double out = largeIntegers( 1.2676506002282294.0e+30, 9007199254740992.0 );
* // returns 9007199254740992.0
*/
static double largeIntegers( const double a, const double b ) {
	double ac;
	double bc;
	double k;
	double t;

	// Simple cases:
	if ( a == 0.0 ) {
		return b;
	}
	if ( b == 0.0 ) {
		return a;
	}
	ac = a;
	bc = b;
	k = 1.0;

	// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
	while ( stdlib_base_fmod( ac, 2.0 ) == 0.0 && stdlib_base_fmod( bc, 2.0 ) == 0.0 ) {
		ac /= 2.0; // right shift
		bc /= 2.0; // right shift
		k *= 2.0; // left shift
	}
	// Reduce `a` to an odd number...
	while ( stdlib_base_fmod( ac, 2.0 ) == 0.0 ) {
		ac /= 2.0; // right shift
	}
	// Henceforth, `a` is always odd...
	while ( bc ) {
		// Remove all factors of 2 in `b`, as they are not common...
		while ( stdlib_base_fmod( bc, 2.0 ) == 0.0 ) {
			bc /= 2.0; // right shift
		}
		// `a` and `b` are both odd. Swap values such that `b` is the larger of the two values, and then set `b` to the difference (which is even)...
		if ( ac > bc ) {
			t = bc;
			bc = ac;
			ac = t;
		}
		bc -= ac; // b=0 iff b=a
	}
	// Restore common factors of 2...
	return k * ac;
}

/**
* Computes the greatest common divisor (gcd) using the binary GCD algorithm and bitwise operations.
*
* @param a    first number
* @param b    second number
* @return     greatest common divisor
*
* @example
* double out = bitwise( 48.0, 18.0 );
* // returns 6.0
*/
static double bitwise( const double a, const double b ) {
	int64_t ac;
	int64_t bc;
	int64_t k;
	int64_t t;

	// Simple cases:
	if ( a == 0.0 ) {
		return b;
	}
	if ( b == 0.0 ) {
		return a;
	}
	ac = (int64_t)a;
	bc = (int64_t)b;
	k = 0;

	// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
	while ( (ac & 1) == 0 && (bc & 1) == 0 ) {
		ac >>= 1; // right shift
		bc >>= 1; // right shift
		k += 1;
	}
	// Reduce `a` to an odd number...
	while ( (ac & 1) == 0 ) {
		ac >>= 1; // right shift
	}
	// Henceforth, `a` is always odd...
	while ( bc ) {
		// Remove all factors of 2 in `b`, as they are not common...
		while ( (bc & 1) == 0 ) {
			bc >>= 1; // right shift
		}
		// `a` and `b` are both odd. Swap values such that `b` is the larger of the two values, and then set `b` to the difference (which is even)...
		if ( ac > bc ) {
			t = bc;
			bc = ac;
			ac = t;
		}
		bc -= ac; // b=0 iff b=a
	}
	// Restore common factors of 2...
	return ac << k;
}

/**
* Computes the greatest common divisor (gcd).
*
* @param a    first number
* @param b    second number
* @return     greatest common divisor
*
* @example
* double out = stdlib_base_gcd( 48.0, 18.0 );
* // returns 6.0
*/
double stdlib_base_gcd( const double a, const double b ) {
	double ac;
	double bc;

	if ( stdlib_base_is_nan( a ) || stdlib_base_is_nan( b ) ) {
		return 0.0/0.0; // NaN
	}
	if (
		a == STDLIB_CONSTANT_FLOAT64_PINF ||
		b == STDLIB_CONSTANT_FLOAT64_PINF ||
		a == STDLIB_CONSTANT_FLOAT64_NINF ||
		b == STDLIB_CONSTANT_FLOAT64_NINF
	) {
		return 0.0/0.0; // NaN
	}
	if ( !( stdlib_base_is_integer( a ) && stdlib_base_is_integer( b ) ) ) {
		return 0.0/0.0; // NaN
	}
	ac = a;
	bc = b;
	if ( ac < 0 ) {
		ac = -ac;
	}
	if ( bc < 0 ) {
		bc = -bc;
	}
	if ( ac <= STDLIB_CONSTANT_INT64_MAX && bc <= STDLIB_CONSTANT_INT64_MAX ) {
		return bitwise( ac, bc );
	}
	return largeIntegers( ac, bc );
}
