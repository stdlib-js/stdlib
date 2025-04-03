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

#include "stdlib/stats/base/dists/f/entropy.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/gammaln.h"
#include "stdlib/math/base/special/digamma.h"
#include "stdlib/math/base/special/ln.h"

/**
* Returns the differential entropy of an F distribution.
*
* @param d1    numerator degrees of freedom
* @param d2    denominator degrees of freedom
* @return      entropy
*
* @example
* double y = stdlib_base_dists_f_entropy( 3.0, 7.0 );
* // returns ~1.298
*/
double stdlib_base_dists_f_entropy( const double d1, const double d2 ) {
	double half;
	double hd1;
	double hd2;
	double out;

	if (
		stdlib_base_is_nan( d1 ) ||
		stdlib_base_is_nan( d2 ) ||
		d1 <= 0.0 ||
		d2 <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	half = ( d1 + d2 ) / 2.0;
	hd1 = d1 / 2.0;
	hd2 = d2 / 2.0;
	out = stdlib_base_ln( d2 / d1 ) + stdlib_base_gammaln( hd1 ) + stdlib_base_gammaln( hd2 ) - stdlib_base_gammaln( half );
	out += ( 1.0-hd1 ) * stdlib_base_digamma( hd1 );
	out += ( -1.0-hd2 ) * stdlib_base_digamma( hd2 );
	out += half * stdlib_base_digamma( half );
	return out;
}
