/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/sqrtpi.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pi.h"

/**
* Compute the principal square root of the product of π and a positive double-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* double out = stdlib_base_sqrtpi( 4.0 );
* // returns 3.5449
*/
double stdlib_base_sqrtpi( const double x ) {
	return stdlib_base_sqrt( x * STDLIB_CONSTANT_FLOAT64_PI );
}
