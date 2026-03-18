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

#include "stdlib/math/base/special/tribonaccif.h"
#include "stdlib/constants/float32/max_safe_nth_tribonacci.h"
#include "stdlib/math/base/assert/is_nonnegative_integerf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include <stdint.h>
#include <stdlib.h>

static const int32_t tribonaccif_value[ 31 ] = {
	0,
	0,
	1,
	1,
	2,
	4,
	7,
	13,
	24,
	44,
	81,
	149,
	274,
	504,
	927,
	1705,
	3136,
	5768,
	10609,
	19513,
	35890,
	66012,
	121415,
	223317,
	410744,
	755476,
	1389537,
	2555757,
	4700770,
	8646064,
	15902591
};

/**
* Computes the nth Tribonacci number as a single-precision floating-point number.
*
* @param n     input value
* @return      output value
*
* @example
* float out = stdlib_base_tribonaccif( 1.0f );
* // returns 0.0f
*/
float stdlib_base_tribonaccif( const float n ) {
	if ( stdlib_base_is_nanf( n ) || !stdlib_base_is_nonnegative_integerf( n ) || n > STDLIB_CONSTANT_FLOAT32_MAX_SAFE_NTH_TRIBONACCI ) {
		return 0.0f / 0.0f; // NaN
	}
	return tribonaccif_value[ (size_t)n ];
}
