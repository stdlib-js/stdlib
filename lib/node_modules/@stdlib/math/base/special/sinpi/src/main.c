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

#include "stdlib/math/base/special/sinpi.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/cos.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/constants/float64/pi.h"

/**
* Computes the value of `sin(πx)`.
*
* ## Notes
*
* -   `sin(-x) = -sin(x)`
* -   `sin(+n) = +0`, where `n` is a positive integer
* -   `sin(-n) = -sin(+n) = -0`, where `n` is a positive integer
* -   `cos(-x) = cos(x)`
*
* @param x    input value
* @return     function value
*
* @example
* double y = stdlib_base_sinpi( 0.5 );
* // returns 1.0
*/
double stdlib_base_sinpi( const double x ) {
	double ar;
	double r;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		return 0.0 / 0.0; // NaN
	}

	// Argument reduction (reduce to [0,2))...
	r = stdlib_base_fmod( x, 2.0 ); // sign preserving
	ar = stdlib_base_abs( r );

	// If `x` is an integer, the mod is an integer...
	if ( ar == 0.0 || ar == 1.0 ) {
		return stdlib_base_copysign( 0.0, r );
	}
	if ( ar < 0.25 ) {
		return stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_PI * r );
	}

	// In each of the following, we further reduce to [-π/4,π/4)...
	if ( ar < 0.75 ) {
		ar = 0.5 - ar;
		return stdlib_base_copysign( stdlib_base_cos( STDLIB_CONSTANT_FLOAT64_PI * ar ), r );
	}
	if ( ar < 1.25 ) {
		r = stdlib_base_copysign( 1.0, r ) - r;
		return stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_PI * r );
	}
	if ( ar < 1.75 ) {
		ar -= 1.5;
		return -stdlib_base_copysign( stdlib_base_cos( STDLIB_CONSTANT_FLOAT64_PI * ar ), r );
	}
	r -= stdlib_base_copysign( 2.0, r );
	return stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_PI * r );
}
