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

#include "stdlib/math/base/special/tribonacci.h"
#include "stdlib/constants/float64/max_safe_nth_tribonacci.h"

static const int64_t tribonacci_value[ 64 ] = {
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
	15902591,
	29249425,
	53798080,
	98950096,
	181997601,
	334745777,
	615693474,
	1132436852,
	2082876103,
	3831006429,
	7046319384,
	12960201916,
	23837527729,
	43844049029,
	80641778674,
	148323355432,
	272809183135,
	501774317241,
	922906855808,
	1697490356184,
	3122171529233,
	5742568741225,
	10562230626642,
	19426970897100,
	35731770264967,
	65720971788709,
	120879712950776,
	222332455004452,
	408933139743937,
	752145307699165,
	1383410902447554,
	2544489349890656,
	4680045560037375,
	8607945812375585
};

/**
* Computes the nth Tribonacci number.
*
* @param n     input value
* @return      output value
*
* @example
* double out = stdlib_base_tribonacci( 1 );
* // returns 0
*/
double stdlib_base_tribonacci( const int32_t n ) {
	if ( n < 0 || n > STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_TRIBONACCI ) {
		return 0.0 / 0.0; // NaN
	}
	return tribonacci_value[ n ];
}
