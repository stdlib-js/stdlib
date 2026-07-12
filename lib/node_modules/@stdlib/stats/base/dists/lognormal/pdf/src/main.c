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

#include "stdlib/stats/base/dists/lognormal/pdf.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/constants/float64/pi.h"

/**
* Evaluates the PDF for a lognormal distribution with location `mu` and scale `sigma`.
*
* @param x         input value
* @param mu        location parameter
* @param sigma     scale parameter
* @return          evaluated PDF
*
* @example
* double y = stdlib_base_dists_lognormal_pdf( 2.0, 0.0, 1.0 );
* // returns ~0.157
*/
double stdlib_base_dists_lognormal_pdf( const double x, const double mu, const double sigma ) {
	double exp_value;
	double lnx_u;
	double s2;
	double z;
	double y;
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( mu ) ||
		stdlib_base_is_nan( sigma ) ||
		sigma <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}
	if ( x <= 0.0 ) {
		return 0.0;
	}
	s2 = stdlib_base_pow( sigma, 2.0 );
	lnx_u = stdlib_base_pow( ( stdlib_base_ln( x ) - mu ), 2.0 );
	z = -lnx_u / ( 2.0 * s2 );
	exp_value = stdlib_base_exp( z );
	y = 1.0 / ( x * sigma * stdlib_base_sqrt( 2.0 * STDLIB_CONSTANT_FLOAT64_PI ) );

	return y * exp_value;
}
