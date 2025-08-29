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

#include "stdlib/math/base/special/fast/absf.h"

/**
* Computes the absolute value of a single-precision floating-point number `x`.
*
* @param x       input value
* @return        absolute value
*
* @example
* float v = stdlib_base_fast_absf( -5.0f );
* // returns 5.0f
*/
float stdlib_base_fast_absf( const float x ) {
	if ( x < 0.0 ) {
		return -x;
	}
	return x;
}
