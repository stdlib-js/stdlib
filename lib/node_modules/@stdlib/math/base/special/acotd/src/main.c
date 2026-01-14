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

#include "stdlib/math/base/special/acotd.h"
#include "stdlib/math/base/special/acot.h"
#include "stdlib/math/base/special/rad2deg.h"

/**
* Computes the arccotangent (in degrees) of a double-precision floating-point number.
*
* @param x    input value
* @return     arccotangent (in degrees)
*
* @example
* double v = stdlib_base_acotd( 0.0 );
* // returns 90.0
*/
double stdlib_base_acotd( const double x ) {
	double rad;

	rad = stdlib_base_acot( x );
	return stdlib_base_rad2deg( rad );
}
