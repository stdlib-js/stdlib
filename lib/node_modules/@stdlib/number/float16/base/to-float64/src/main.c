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

#include "stdlib/number/float16/base/to_float64.h"
#include "stdlib/number/float16/base/to_float32.h"
#include "stdlib/number/float16/ctor.h"

/**
* Converts a half-precision floating-point number to the nearest double-precision floating-point number.
*
* @param x    half-precision floating-point number
* @return     double-precision floating-point number
*
* @example
* #include "stdlib/number/float16/ctor.h"
*
* stdlib_float16_t v = stdlib_float16_from_bits( 51648 ); // => -11.5
* double x = stdlib_base_float16_to_float64( v );
*/
double stdlib_base_float16_to_float64( const stdlib_float16_t x ) {
	return (double)stdlib_base_float16_to_float32( x );
}
