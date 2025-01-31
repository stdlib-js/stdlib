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

#include "stdlib/math/base/special/boxcoxinv.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Computes the inverse of a one-parameter Box-Cox transformation.
*
* @param y         input value
* @param lambda    power parameter
* @return          inverse of the Box-Cox transformation
*
* @example
* double v = boxcoxinv( 1.0, 2.5 );
* // returns ~1.6505
*/
double stdlib_base_boxcoxinv( const double y, const double lambda ) {
	if ( stdlib_base_is_nan( y ) || stdlib_base_is_nan( lambda ) ) {
		return 0.0 / 0.0; // NaN
	}
	if ( lambda == 0.0 ) {
		return stdlib_base_exp( y );
	}
	return stdlib_base_exp( stdlib_base_log1p( lambda*y ) / lambda );
}
