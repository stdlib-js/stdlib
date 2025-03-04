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

#include "stdlib/math/base/assert/is_prime.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/constants/float64/max_safe_integer.h"
#include "stdlib/math/base/special/fmod.h"
#include <stdint.h>

static const double WHEEL_PRIMES[45] = {
	11.0, 13.0, 17.0, 19.0, 23.0, 29.0, 31.0, 37.0, 41.0, 43.0, 47.0, 53.0, 59.0, 61.0, 67.0, 71.0, 73.0, 79.0, 83.0, 89.0, 97.0,
	101.0, 103.0, 107.0, 109.0, 113.0, 127.0, 131.0, 137.0, 139.0, 149.0, 151.0, 157.0, 163.0, 167.0, 173.0, 179.0, 181.0,
	191.0, 193.0, 197.0, 199.0, 211.0
};

/**
* Tests if a finite double-precision floating-point number is a prime number.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_is_prime( 3.0 );
* // returns true
*/
bool stdlib_base_is_prime( const double x ) {
	int32_t i;
	double N;

	// Check whether the number is an integer...
	if ( stdlib_base_floor( x ) != x ) {
		return false;
	}
	// Check whether the number is positive...
	if ( x <= 3.0 ) {
		return ( x > 1.0 ); // primes: 2.0, 3.0
	}
	// Check whether the number is even...
	if ( x > STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER || ( stdlib_base_fmod( x, 2.0 ) ) == 0.0 ) {
		return false;
	}
	// Check for small primes...
	if ( x < 9.0 ) {
		return true; // primes: 5.0, 7.0
	}
	// Check whether the number is evenly divisible by `3`...
	if ( stdlib_base_fmod( x, 3.0 ) == 0.0 ) {
		return false;
	}
	// Check whether the number is evenly divisible by `5`...
	if ( stdlib_base_fmod( x, 5.0 ) == 0.0 ) {
		return false;
	}
	// Check whether the number is evenly divisible by `7`...
	if ( stdlib_base_fmod( x, 7.0 ) == 0.0 ) {
		return false;
	}
	// Check whether the number is a prime number in the wheel...
	for ( i = 0; i < 45; i++ ) {
		if ( WHEEL_PRIMES[ i ] == x ) {
			return true;
		}
	}
	// Use trial division (with wheel factorization; see https://en.wikipedia.org/wiki/Wheel_factorization) to detect composite numbers, leveraging the fact that all primes greater than `210` are of the form `210k±1`...
	N = stdlib_base_floor( stdlib_base_sqrt( x ) );
	for ( i = 11; i <= N; i += 210 ) {
		if (
			stdlib_base_fmod( x, i ) == 0.0 ||           // 11
			stdlib_base_fmod( x, ( i + 2 ) ) == 0.0 ||   // 13
			stdlib_base_fmod( x, ( i + 6 ) ) == 0.0 ||   // 17
			stdlib_base_fmod( x, ( i + 8 ) ) == 0.0 ||   // 19
			stdlib_base_fmod( x, ( i + 12 ) ) == 0.0 ||  // 23
			stdlib_base_fmod( x, ( i + 18 ) ) == 0.0 ||  // 29
			stdlib_base_fmod( x, ( i + 20 ) ) == 0.0 ||  // 31
			stdlib_base_fmod( x, ( i + 26 ) ) == 0.0 ||  // 37
			stdlib_base_fmod( x, ( i + 30 ) ) == 0.0 ||  // 41
			stdlib_base_fmod( x, ( i + 32 ) ) == 0.0 ||  // 43
			stdlib_base_fmod( x, ( i + 36 ) ) == 0.0 ||  // 47
			stdlib_base_fmod( x, ( i + 42 ) ) == 0.0 ||  // 53
			stdlib_base_fmod( x, ( i + 48 ) ) == 0.0 ||  // 59
			stdlib_base_fmod( x, ( i + 50 ) ) == 0.0 ||  // 61
			stdlib_base_fmod( x, ( i + 56 ) ) == 0.0 ||  // 67
			stdlib_base_fmod( x, ( i + 60 ) ) == 0.0 ||  // 71
			stdlib_base_fmod( x, ( i + 62 ) ) == 0.0 ||  // 73
			stdlib_base_fmod( x, ( i + 68 ) ) == 0.0 ||  // 79
			stdlib_base_fmod( x, ( i + 72 ) ) == 0.0 ||  // 83
			stdlib_base_fmod( x, ( i + 78 ) ) == 0.0 ||  // 89
			stdlib_base_fmod( x, ( i + 86 ) ) == 0.0 ||  // 97
			stdlib_base_fmod( x, ( i + 90 ) ) == 0.0 ||  // 101
			stdlib_base_fmod( x, ( i + 92 ) ) == 0.0 ||  // 103
			stdlib_base_fmod( x, ( i + 96 ) ) == 0.0 ||  // 107
			stdlib_base_fmod( x, ( i + 98 ) ) == 0.0 ||  // 109
			stdlib_base_fmod( x, ( i + 102 ) ) == 0.0 || // 113
			stdlib_base_fmod( x, ( i + 110 ) ) == 0.0 || // 121 (relatively prime)
			stdlib_base_fmod( x, ( i + 116 ) ) == 0.0 || // 127
			stdlib_base_fmod( x, ( i + 120 ) ) == 0.0 || // 131
			stdlib_base_fmod( x, ( i + 126 ) ) == 0.0 || // 137
			stdlib_base_fmod( x, ( i + 128 ) ) == 0.0 || // 139
			stdlib_base_fmod( x, ( i + 132 ) ) == 0.0 || // 143 (relatively prime)
			stdlib_base_fmod( x, ( i + 138 ) ) == 0.0 || // 149
			stdlib_base_fmod( x, ( i + 140 ) ) == 0.0 || // 151
			stdlib_base_fmod( x, ( i + 146 ) ) == 0.0 || // 157
			stdlib_base_fmod( x, ( i + 152 ) ) == 0.0 || // 163
			stdlib_base_fmod( x, ( i + 156 ) ) == 0.0 || // 167
			stdlib_base_fmod( x, ( i + 158 ) ) == 0.0 || // 169 (relatively prime)
			stdlib_base_fmod( x, ( i + 162 ) ) == 0.0 || // 173
			stdlib_base_fmod( x, ( i + 168 ) ) == 0.0 || // 179
			stdlib_base_fmod( x, ( i + 170 ) ) == 0.0 || // 181
			stdlib_base_fmod( x, ( i + 176 ) ) == 0.0 || // 187 (relatively prime)
			stdlib_base_fmod( x, ( i + 180 ) ) == 0.0 || // 191
			stdlib_base_fmod( x, ( i + 182 ) ) == 0.0 || // 193
			stdlib_base_fmod( x, ( i + 186 ) ) == 0.0 || // 197
			stdlib_base_fmod( x, ( i + 188 ) ) == 0.0 || // 199
			stdlib_base_fmod( x, ( i + 198 ) ) == 0.0 || // 209 (relatively prime)
			stdlib_base_fmod( x, ( i + 200 ) ) == 0.0    // 211
		) {
			return false;
		}
	}
	return true;
}
