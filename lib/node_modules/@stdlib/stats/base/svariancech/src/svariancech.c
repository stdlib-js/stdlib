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

#include "stdlib/stats/base/svariancech.h"
#include <stdint.h>

/**
* Computes the variance of a single-precision floating-point strided array using a one-pass trial mean algorithm.
*
* ## Method
*
* -   This implementation uses a one-pass trial mean approach, as suggested by Chan et al (1983).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154](https://doi.org/10.2307/2286154).
* -   Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. 1983. "Algorithms for Computing the Sample Variance: Analysis and Recommendations." _The American Statistician_ 37 (3). American Statistical Association, Taylor & Francis, Ltd.: 242–47. doi:[10.1080/00031305.1983.10483115](https://doi.org/10.1080/00031305.1983.10483115).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param stride      stride length
* @return            output value
*/
float stdlib_strided_svariancech( const int64_t N, const float correction, const float *X, const int64_t stride ) {
	int64_t ix;
	int64_t i;
	double dN;
	double dM;
	double n;
	float mu;
	float M2;
	float M;
	float d;

	dN = (double)N;
	n = dN - (double)correction;
	if ( N <= 0 || n <= 0.0f ) {
		return 0.0f / 0.0f; // NaN
	}
	if ( N == 1 || stride == 0 ) {
		return 0.0f;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	// Use an estimate for the mean:
	mu = X[ ix ];
	ix += stride;

	// Compute the variance...
	M2 = 0.0f;
	M = 0.0f;
	for ( i = 1; i < N; i++ ) {
		d = X[ ix ] - mu;
		M2 += d * d;
		M += d;
		ix += stride;
	}
	dM = (double)M;
	return (float)((double)M2/n) - ( (float)(dM/dN) * (float)(dM/n) );
}
