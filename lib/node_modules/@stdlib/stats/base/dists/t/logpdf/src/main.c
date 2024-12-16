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
#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/stats/base/dists/t/logpdf.h"

/**
* Evaluates the log probability density function (logPDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param x    input value
* @param v    degrees of freedom
* @return     evaluated logPDF
*
* @example
* double y = stdlib_base_dists_t_logpdf( 0.5, 1.0 );
* // returns ~-1.1447
*/
double stdlib_base_dists_t_logpdf( const double x, const double v ) {
	double betaTerm;
	if ( stdlib_base_is_nan( x ) || stdlib_base_is_nan( v ) || v <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	betaTerm = stdlib_base_ln( stdlib_base_sqrt( v ) ) + stdlib_base_betaln( v / 2.0, 0.5 );
	return ( ( ( 1.0 + v ) / 2.0 ) * stdlib_base_ln( v / ( v + stdlib_base_pow( x, 2.0 ) ) ) ) - betaTerm;
}
