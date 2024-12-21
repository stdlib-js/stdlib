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

#include "stdlib/math/base/special/acoth.h"
#include "stdlib/math/base/special/atanh.h"

/**
* Computes the inverse hyperbolic cotangent of a double-precision floating-point number.
*
* @param x    input value
* @return     output value
*
* @example
* out = stdlib_base_acoth( 2.0 );
* // returns ~0.5493
*/
double stdlib_base_acoth( const double x ) {
    return stdlib_base_atanh( 1.0 / x );
}
