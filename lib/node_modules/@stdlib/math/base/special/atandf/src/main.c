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

#include "stdlib/math/base/special/atandf.h"
#include "stdlib/math/base/special/atanf.h"
#include "stdlib/math/base/special/rad2degf.h"

/**
* Computes the arctangent (in degrees) of a single-precision floating-point number.
*
* @param x    input value
* @return     arctangent (in degrees)
*
* @example
* float out = stdlib_base_atandf( 0.5f );
* // returns ~26.57f
*/
float stdlib_base_atandf( const float x ) {
	return stdlib_base_rad2degf( stdlib_base_atanf( x ) );
}
