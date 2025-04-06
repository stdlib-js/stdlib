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

#include "stdlib/math/base/special/sqrtpif.h"
#include "stdlib/math/base/special/sqrtf.h"
#include "stdlib/constants/float32/pi.h"

/**
* Computes the principal square root of the product of π and a positive single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_sqrtpif( 4.0f );
* // returns ~3.5449f
*/
float stdlib_base_sqrtpif( const float x ) {
	return stdlib_base_sqrtf( x * STDLIB_CONSTANT_FLOAT32_PI );
}
