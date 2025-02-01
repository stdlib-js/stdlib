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

#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/special/gammasgn.h"

/**
* Computes the sign of the gamma function.
*
* @param x       number
* @return        sign of the gamma function
*
* @example
* double v = gammasgn( 1.0 );
* // returns 1.0
*/
double stdlib_base_gammasgn( const double x ) {
	double fx;

	if ( stdlib_base_is_nan( x ) ) {
		return x;
	}
	if ( x > 0 ) {
		return 1.0;
	}
	fx = stdlib_base_floor( x );
	if ( x == fx ) {
		return 0.0;
	}
	fx /= 2.0;
	if ( fx == stdlib_base_floor( fx ) ) {
		return 1.0;
	}
	return -1.0;
}
