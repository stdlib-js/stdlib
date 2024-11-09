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

#include "stdlib/math/base/special/sec.h"
#include "stdlib/math/base/special/cos.h"

/**
* Evaluates the cosecant of a number.
*
* @param x    input value (in radians)
* @return     secant
*
* @example
* double y = stdlib_base_sec( 3.141592653589793 / 2.0 );
* // returns 16331239353195370.0
*/
double stdlib_base_sec( const double x ) {
	return 1.0 / stdlib_base_cos( x );
}
