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

#include "stdlib/math/base/assert/is_safe_integer.h"
#include "stdlib/constants/float64/max_safe_integer.h"
#include "stdlib/constants/float64/min_safe_integer.h"
#include "stdlib/math/base/assert/is_integer.h"

/**
* Tests if a finite double-precision floating-point number is a safe integer.
*
* @param x    input value
* @return     output value
*
* @example
* #include <stdbool.h>
*
* bool out = stdlib_base_is_safe_integer( 3.0 );
* // returns true
*/
bool stdlib_base_is_safe_integer( const double x ) {
	return (
		x >= STDLIB_CONSTANT_FLOAT64_MIN_SAFE_INTEGER &&
		x <= STDLIB_CONSTANT_FLOAT64_MAX_SAFE_INTEGER &&
		stdlib_base_is_integer( x )
	);
}
