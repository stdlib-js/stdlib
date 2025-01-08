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

#include "stdlib/stats/base/dvariancewd.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a double-precision floating-point strided array using Welford's algorithm.
*
* ## Method
*
* -   This implementation uses Welford's algorithm for efficient computation, which can be derived as follows. Let
*
*     ```tex
*     \begin{align*}
*     S_n &= n \sigma_n^2 \\
*         &= \sum_{i=1}^{n} (x_i - \mu_n)^2 \\
*         &= \biggl(\sum_{i=1}^{n} x_i^2 \biggr) - n\mu_n^2
*     \end{align*}
*     ```
*
*     Accordingly,
*
*     ```tex
*     \begin{align*}
*     S_n - S_{n-1} &= \sum_{i=1}^{n} x_i^2 - n\mu_n^2 - \sum_{i=1}^{n-1} x_i^2 + (n-1)\mu_{n-1}^2 \\
*                   &= x_n^2 - n\mu_n^2 + (n-1)\mu_{n-1}^2 \\
*                   &= x_n^2 - \mu_{n-1}^2 + n(\mu_{n-1}^2 - \mu_n^2) \\
*                   &= x_n^2 - \mu_{n-1}^2 + n(\mu_{n-1} - \mu_n)(\mu_{n-1} + \mu_n) \\
*                   &= x_n^2 - \mu_{n-1}^2 + (\mu_{n-1} - x_n)(\mu_{n-1} + \mu_n) \\
*                   &= x_n^2 - \mu_{n-1}^2 + \mu_{n-1}^2 - x_n\mu_n - x_n\mu_{n-1} + \mu_n\mu_{n-1} \\
*                   &= x_n^2 - x_n\mu_n - x_n\mu_{n-1} + \mu_n\mu_{n-1} \\
*                   &= (x_n - \mu_{n-1})(x_n - \mu_n) \\
*                   &= S_{n-1} + (x_n - \mu_{n-1})(x_n - \mu_n)
*     \end{align*}
*     ```
*
*     where we use the identity
*
*     ```tex
*     x_n - \mu_{n-1} = n (\mu_n - \mu_{n-1})
*     ```
*
* ## References
*
* -   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022](https://doi.org/10.1080/00401706.1962.10490022).
* -   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961](https://doi.org/10.1145/362929.362961).
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvariancewd)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dvariancewd_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the variance of a double-precision floating-point strided array using Welford's algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dvariancewd_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	double delta;
	CBLAS_INT ix;
	CBLAS_INT i;
	double mu;
	double M2;
	double n;
	double v;

	n = (double)N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		return 0.0;
	}
	ix = offsetX;
	M2 = 0.0;
	mu = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		delta = v - mu;
		mu += delta / (double)(i+1);
		M2 += delta * ( v - mu );
		ix += strideX;
	}
	return M2 / n;
}
