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

#include "stdlib/math/base/special/ahavercosf.h"
#include "stdlib/math/base/special/acosf.h"
#include "stdlib/math/base/special/sqrtf.h"

/**
* Computes the inverse half value versed cosine of a single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_ahavercosf( 0.0f );
* // returns ~3.1416f
*/
float stdlib_base_ahavercosf( const float x ) {
	return 2.0f * stdlib_base_acosf( stdlib_base_sqrtf( x ) );
}
