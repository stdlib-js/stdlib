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

#include "stdlib/math/base/special/wrap.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/trunc.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/assert/is_negative_zero.h"

/**
* Wraps a value on the half-open interval [min,max).
*
* @param v    input value
* @param min  minimum value
* @param max  maximum value
* @return     wrapped value
*
* @example
* double v = stdlib_base_wrap( 3.14, 0.0, 5.0 );
* // returns 3.14
*/
double stdlib_base_wrap( const double v, const double min, const double max ) {
	double delta;
	double maxc;
	double minc;
	double vc;

	if ( stdlib_base_is_nan( v ) || stdlib_base_is_nan( min ) || stdlib_base_is_nan( max ) || max <= min ) {
		return 0.0 / 0.0; // NaN
	}
	maxc = max;
	minc = min;
	vc = v;

	// Normalize +-0 to +0...
	if ( stdlib_base_is_negative_zero( vc ) ) {
		vc = 0.0;
	}
	if ( stdlib_base_is_negative_zero( minc ) ) {
		minc = 0.0;
	}
	if ( stdlib_base_is_negative_zero( maxc ) ) {
		maxc = 0.0;
	}
	// Simple case where value is already within range...
	if ( minc <= vc && vc < maxc ) {
		return vc;
	}
	// Perform range reduction...
	delta = maxc - minc;
	if ( vc < minc ) {
		vc += delta * ( stdlib_base_trunc( ( minc - vc ) / delta ) + 1.0 );
	}
	return minc + ( stdlib_base_fmod( vc - minc, delta ) );
}
