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

#include "stdlib/math/base/special/cosd.h"
#include "stdlib/math/base/special/kernel_sin.h"
#include "stdlib/math/base/special/kernel_cos.h"
#include "stdlib/math/base/special/deg2rad.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"

/**
* Computes the cosine of an angle measured in degrees.
*
* @param x    input value (in degrees)
* @return     cosine
*
* @example
* double y = stdlib_base_cosd( 0.0 );
* // returns 1.0
*/
double stdlib_base_cosd( const double x ) {
	double rx;

	if ( stdlib_base_is_infinite( x ) || stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}

	rx = stdlib_base_abs( stdlib_base_fmod( x, 360.0 ) );

	if ( rx <= 45.0 ) {
		return stdlib_base_kernel_cos( stdlib_base_deg2rad( rx ), 0.0 );
	}
	if ( rx < 135.0 ) {
		return stdlib_base_kernel_sin( stdlib_base_deg2rad( 90.0-rx ), 0.0 );
	}
	if ( rx <= 225.0 ) {
		return -stdlib_base_kernel_cos( stdlib_base_deg2rad( 180.0-rx ), 0.0 );
	}
	if ( rx < 315.0 ) {
		return stdlib_base_kernel_sin( stdlib_base_deg2rad( rx-270.0 ), 0.0 );
	}
	return stdlib_base_kernel_cos( stdlib_base_deg2rad( 360.0-rx ), 0.0 );
}
