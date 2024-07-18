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

#include "stdlib/math/base/special/cospi.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/cos.h"
#include "stdlib/math/base/special/sin.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/fmod.h"
#include "stdlib/constants/float64/pi.h"
#include "stdlib/constants/float64/max_safe_integer.h"

static const double MAX_INTEGER_P1 = STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER + 1;

/**
* Computes the value of `cos(πx)`.
*
* ## Notes
*
* -   `cos(-x) = cos(x)`
* -   `sin(-x) = -sin(x)`
* -   `cos(π/2) = 0`
* -   `cos(0) = 1`
* -   `cos(π) = -1`
*
* @param x    input value
* @return     function value
*
* @example
* double y = stdlib_base_cospi( 0.5 );
* // returns 0.0
*/
double stdlib_base_cospi( const double x ) {
	double ax;
	double ix;
	double rx;
	double y;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_infinite( x ) ) {
		return 0.0 / 0.0; // NaN
	}
	ax = stdlib_base_abs( x );
	if ( ax > MAX_INTEGER_P1 ) {
		// Always even integer...
		return 1.0;
	}

	// Argument reduction (reduce to [0,1))...
	ix = stdlib_base_floor( ax );
	rx = ax - ix;
	if ( rx == 0.5 ) {
		return 0.0;
	}
	if ( rx < 0.25 ) {
		y = stdlib_base_cos( STDLIB_CONSTANT_FLOAT64_PI * rx );
	} else if ( rx < 0.75 ) {
		rx = 0.5 - rx;
		y = stdlib_base_sin( STDLIB_CONSTANT_FLOAT64_PI * rx ); // Recall sin(-x) = -sin(x), thus returned result will be properly signed
	} else {
		rx = 1.0 - rx;
		y = -stdlib_base_cos( STDLIB_CONSTANT_FLOAT64_PI*rx );
	}

	// If the integer of `x` is odd, we need to flip the sign...
	return ( stdlib_base_fmod( ix, 2.0 ) == 1.0 ) ? -y : y;
}
