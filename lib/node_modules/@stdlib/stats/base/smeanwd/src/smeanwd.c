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

#include "stdlib/stats/base/smeanwd.h"
#include <stdint.h>

/**
* Computes the arithmetic mean of a single-precision floating-point strided array using Welford's algorithm.
*
* ## Method
*
* -   This implementation uses Welford's algorithm for efficient computation, which can be derived as follows
*
*     ```tex
*     \begin{align*}
*     \mu_n &= \frac{1}{n} \sum_{i=0}^{n-1} x_i \\
*           &= \frac{1}{n} \biggl(x_{n-1} + \sum_{i=0}^{n-2} x_i \biggr) \\
*           &= \frac{1}{n} (x_{n-1} + (n-1)\mu_{n-1}) \\
*           &= \mu_{n-1} + \frac{1}{n} (x_{n-1} - \mu_{n-1})
*     \end{align*}
*     ```
*
* ## References
*
* -   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022](https://doi.org/10.1080/00401706.1962.10490022).
* -   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961](https://doi.org/10.1145/362929.362961).
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
float stdlib_strided_smeanwd( const int64_t N, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	double n;
	float mu;

	if ( N <= 0 ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	mu = 0.0f;
	n = 0.0;
	for ( i = 0; i < N; i++ ) {
		n += 1.0;
		mu += (float)((double)( X[ix]-mu ) / n);
		ix += stride;
	}
	return mu;
}
