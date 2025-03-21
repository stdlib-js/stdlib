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
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified according to project conventions.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/number/float64/base/signbit.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/atan.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/pi.h"
#include <stdint.h>

// MAIN //

/**
* Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @param y    `y` coordinate
* @param x    `x` coordinate
* @return      angle (in radians)
*
* @example
* double v = stdlib_base_atan2( 2.0, 2.0 ); // => stdlib_base_atan(1.0)
* // returns ~0.785
*
* @example
* double v = stdlib_base_atan2( 6.0, 2.0 ); // => stdlib_base_atan(3.0)
* // returns ~1.249
*
* @example
* double v = stdlib_base_atan2( -1.0, -1.0 ); // => stdlib_base_atan(1.0) - π
* // returns ~-2.356
*
* @example
* double v = stdlib_base_atan2( 3.0, 0.0 ); // => π/2
* // returns ~1.571
*
* @example
* double v = stdlib_base_atan2( -2.0, 0.0 ); // => -π/2
* // returns ~-1.571
*
* @example
* double v = stdlib_base_atan2( 0.0, 0.0 );
* // returns 0.0
*
* @example
* double v = stdlib_base_atan2( 3.0, NaN );
* // returns NaN
*
* @example
* double v = stdlib_base_atan2( NaN, 2.0 );
* // returns NaN
*/
double stdlib_base_atan2( const double y, const double x ) {
	double q;
	if ( stdlib_base_is_nan( x ) ||	stdlib_base_is_nan( y ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( stdlib_base_is_infinite( x ) ) {
		if ( x == STDLIB_CONSTANT_FLOAT64_PINF ) {
			if ( stdlib_base_is_infinite( y ) ) {
				return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PI / 4.0, y );
			}
			return stdlib_base_copysign( 0.0, y );
		}
		// Case: x is -Infinity
		if ( stdlib_base_is_infinite( y ) ) {
			return stdlib_base_copysign( 3.0 * STDLIB_CONSTANT_FLOAT64_PI / 4.0, y );
		}
		return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PI, y );
	}
	if ( stdlib_base_is_infinite( y ) ) {
		return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PI / 2.0, y );
	}
	if ( y == 0.0 ) {
		if ( x >= 0.0 && !stdlib_base_float64_signbit( x ) ) {
			return stdlib_base_copysign( 0.0, y );
		}
		return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PI, y );
	}
	if ( x == 0.0 ) {
		return stdlib_base_copysign( STDLIB_CONSTANT_FLOAT64_PI / 2.0, y );
	}
	q = stdlib_base_atan( y / x );
	if ( x < 0.0 ) {
		if ( q <= 0.0 ) {
			return q + STDLIB_CONSTANT_FLOAT64_PI;
		}
		return q - STDLIB_CONSTANT_FLOAT64_PI;
	}
	return q;
}
