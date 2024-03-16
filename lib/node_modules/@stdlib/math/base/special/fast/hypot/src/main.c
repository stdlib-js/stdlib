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

#include "stdlib/math/base/special/fast/hypot.h"
#include "stdlib/math/base/special/sqrt.h"

/**
* Computes the hypotenuse.
*
* @param x    number
* @param y    number
* @returns    hypotenuse
*
* @example
* double h = stdlib_base_fast_hypot( -5.0, 12.0 );
* // returns 13.0
*/
double stdlib_base_fast_hypot( const double x, const double y ) {
	return stdlib_base_sqrt( ( x * x ) + ( y * y ) );
}
