/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/stats/base/dnanvariancewd.h"
#include <stdint.h>

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using Welford's algorithm.
*
* ## References
*
* -   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022](https://doi.org/10.1080/00401706.1962.10490022).
* -   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961](https://doi.org/10.1145/362929.362961).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
double stdlib_strided_dnanvariancewd( const int64_t N, const double correction, const double *X, const int64_t stride ) {
	double delta;
	int64_t ix;
	int64_t n;
	int64_t i;
	double M2;
	double nc;
	double mu;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-correction > 0.0 ) {
			return 0.0;
		}
		return 0.0 / 0.0; // NaN
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	M2 = 0.0;
	mu = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			delta = v - mu;
			n += 1;
			mu += delta / (double)n;
			M2 += delta * ( v - mu );
		}
		ix += stride;
	}
	nc = (double)n - correction;
	if ( nc <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return M2 / nc;
}
