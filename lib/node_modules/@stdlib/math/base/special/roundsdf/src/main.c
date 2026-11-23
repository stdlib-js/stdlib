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

#include "stdlib/math/base/special/roundsdf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/number/float32/base/exponent.h"
#include "stdlib/math/base/special/log10f.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/roundf.h"
#include "stdlib/math/base/special/powf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/lnf.h"
#include <stdint.h>

/**
* Rounds a single-precision floating-point number to the nearest value with `n` significant figures.
*
* @param x   input value
* @param n   number of significant figures
* @param b   base
* @return    rounded value
*
* @example
* float v = stdlib_base_roundsdf( 3.141592653589793f, 3, 10 );
* // returns ~3.14f
*/
float stdlib_base_roundsdf( const float x, const int32_t n, const int32_t b ) {
	float exp;
	float s;
	float y;

	if ( stdlib_base_is_nanf( x ) || n < 1 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( stdlib_base_is_infinitef( x ) || x == 0.0f ) {
		return x;
	}
	if ( b == 10 ) {
		exp = stdlib_base_log10f( stdlib_base_absf( x ) );
	} else if ( b == 2 ) {
		exp = (float)stdlib_base_float32_exponent( stdlib_base_absf( x ) );
	} else {
		exp = stdlib_base_lnf( stdlib_base_absf( x ) ) / stdlib_base_lnf( (float)b );
	}
	exp = stdlib_base_floorf( exp - (float)n + 1.0f );
	s = stdlib_base_powf( (float)b, stdlib_base_absf( exp ) );

	// Check for overflow:
	if ( stdlib_base_is_infinitef( s ) ) {
		return x;
	}
	// To avoid numerical stability issues due to floating-point rounding error, we must treat positive and negative exponents separately:
	if ( exp < 0.0f ) {
		y = stdlib_base_roundf( x * s ) / s;
	} else {
		y = stdlib_base_roundf( x / s ) * s;
	}
	// Check for overflow:
	if ( stdlib_base_is_infinitef( y ) ) {
		return x;
	}
	return y;
}
