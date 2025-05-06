/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/lucas.h"
#include "stdlib/constants/float64/max_safe_nth_lucas.h"

static const int64_t lucas_value[ 77 ] = {
	2,
	1,
	3,
	4,
	7,
	11,
	18,
	29,
	47,
	76,
	123,
	199,
	322,
	521,
	843,
	1364,
	2207,
	3571,
	5778,
	9349,
	15127,
	24476,
	39603,
	64079,
	103682,
	167761,
	271443,
	439204,
	710647,
	1149851,
	1860498,
	3010349,
	4870847,
	7881196,
	12752043,
	20633239,
	33385282,
	54018521,
	87403803,
	141422324,
	228826127,
	370248451,
	599074578,
	969323029,
	1568397607,
	2537720636,
	4106118243,
	6643838879,
	10749957122,
	17393796001,
	28143753123,
	45537549124,
	73681302247,
	119218851371,
	192900153618,
	312119004989,
	505019158607,
	817138163596,
	1322157322203,
	2139295485799,
	3461452808002,
	5600748293801,
	9062201101803,
	14662949395604,
	23725150497407,
	38388099893011,
	62113250390418,
	100501350283429,
	162614600673847,
	263115950957276,
	425730551631123,
	688846502588399,
	1114577054219522,
	1803423556807921,
	2918000611027443,
	4721424167835364,
	7639424778862807
};

/**
* Computes the nth Lucas number.
*
* @param n     input value
* @return      output value
*
* @example
* double out = stdlib_base_lucas( 1 );
* // returns 1
*
* @example
* double out = stdlib_base_lucas( -1 );
* // returns NaN
*/
double stdlib_base_lucas( const int32_t n ) {
	if ( n < 0 || n > STDLIB_CONSTANT_FLOAT64_MAX_SAFE_NTH_LUCAS ) {
		return 0.0 / 0.0; // NaN
	}
	return lucas_value[ n ];
}
