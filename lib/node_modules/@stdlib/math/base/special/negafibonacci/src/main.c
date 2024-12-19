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

#include "stdlib/math/base/special/negafibonacci.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_integer.h"
#include "stdlib/constants/float64/max_safe_nth_fibonacci.h"

static const double negafibonacci_value[ 79 ] = {
	0.0,
	1.0,
	-1.0,
	2.0,
	-3.0,
	5.0,
	-8.0,
	13.0,
	-21.0,
	34.0,
	-55.0,
	89.0,
	-144.0,
	233.0,
	-377.0,
	610.0,
	-987.0,
	1597.0,
	-2584.0,
	4181.0,
	-6765.0,
	10946.0,
	-17711.0,
	28657.0,
	-46368.0,
	75025.0,
	-121393.0,
	196418.0,
	-317811.0,
	514229.0,
	-832040.0,
	1346269.0,
	-2178309.0,
	3524578.0,
	-5702887.0,
	9227465.0,
	-14930352.0,
	24157817.0,
	-39088169.0,
	63245986.0,
	-102334155.0,
	165580141.0,
	-267914296.0,
	433494437.0,
	-701408733.0,
	1134903170.0,
	-1836311903.0,
	2971215073.0,
	-4807526976.0,
	7778742049.0,
	-12586269025.0,
	20365011074.0,
	-32951280099.0,
	53316291173.0,
	-86267571272.0,
	139583862445.0,
	-225851433717.0,
	365435296162.0,
	-591286729879.0,
	956722026041.0,
	-1548008755920.0,
	2504730781961.0,
	-4052739537881.0,
	6557470319842.0,
	-10610209857723.0,
	17167680177565.0,
	-27777890035288.0,
	44945570212853.0,
	-72723460248141.0,
	117669030460994.0,
	-190392490709135.0,
	308061521170129.0,
	-498454011879264.0,
	806515533049393.0,
	-1304969544928657.0,
	2111485077978050.0,
	-3416454622906707.0,
	5527939700884757.0,
	-8944394323791464.0
};

/**
* Computes the nth negaFibonacci number.
*
* @param n    input value
* @return     output value
*
* @example
* double out = stdlib_base_negafibonacci( -1 );
* // returns 1
*/
double stdlib_base_negafibonacci( const int32_t n ) {
	int32_t an;
	if ( n > 0 ) {
		return 0.0 / 0.0; // NaN
	}
	an = stdlib_base_abs( n );
	if ( an > STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_FIBONACCI ) {
		return 0.0 / 0.0; // NaN
	}
	return negafibonacci_value[ an ];
}
