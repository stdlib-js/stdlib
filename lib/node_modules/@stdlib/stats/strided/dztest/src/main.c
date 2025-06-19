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

#include "stdlib/stats/strided/dztest.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include "stdlib/stats/base/ztest/one-sample/results/float64.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/stats/strided/dmean.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/stats/base/dists/normal/cdf.h"
#include "stdlib/stats/base/dists/normal/quantile.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdbool.h>

/**
* Computes a one-sample Z-test for a double-precision floating-point strided array.
*
* @param N            number of indexed elements
* @param alternative  alternative hypothesis
* @param alpha        significance level
* @param mu           mean under the null hypothesis
* @param sigma        known standard deviation
* @param X            input array
* @param strideX      stride length
* @param results      output results object
*/
void API_SUFFIX(stdlib_strided_dztest)( const CBLAS_INT N, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double mu, const double sigma, const double *X, const CBLAS_INT strideX, struct stdlib_stats_ztest_one_sample_float64_results *results ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	API_SUFFIX(stdlib_strided_dztest_ndarray)( N, alternative, alpha, mu, sigma, X, strideX, ox, results );
}

/**
* Computes a one-sample Z-test for a double-precision floating-point strided array using alternative indexing semantics.
*
* @param N            number of indexed elements
* @param alternative  alternative hypothesis
* @param alpha        significance level
* @param mu           mean under the null hypothesis
* @param sigma        known standard deviation
* @param X            input array
* @param strideX      stride length
* @param offsetX      starting index
* @param results      output results object
*/
void API_SUFFIX(stdlib_strided_dztest_ndarray)( const CBLAS_INT N, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double mu, const double sigma, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, struct stdlib_stats_ztest_one_sample_float64_results *results ) {
	double pValue;
	double stderr;
	double xmean;
	double stat;
	double *ci;
	double q;

	if ( N <= 0 || sigma <= 0.0 || alpha < 0.0 || alpha > 1.0 ) {
		results->rejected = false;
		results->alternative = alternative;

		// Set all applicable fields to NaN...
		results->alpha = 0.0/0.0;
		results->pValue = 0.0/0.0;
		results->statistic = 0.0/0.0;
		results->ci[ 0 ] = 0.0/0.0;
		results->ci[ 1 ] = 0.0/0.0;
		results->nullValue = 0.0/0.0;
		results->sd = 0.0/0.0;
		return;
	}
	// Resolve the array for storing the confidence interval:
	ci = results->ci;

	// Compute the standard error of the mean:
	stderr = sigma / stdlib_base_sqrt( (double)N );

	// Compute the arithmetic mean of the input array:
	xmean = stdlib_strided_dmean_ndarray( N, X, strideX, offsetX );

	// Compute the test statistic (i.e., the z-score, which is the distance of the sample mean from the population mean in units of standard error):
	stat = ( xmean - mu ) / stderr;

	// Compute the p-value and confidence interval...
	if ( alternative == STDLIB_STATS_ZTEST_LESS ) {
		pValue = stdlib_base_dists_normal_cdf( stat, 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-alpha, 0.0, 1.0 );
		ci[ 0 ] = STDLIB_CONSTANT_FLOAT64_NINF;
		ci[ 1 ] = mu + ( (stat+q)*stderr );
	} else if ( alternative == STDLIB_STATS_ZTEST_GREATER ) {
		pValue = 1.0 - stdlib_base_dists_normal_cdf( stat, 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-alpha, 0.0, 1.0 );
		ci[ 0 ] = mu + ( (stat-q)*stderr );
		ci[ 1 ] = STDLIB_CONSTANT_FLOAT64_PINF;
	} else { // alternative == STDLIB_STATS_ZTEST_TWO_SIDED
		pValue = 2.0 * stdlib_base_dists_normal_cdf( -stdlib_base_abs( stat ), 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-(alpha/2.0), 0.0, 1.0 );
		ci[ 0 ] = mu + ( (stat-q)*stderr );
		ci[ 1 ] = mu + ( (stat+q)*stderr );
	}
	// Store test results:
	results->rejected = ( pValue <= alpha );
	results->alternative = alternative;
	results->alpha = alpha;
	results->pValue = pValue;
	results->statistic = stat;
	results->nullValue = mu;
	results->sd = stderr;
}
