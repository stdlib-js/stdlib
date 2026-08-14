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

#include "stdlib/math/base/special/wrapf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/truncf.h"
#include "stdlib/math/base/special/fmodf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"

/**
* Wraps a single-precision floating-point value to the half-open interval [min,max).
*
* @param v    input value
* @param min  minimum value
* @param max  maximum value
* @return     wrapped value
*
* @example
* float v = stdlib_base_wrapf( 3.14f, 0.0f, 5.0f );
* // returns ~3.14f
*/
float stdlib_base_wrapf( const float v, const float min, const float max ) {
	float delta;
	float maxc;
	float minc;
	float vc;

	if ( stdlib_base_is_nanf( v ) || stdlib_base_is_nanf( min ) || stdlib_base_is_nanf( max ) || max <= min ) {
		return 0.0f / 0.0f; // NaN
	}
	maxc = max;
	minc = min;
	vc = v;

	// Normalize +-0 to +0...
	if ( stdlib_base_is_negative_zerof( vc ) ) {
		vc = 0.0f;
	}
	if ( stdlib_base_is_negative_zerof( minc ) ) {
		minc = 0.0f;
	}
	if ( stdlib_base_is_negative_zerof( maxc ) ) {
		maxc = 0.0f;
	}
	// Simple case where value is already within range...
	if ( minc <= vc && vc < maxc ) {
		return vc;
	}
	// Perform range reduction...
	delta = maxc - minc;
	if ( vc < minc ) {
		vc += delta * ( stdlib_base_truncf( ( minc - vc ) / delta ) + 1.0f );
	}
	return minc + ( stdlib_base_fmodf( vc - minc, delta ) );
}
