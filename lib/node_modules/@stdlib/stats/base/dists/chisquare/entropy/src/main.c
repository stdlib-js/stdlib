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

#include "stdlib/stats/base/dists/chisquare/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/gamma.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the differential entropy of a chi-squared distribution.
*
* @param k    degrees of freedom
* @return     evaluated entropy
*
* @example
* double y = stdlib_base_chisquare_entropy( 9.0 );
* // returns ~2.786
*/
double stdlib_base_dists_chisquare_entropy( const double k ) {
	double kh;
	if ( stdlib_base_is_nan( k ) || k <= 0.0 ) {
		return 0.0/0.0; // NaN
	}
	kh = k / 2.0;
	return kh + stdlib_base_ln( 2.0*stdlib_base_gamma( kh ) ) + ( ( 1.0-kh ) * stdlib_base_digamma( kh ) );
}
