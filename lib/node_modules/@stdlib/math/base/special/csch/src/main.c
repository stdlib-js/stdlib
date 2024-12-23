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

#include "stdlib/math/base/special/csch.h"
#include "stdlib/math/base/special/sinh.h"

/**
* Computes the hyperbolic cosecant of a number.
*
* @param x    input value
* @return     hyperbolic cosecant
*
* @example
* var v = stdlib_base_csch( 2.0 );
* // returns ~0.2757
*
* @example
* var v = stdlib_base_csch( -2.0 );
* // returns ~-0.2757
*/
double stdlib_base_csch( const double x ) {
	return 1.0 / stdlib_base_sinh( x );
}
