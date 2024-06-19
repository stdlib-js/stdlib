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

#include "stdlib/math/base/special/secd.h"
#include "stdlib/math/base/special/cos.h"
#include "stdlib/math/base/special/deg2rad.h"

/**
* Computes the secant of an angle measured in degrees.
*
* @param x    input value (in degrees)
* @return     secant
*
* @example
* double y = stdlib_base_secd( 30.0 );
* // returns ~1.15
*/
double stdlib_base_secd( const double x ) {
	return 1.0 / stdlib_base_cos( stdlib_base_deg2rad( x ) );
}
