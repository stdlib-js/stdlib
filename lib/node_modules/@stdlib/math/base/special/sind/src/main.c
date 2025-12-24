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

#include "stdlib/math/base/special/sind.h"
#include "stdlib/math/base/special/kernel_sin.h"
#include "stdlib/math/base/special/kernel_cos.h"
#include "stdlib/math/base/special/deg2rad.h"
#include "stdlib/math/base/special/signum.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"

/**
* Computes the sine of an angle measured in degrees.
*
* @param x    input value (in degrees)
* @return     sine
*
* @example
* double y = stdlib_base_sind( 0.0 );
* // returns 0.0
*/
double stdlib_base_sind( const double x ) {
	double arx;
	double rx;

	if ( stdlib_base_is_infinite( x ) || stdlib_base_is_nan( x ) ) {
		return 0.0 / 0.0; // NaN
	}

	rx = stdlib_base_fmod( x, 360.0 );
	arx = stdlib_base_abs( rx );

	if ( rx == 0.0 ) {
		return rx;
	}
	if ( arx < 45.0 ) {
		return stdlib_base_kernel_sin( stdlib_base_deg2rad( rx ), 0.0 );
	}
	if ( arx <= 135.0 ) {
		return stdlib_base_signum( rx ) * stdlib_base_kernel_cos( stdlib_base_deg2rad( 90.0-arx ), 0.0 );
	}
	if ( arx == 180.0 ) {
		return stdlib_base_signum( rx ) * 0.0;
	}
	if ( arx < 225.0 ) {
		return stdlib_base_kernel_sin( stdlib_base_deg2rad( ( 180.0-arx )*stdlib_base_signum( rx ) ), 0.0 );
	}
	if ( arx <= 315.0 ) {
		return -stdlib_base_signum( rx ) * stdlib_base_kernel_cos( stdlib_base_deg2rad( 270.0-arx ), 0.0 );
	}
	return stdlib_base_kernel_sin( stdlib_base_deg2rad( rx-( 360.0*stdlib_base_signum( rx ) ) ), 0.0 );
}
