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

#include "stdlib/math/base/special/binomcoefln.h"
#include "stdlib/math/base/special/betaln.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdint.h>

/**
* Computes the natural logarithm of the binomial coefficient of two integers.
*
* @param n    input value
* @param k    second input value
* @return     function value
*
* @example
* double out = stdlib_base_binomcoefln( 8, 2 );
* // returns ~3.332
*/
double stdlib_base_binomcoefln( const int64_t n, const int64_t k ) {
	if ( n < 0 ) {
		return stdlib_base_binomcoefln( -n + k - 1, k );
	}
	if ( k < 0 ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( k == 0 ) {
		return 0.0;
	}
	if ( k == 1 ) {
		return stdlib_base_ln( stdlib_base_abs( (double)n ) );
	}
	if ( n < k ) {
		return STDLIB_CONSTANT_FLOAT64_NINF;
	}
	if ( n - k < 2 ) {
		return stdlib_base_binomcoefln( n, n - k );
	}

	// Case: n - k >= 2
	return -stdlib_base_ln( (double)(n + 1) ) - stdlib_base_betaln( (double)(n - k + 1), (double)(k + 1) );
}
