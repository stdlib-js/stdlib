/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/stats/base/dists/exponential/mgf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/constants/float64/pinf.h"

/**
* Evaluates the moment-generating function (MGF) of an exponential distribution with rate parameter `lambda` at a value `t`.
*
* @param t       input value
* @param lambda  rate parameter (must be positive)
* @return        evaluated MGF
*
* @example
* var v = mgf( 2.0, 3.0 );
* // returns 3.0
*/
double stdlib_base_dists_exponential_mgf( const double t, const double lambda ) {
	if (
		stdlib_base_is_nan( t ) ||
		stdlib_base_is_nan( lambda ) ||
		lambda <= 0.0 ||
		lambda == STDLIB_CONSTANT_FLOAT64_PINF ||
		t >= lambda
	) {
		return 0.0/0.0; // NaN
	}
	return lambda / ( lambda - t );
}
