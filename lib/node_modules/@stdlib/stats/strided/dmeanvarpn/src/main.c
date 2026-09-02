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

#include "stdlib/stats/strided/dmeanvarpn.h"
#include "stdlib/blas/ext/base/dsumpw.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/math/base/assert/is_nan.h"

/**
* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     X stride length
* @param Out         output array
* @param strideOut   Out stride length
*/
void API_SUFFIX(stdlib_strided_dmeanvarpn)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, double *Out, const CBLAS_INT strideOut ) {
	const CBLAS_INT oo = ( strideOut >= 0 ) ? 0 : -strideOut;
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dmeanvarpn_ndarray)( N, correction, X, strideX, ox, Out, strideOut, oo );
	return;
}

/**
* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm and alternative indexing semantics.
*
* @param N           number of indexed elements
* @param correction  degrees of freedom adjustment
* @param X           input array
* @param strideX     X stride length
* @param offsetX     starting index for X
* @param Out         output array
* @param strideOut   Out stride length
* @param offsetOut   starting index for Out
*/
void API_SUFFIX(stdlib_strided_dmeanvarpn_ndarray)( const CBLAS_INT N, const double correction, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut ) {
	CBLAS_INT ix;
	CBLAS_INT io;
	CBLAS_INT i;
	double M2;
	double mu;
	double dN;
	double M;
	double d;
	double c;
	double n;

	ix = offsetX;
	io = offsetOut;
	if ( N <= 0 ) {
		Out[ io ] = 0.0 / 0.0; // NaN
		Out[ io+strideOut ] = 0.0 / 0.0; // NaN
		return;
	}
	dN = (double)N;
	n = dN - correction;
	if ( N == 1 || strideX == 0 ) {
		Out[ io ] = X[ ix ];
		if ( n <= 0.0 ) {
			Out[ io+strideOut ] = 0.0 / 0.0; // NaN
		} else {
			Out[ io+strideOut ] = 0.0;
		}
		return;
	}
	// Compute an estimate for the mean:
	mu = API_SUFFIX(stdlib_strided_dsumpw_ndarray)( N, X, strideX, offsetX ) / dN;
	if ( stdlib_base_is_nan( mu ) ) {
		Out[ io ] = 0.0 / 0.0; // NaN
		Out[ io+strideOut ] = 0.0 / 0.0; // NaN
		return;
	}
	// Compute the sum of squared differences from the mean...
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = X[ ix ] - mu;
		M2 += d * d;
		M += d;
		ix += strideX;
	}
	// Compute an error term for the mean:
	c = M / dN;

	Out[ io ] = mu + c;
	if ( n <= 0.0 ) {
		Out[ io+strideOut ] = 0.0 / 0.0; // NaN
	} else {
		Out[ io+strideOut ] = (M2/n) - (c*(M/n));
	}
	return;
}
