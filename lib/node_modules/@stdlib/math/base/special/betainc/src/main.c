/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/betainc.h"
#include "stdlib/math/base/special/kernel_betainc.h"
#include <stdbool.h>

/**
* Evaluates the incomplete beta function.
*
* @param x              function parameter
* @param a              function parameter
* @param b              function parameter
* @param regularized    boolean indicating if the function should evaluate the regularized or non-regularized incomplete beta function
* @param upper          boolean indicating if the function should return the upper tail of the incomplete beta function
* @return               function value
*
* @example
* double y = stdlib_base_betainc( 0.5, 2.0, 2.0, true, false );
* // returns 0.5
*/
double stdlib_base_betainc( const double x, const double a, const double b, const bool regularized, const bool upper ) {
	double derivative;
	double out;

	stdlib_base_kernel_betainc( x, a, b, regularized, upper, &out, &derivative );
	return out;
}
