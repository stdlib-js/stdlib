/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/base/special/floor.h"
#include <math.h>

/**
* Rounds a double-precision floating-point number toward negative infinity.
*
* @param x       number
* @return        rounded value
*
* @example
* double y = stdlib_base_floor( 3.5 );
* // returns 3.0
*/
double stdlib_base_floor( const double x ) {
	return floor( x );
}
