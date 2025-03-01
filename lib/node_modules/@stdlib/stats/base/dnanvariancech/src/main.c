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

#include "stdlib/stats/base/dnanvariancech.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
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
* @param strideX     stride length
* @return            output value
*/
double API_SUFFIX(stdlib_strided_dnanvariancech)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	return API_SUFFIX(stdlib_strided_dnanvariancech_ndarray)( N, correction, X, strideX, ox );
}

/**
* Computes the variance of a double-precision floating-point strided array ignoring `NaN` values and using a one-pass trial mean algorithm and alternative indexing semantics.
*
* @param N            number of indexed elements
* @param correction   degrees of freedom adjustment
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index for X
* @return             output value
*/
double API_SUFFIX(stdlib_strided_dnanvariancech_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	CBLAS_INT ix;
	CBLAS_INT n;
	CBLAS_INT i;
	double M2;
	double mu;
	double nc;
	double dn;
	double M;
	double d;
	double v;

	if ( N <= 0 ) {
		return 0.0 / 0.0; // NaN
	}
	if ( N == 1 || strideX == 0 ) {
		v = X[ 0 ];
		if ( v == v && (double)N-correction > 0.0 ) {
			return 0.0;
		}
		return 0.0 / 0.0; // NaN
	}
	ix = offsetX;
	// Find an estimate for the mean...
	for ( i = 0; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			mu = v;
			break;
		}
		ix += strideX;
	}
	if ( i == N ) {
		return 0.0 / 0.0; // NaN
	}
	ix += strideX;
	i += 1;

	// Compute the variance...
	M2 = 0.0;
	M = 0.0;
	n = 1;
	for (; i < N; i++ ) {
		v = X[ ix ];
		if ( v == v ) {
			d = v - mu;
			M2 += d * d;
			M += d;
			n += 1;
		}
		ix += strideX;
	}
	dn = (double)n;
	nc = dn - correction;
	if ( nc <= 0.0 ) {
		return 0.0 / 0.0; // NaN
	}
	return (M2/nc) - ((M/dn)*(M/nc));
}
