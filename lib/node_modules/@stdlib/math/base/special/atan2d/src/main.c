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

#include "stdlib/math/base/special/rad2deg.h"
#include "stdlib/math/base/special/atan2.h"

/**
* Computes the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @param y    `y` coordinate
* @param x    `x` coordinate
* @return      angle (in degrees)
*
* @example
* double v = stdlib_base_atan2d( 2.0, 2.0 ); // => stdlib_base_atand(1.0)
* // returns ~45.0
*
* @example
* double v = stdlib_base_atan2d( 6.0, 2.0 ); // => stdlib_base_atand(3.0)
* // returns ~71.565
*
* @example
* double v = stdlib_base_atan2d( -1.0, -1.0 ); // => stdlib_base_atand(1.0) - 180.0
* // returns ~-135.0
*
* @example
* double v = stdlib_base_atan2d( 3.0, 0.0 );
* // returns 90.0
*
* @example
* double v = stdlib_base_atan2d( -2.0, 0.0 );
* // returns -90.0
*
* @example
* double v = stdlib_base_atan2d( 0.0, 0.0 );
* // returns 0.0
*
* @example
* double v = stdlib_base_atan2d( 3.0, NaN );
* // returns NaN
*
* @example
* double v = stdlib_base_atan2d( NaN, 2.0 );
* // returns NaN
*/
double stdlib_base_atan2d( const double y, const double x ) {
	return stdlib_base_rad2deg( stdlib_base_atan2( y, x ) );
}
