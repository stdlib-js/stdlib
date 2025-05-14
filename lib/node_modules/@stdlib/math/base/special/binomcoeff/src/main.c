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

#include "stdlib/math/base/special/binomcoeff.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/math/base/special/gcdf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/max_safe_integer.h"
#include <stdint.h>

/**
* Computes the binomial coefficient of two integers as a single-precision floating-point number.
*
* @param n    input value
* @param k    second input value
* @return     function value
*
* @example
* float out = stdlib_base_binomcoeff( 8, 2 );
* // returns 28.0f
*/
float stdlib_base_binomcoeff( const int32_t n, const int32_t k ) {
	int32_t nc;
	int32_t kc;
	int32_t d;
	float res;
	float sgn;
	float b;
	float c;
	float g;
	float s;

	if ( k < 0 ) {
		return 0.0f;
	}
	sgn = 1.0f;
	nc = n;
	if ( nc < 0 ) {
		nc = -nc + k - 1;
		if ( k & 1 ) {
			sgn *= -1.0f;
		}
	}
	if ( k > nc ) {
		return 0.0f;
	}
	if ( k == 0 || k == nc ) {
		return sgn;
	}
	if ( k == 1 || k == nc - 1 ) {
		return sgn * (float)nc;
	}

	// Minimize the number of computed terms by leveraging symmetry:
	kc = k;
	if ( nc - kc < kc ) {
		kc = nc - kc;
	}
	s = stdlib_base_floorf( (float)STDLIB_CONSTANT_FLOAT32_MAX_SAFE_INTEGER / (float)nc );

	// Use a standard algorithm for computing the binomial coefficient
	res = 1.0f;
	for ( d = 1; d <= kc; d++ ) {
		// Check for potential overflow...
		if ( res > s ) {
			break;
		}
		res *= (float)nc;
		res /= (float)d;
		nc -= 1;
	}

	// If we did not early exit from the previous loop, the answer is exact, and we can simply return...
	if ( d > kc ) {
		return sgn * res;
	}

	/*
	* Let `N` equal the provided `n`.
	*
	* We want to calculate C(N,k), and, at this point, we have calculated
	*
	*   res = C(N,n) = C(N,N-n) = C(N,d-1)
	*
	* where `N-n = d-1` and, hence, `n = N - d + 1`.
	*
	* Given the following identity,
	*
	*   C(N,k) = C(N,d-1) * C(N-d+1,k-d+1) / C(k,k-d+1)
	*          = C(N,d-1) * C(n,k-d+1) / C(k,k-d+1)
	*
	* we can leverage recursion to perform argument reduction.
	*/
	b = stdlib_base_binomcoeff( nc, kc-d+1 );
	if ( b == STDLIB_CONSTANT_FLOAT32_PINF ) {
		return sgn * b;
	}
	c = stdlib_base_binomcoeff( kc, kc-d+1 ) ;

	/*
	* At this point, the result should be `res*b/c`.
	*
	* To help guard against overflow and precision loss, we calculate the greatest common divisor (gcd). In this case, we pick `b`, as `b` should be less than `res` in most (if not all) cases.
	*/
	g = stdlib_base_gcdf( b, c );
	b /= g;
	c /= g;
	res /= c;

	return sgn * res * b;
}
