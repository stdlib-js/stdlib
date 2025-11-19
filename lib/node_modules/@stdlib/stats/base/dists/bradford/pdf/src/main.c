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

#include "stdlib/stats/base/dists/bradford/pdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"

/**
* Evaluates the probability density function (PDF) for a Bradford distribution with shape parameter `c` at a value `x`.
*
* @param x    input value
* @param c    shape parameter
* @return     evaluated PDF
*
* @example
* double y = stdlib_base_dists_bradford_pdf( 0.5, 5.0 );
* // returns ~0.797
*/
double stdlib_base_dists_bradford_pdf( const double x, const double c ) {
	double k;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( c ) || c <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	if ( x < 0.0 || x > 1.0 ) {
		return 0.0;
	}
	k = stdlib_base_log1p( c );
	return c / ( ( 1.0 + ( c*x ) ) * k );
}
