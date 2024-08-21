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

#include "stdlib/math/base/special/sincospi.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pi.h"

/**
* Simultaneously computes the sine and cosine of a number times π.
*
* @param x         input value
* @param sine      destination to store the sine
* @param cosine    destination to store the cosine
*
* @example
* double x = 0.0;
*
* double cosine;
* double sine;
* stdlib_base_sincospi( x, &sine, &cosine );
*/
void stdlib_base_sincospi( const double x, double* sine, double* cosine ) {
	double tmp;
	double ix;
	double ar;
	double r;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		*sine = 0.0 / 0.0; // NaN
		*cosine = 0.0 / 0.0; // NaN
		return;
	}
	r = stdlib_base_fmod( x, 2.0 );
	ar = stdlib_base_abs( r );
	if ( ar == 0.0 || ar == 1.0 ) {
		ix = stdlib_base_floor( ar );
		*sine = stdlib_base_copysign( 0.0, r );
		*cosine = ( stdlib_base_fmod( ix, 2.0 ) == 1 ) ? -1.0 : 1.0;
		return;
	}
	if ( ar < 0.25 ) {
		stdlib_base_sincos( STDLIB_CONSTANT_FLOAT64_PI * r, sine, cosine );
		return;
	}
	if ( ar < 0.75 ) {
		ar = 0.5 - ar;
		stdlib_base_sincos( STDLIB_CONSTANT_FLOAT64_PI * ar, sine, cosine );
		tmp = *sine;
		*sine = stdlib_base_copysign( *cosine, r );
		*cosine = tmp;
		return;
	}
	if ( ar < 1.25 ) {
		r = stdlib_base_copysign( 1.0, r ) - r;
		stdlib_base_sincos( STDLIB_CONSTANT_FLOAT64_PI * r, sine, cosine );
		*cosine *= -1;
		return;
	}
	if ( ar < 1.75 ) {
		ar -= 1.5;
		stdlib_base_sincos( STDLIB_CONSTANT_FLOAT64_PI * ar, sine, cosine );
		tmp = *sine;
		*sine = -stdlib_base_copysign( *cosine, r );
		*cosine = tmp;
		return;
	}
	r -= stdlib_base_copysign( 2.0, r );
	stdlib_base_sincos( STDLIB_CONSTANT_FLOAT64_PI * r, sine, cosine );
	return;
}
