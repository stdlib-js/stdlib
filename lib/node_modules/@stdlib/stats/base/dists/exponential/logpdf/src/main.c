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

#include "stdlib/stats/base/dists/exponential/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"

/**
* Evaluates the natural logarithm of the probability density function (PDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
*
* @param x       input value
* @param lambda  rate parameter
* @return        evaluated logPDF
*
* @example
* double y = stdlib_base_dists_exponential_logpdf( 0.3, 4.0 );
* // returns ~0.186
*/
double stdlib_base_dists_exponential_logpdf( const double x, const double lambda ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( lambda ) ||
		lambda < 0.0 ||
		lambda == STDLIB_CONSTANT_FLOAT64_PINF
	) {
		return 0.0/0.0; // NaN
	}
	if( x < 0.0){
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	return ( -x*lambda ) + stdlib_base_ln( lambda );
}
