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

#include "stdlib/number/float64/base/to_float16.h"
#include "stdlib/number/float32/base/to_float16.h"
#include "stdlib/number/float16/ctor.h"

/**
* Converts a double-precision floating-point number to the nearest half-precision floating-point number.
*
* @param x    double-precision floating-point number
* @return     half-precision floating-point number
*
* @example
* #include "stdlib/number/float16/ctor.h"
*
* stdlib_float16_t x = stdlib_base_float64_to_float16( 3.14 );
*/
stdlib_float16_t stdlib_base_float64_to_float16( const double x ) {
	return stdlib_base_float32_to_float16( (float)x );
}
