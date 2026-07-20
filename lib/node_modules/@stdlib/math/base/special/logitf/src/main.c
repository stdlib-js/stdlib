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

#include "stdlib/math/base/special/logitf.h"
#include "stdlib/math/base/assert/is_probabilityf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/special/lnf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"

/**
* Computes the logit function for a single-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* float out = stdlib_base_logitf( 0.2f );
* // returns ~-1.386f
*/
float stdlib_base_logitf( const float p ) {
	if ( stdlib_base_is_nanf( p ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( !stdlib_base_is_probabilityf( p ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( p == 0.0f ) {
		return STDLIB_CONSTANT_FLOAT32_NINF;
	}
	if ( p == 1.0f ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	return stdlib_base_lnf( p / ( 1.0f-p ) );
}
