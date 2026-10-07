/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/trunc10f.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/log10f.h"

/**
* Rounds a single-precision floating-point number to the nearest power of `10` toward zero.
*
* @param x    input value
* @return     rounded value
*
* @example
* float out = stdlib_base_trunc10f( 13.0f );
* // returns 10.0f
*/
float stdlib_base_trunc10f( const float x ) {
	float ax;
	float e;
	float y;

	if ( stdlib_base_is_nanf( x ) || stdlib_base_is_infinitef( x ) || x == 0.0f ) {
		return x;
	}
	ax = stdlib_base_absf( x );

	// Solve the equation `10^e = ax` for `e` and find the exponent of the previous integer power of ten:
	e = stdlib_base_floorf( stdlib_base_log10f( ax ) );

	// Compute the integer power of ten (note that the power of ten is computed in double-precision and then rounded to single-precision, as this yields the correctly rounded single-precision power of ten for every exponent in the single-precision range, which is not true for `powf`):
	y = (float)stdlib_base_pow( 10.0, (double)e );

	return ( x < 0.0f ) ? -y : y;
}
