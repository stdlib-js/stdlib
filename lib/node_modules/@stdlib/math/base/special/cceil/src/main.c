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

#include "stdlib/math/base/special/cceil.h"
#include "stdlib/math/base/special/ceil.h"
#include <complex.h>

/**
* Rounds a double-precision complex floating-point number toward positive infinity.
*
* @param z       number
* @return        input value
*
* @example
* double complex y = stdlib_base_cceil( 3.5-2.5*I );
*/
double complex stdlib_base_cceil( const double complex z ) {
	return stdlib_base_ceil( creal( z ) ) + stdlib_base_ceil( cimag( z ) )*I;
}
