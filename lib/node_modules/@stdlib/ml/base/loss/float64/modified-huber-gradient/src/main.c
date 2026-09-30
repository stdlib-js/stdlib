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

#include "stdlib/ml/base/loss/float64/modified_huber_gradient.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/nan.h"

/**
* Computes the modified Huber loss gradient with respect to a model parameter.
*
* @param x    input value
* @param y    true target value
* @param p    predicted value
* @return     modified Huber loss gradient
*
* @example
* double out = stdlib_base_float64_modified_huber_gradient( -5.0, 1.0, 0.202 );
* // returns 7.98
*/
double stdlib_base_float64_modified_huber_gradient( const double x, const double y, const double p ) {
	double z;

	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( y ) || stdlib_base_is_nan( p ) || ( y != -1.0 && y != 1.0 ) ) {
		return STDLIB_CONSTANT_FLOAT64_NAN;
	}
	z = y * p;
	if ( z >= 1.0 ) {
		return 0.0;
	}
	if ( z >= -1.0 ) {
		return -2.0 * ( 1.0 - z ) * y * x;
	}
	return -4.0 * y * x;
}
