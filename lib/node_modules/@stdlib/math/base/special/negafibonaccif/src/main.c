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

#include "stdlib/math/base/special/negafibonaccif.h"
#include "stdlib/math/base/assert/is_integerf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/constants/float32/max_safe_nth_fibonacci.h"
#include <stdlib.h>

static const float negafibonaccif_value[ 37 ] = {
	0.0f,
	1.0f,
	-1.0f,
	2.0f,
	-3.0f,
	5.0f,
	-8.0f,
	13.0f,
	-21.0f,
	34.0f,
	-55.0f,
	89.0f,
	-144.0f,
	233.0f,
	-377.0f,
	610.0f,
	-987.0f,
	1597.0f,
	-2584.0f,
	4181.0f,
	-6765.0f,
	10946.0f,
	-17711.0f,
	28657.0f,
	-46368.0f,
	75025.0f,
	-121393.0f,
	196418.0f,
	-317811.0f,
	514229.0f,
	-832040.0f,
	1346269.0f,
	-2178309.0f,
	3524578.0f,
	-5702887.0f,
	9227465.0f,
	-14930352.0f
};

/**
* Computes the nth negaFibonacci number as a single-precision floating-point number.
*
* @param n    input value
* @return     output value
*
* @example
* float out = stdlib_base_negafibonaccif( -1.0f );
* // returns 1.0f
*/
float stdlib_base_negafibonaccif( const float n ) {
	float an;
	if ( !stdlib_base_is_integerf( n ) || n > 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	an = stdlib_base_absf( n );
	if ( an > STDLIB_CONSTANT_FLOAT32_MAX_SAFE_NTH_FIBONACCI ) {
		return 0.0f / 0.0f; // NaN
	}
	return negafibonaccif_value[ (size_t)an ];
}
