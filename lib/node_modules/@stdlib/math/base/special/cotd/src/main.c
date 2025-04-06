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

#include "stdlib/math/base/special/cotd.h"
#include "stdlib/math/base/special/sind.h"
#include "stdlib/math/base/special/cosd.h"

/**
* Computes the cotangent of an angle measured in degrees.
*
* @param x    input value (in degrees)
* @return     cotangent
*
* @example
* double y = stdlib_base_cotd( 0.0 );
* // returns Infinity
*/
double stdlib_base_cotd( const double x ) {
	return stdlib_base_cosd( x ) / stdlib_base_sind( x );
}
