/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/base/special/cidentity.h"
#include <complex.h>

/**
* Evaluates the identity function for a double-precision complex floating-point number.
*
* @param z       number
* @return        input value
*
* @example
* double complex y = stdlib_base_cidentity( 3.0+3.0*I );
*/
double complex stdlib_base_cidentity( const double complex z ) {
	return z;
}
