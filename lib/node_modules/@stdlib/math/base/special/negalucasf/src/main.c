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

#include "stdlib/math/base/special/negalucasf.h"
#include "stdlib/math/base/special/labs.h"
#include "stdlib/constants/float32/max_safe_nth_lucas.h"

static const int32_t negalucasf_value[ 35 ] = {
	2,
	-1,
	3,
	-4,
	7,
	-11,
	18,
	-29,
	47,
	-76,
	123,
	-199,
	322,
	-521,
	843,
	-1364,
	2207,
	-3571,
	5778,
	-9349,
	15127,
	-24476,
	39603,
	-64079,
	103682,
	-167761,
	271443,
	-439204,
	710647,
	-1149851,
	1860498,
	-3010349,
	4870847,
	-7881196,
	12752043
};

/**
* Computes the nth negaLucas number.
*
* @param n     input value
* @return      output value
*
* @example
* float out = stdlib_base_negalucasf( -1 );
* // returns -1
*
* @example
* float out = stdlib_base_negalucasf( 1 );
* // returns NaN
*/
float stdlib_base_negalucasf( const int32_t n ) {
	int32_t an = stdlib_base_labs( n );
	if ( n > 0 || an > STDLIB_CONSTANT_FLOAT32_MAX_SAFE_NTH_LUCAS ) {
		return 0.0f / 0.0f; // NaN
	}
	return negalucasf_value[ an ];
}
