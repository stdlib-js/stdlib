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

#include "stdlib/ml/base/loss/float64/squared_hinge_gradient.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/nan.h"

/**
* Computes the squared hinge loss gradient with respect to a model parameter.
*
* @param x    input value
* @param t    margin threshold
* @param y    true target value
* @param p    predicted value
* @return     squared hinge loss gradient
*
* @example
* double out = stdlib_base_float64_squared_hinge_gradient( 2.5, 1.0, 1.0, 0.202 );
* // returns -3.99
*/
double stdlib_base_float64_squared_hinge_gradient( const double x, const double t, const double y, const double p ) {
	double z;
	if (
		stdlib_base_is_nan( x ) || stdlib_base_is_nan( t ) || stdlib_base_is_nan( y ) || stdlib_base_is_nan( p ) ||
		( y != -1.0 && y != 1.0 )
	) {
		return STDLIB_CONSTANT_FLOAT64_NAN;
	}
	z = t - ( y*p );
	if ( z > 0.0 ) {
		return -2.0 * x * y * z;
	}
	return 0.0;
}
