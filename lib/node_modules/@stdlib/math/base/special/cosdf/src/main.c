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

#include "stdlib/math/base/special/cosdf.h"
#include "stdlib/math/base/special/kernel_sinf.h"
#include "stdlib/math/base/special/kernel_cosf.h"
#include "stdlib/math/base/special/deg2radf.h"
#include "stdlib/math/base/special/absf.h"
#include "stdlib/math/base/special/fmodf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"

/**
* Computes the cosine of a single-precision floating-point number (in degrees).
*
* @param x    input value (in degrees)
* @return     cosine
*
* @example
* float y = stdlib_base_cosdf( 0.0f );
* // returns 1.0f
*/
float stdlib_base_cosdf( const float x ) {
	float rx;

	if ( stdlib_base_is_infinitef( x ) || stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}

	rx = stdlib_base_absf( stdlib_base_fmodf( x, 360.0f ) );

	if ( rx <= 45.0f ) {
		return stdlib_base_kernel_cosf( (double)stdlib_base_deg2radf( rx ) );
	}
	if ( rx < 135.0f ) {
		return stdlib_base_kernel_sinf( (double)stdlib_base_deg2radf( 90.0f-rx ) );
	}
	if ( rx <= 225.0f ) {
		return -stdlib_base_kernel_cosf( (double)stdlib_base_deg2radf( 180.0f-rx ) );
	}
	if ( rx < 315.0f ) {
		return stdlib_base_kernel_sinf( (double)stdlib_base_deg2radf( rx-270.0f ) );
	}
	return stdlib_base_kernel_cosf( (double)stdlib_base_deg2radf( 360.0f-rx ) );
}
