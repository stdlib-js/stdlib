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

#include "stdlib/math/base/special/dirac_deltaf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/constants/float32/pinf.h"

/**
* Evaluates the Dirac delta function in single-precision floating-point format.
*
* @param x    input value
* @return	  output value
*
* @example
* float out = stdlib_base_dirac_deltaf( 3.14f );
* // returns 0.0f
*/
float stdlib_base_dirac_deltaf( const float x ) {
	if ( stdlib_base_is_nanf( x ) ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( x == 0.0f ) {
		return STDLIB_CONSTANT_FLOAT32_PINF;
	}
	return 0.0f;
}
