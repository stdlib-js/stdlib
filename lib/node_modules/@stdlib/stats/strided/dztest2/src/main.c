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

#include "stdlib/stats/strided/dztest2.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include "stdlib/stats/base/ztest/two-sample/results/float64.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/stats/strided/dmean.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/sqrt.h"
#include "stdlib/math/base/special/abs.h"
#include "stdlib/stats/base/dists/normal/cdf.h"
#include "stdlib/stats/base/dists/normal/quantile.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/constants/float64/ninf.h"
#include <stdbool.h>

/**
* Computes a two-sample Z-test for two double-precision floating-point strided arrays.
*
* @param NX           number of indexed elements in `X`
* @param NY           number of indexed elements in `Y`
* @param alternative  alternative hypothesis
* @param alpha        significance level
* @param diff         difference in means under the null hypothesis
* @param sigmax       known standard deviation of `X`
* @param X            first input array
* @param strideX      stride length of `X`
* @param sigmay       known standard deviation of `Y`
* @param Y            second input array
* @param strideY      stride length of `Y`
* @param results      output results object
*/
void API_SUFFIX(stdlib_strided_dztest2)( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double diff, const double sigmax, const double *X, const CBLAS_INT strideX, const double sigmay, const double *Y, const CBLAS_INT strideY, struct stdlib_stats_ztest_two_sample_float64_results *results ) {
	const CBLAS_INT ox = stdlib_strided_stride2offset( NX, strideX );
	const CBLAS_INT oy = stdlib_strided_stride2offset( NY, strideY );
	API_SUFFIX(stdlib_strided_dztest2_ndarray)( NX, NY, alternative, alpha, diff, sigmax, X, strideX, ox, sigmay, Y, strideY, oy, results );
}

/**
* Computes a two-sample Z-test for two double-precision floating-point strided arrays using alternative indexing semantics.
*
* @param NX           number of indexed elements in `X`
* @param NY           number of indexed elements in `Y`
* @param alternative  alternative hypothesis
* @param alpha        significance level
* @param diff         difference in means under the null hypothesis
* @param sigmax       known standard deviation of `X`
* @param X            first input array
* @param strideX      stride length for `X`
* @param offsetX      starting index for `X`
* @param sigmay       known standard deviation of `Y`
* @param Y            second input array
* @param strideY      stride length for `Y`
* @param offsetY      starting index for `Y`
* @param results      output results object
*/
void API_SUFFIX(stdlib_strided_dztest2_ndarray)( const CBLAS_INT NX, const CBLAS_INT NY, const enum STDLIB_STATS_ZTEST_ALTERNATIVE alternative, const double alpha, const double diff, const double sigmax, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double sigmay, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, struct stdlib_stats_ztest_two_sample_float64_results *results ) {
	double pValue;
	double stderr;
	double xmean;
	double ymean;
	double xvar;
	double yvar;
	double stat;
	double *ci;
	double q;

	if (
		NX <= 0 ||
		NY <= 0 ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( diff ) ||
		stdlib_base_is_nan( sigmax ) ||
		stdlib_base_is_nan( sigmay ) ||
		sigmax <= 0.0 ||
		sigmay <= 0.0 ||
		alpha < 0.0 ||
		alpha > 1.0
	) {
		results->rejected = false;
		results->alternative = alternative;

		// Set all applicable fields to NaN...
		results->alpha = 0.0/0.0;
		results->pValue = 0.0/0.0;
		results->statistic = 0.0/0.0;
		results->ci[ 0 ] = 0.0/0.0;
		results->ci[ 1 ] = 0.0/0.0;
		results->nullValue = 0.0/0.0;
		results->xmean = 0.0/0.0;
		results->ymean = 0.0/0.0;
		return;
	}
	// Resolve the array for storing the confidence interval:
	ci = results->ci;

	// Compute the standard error of the mean:
	xvar = sigmax * sigmax;
	yvar = sigmay * sigmay;
	stderr = stdlib_base_sqrt( ( xvar / (double)NX ) + ( yvar / (double)NY ) );

	// Compute the arithmetic means of the input arrays:
	xmean = stdlib_strided_dmean_ndarray( NX, X, strideX, offsetX );
	ymean = stdlib_strided_dmean_ndarray( NY, Y, strideY, offsetY );

	// Compute the test statistic (i.e., the z-score, which is the standardized difference between the sample means of x and y, adjusted by the hypothesized difference, in units of the standard error):
	stat = ( xmean - ymean - diff ) / stderr;

	// Compute the p-value and confidence interval...
	if ( alternative == STDLIB_STATS_ZTEST_LESS ) {
		pValue = stdlib_base_dists_normal_cdf( stat, 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-alpha, 0.0, 1.0 );
		ci[ 0 ] = STDLIB_CONSTANT_FLOAT64_NINF;
		ci[ 1 ] = diff + ( (stat+q)*stderr );
	} else if ( alternative == STDLIB_STATS_ZTEST_GREATER ) {
		pValue = 1.0 - stdlib_base_dists_normal_cdf( stat, 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-alpha, 0.0, 1.0 );
		ci[ 0 ] = diff + ( (stat-q)*stderr );
		ci[ 1 ] = STDLIB_CONSTANT_FLOAT64_PINF;
	} else { // alternative == STDLIB_STATS_ZTEST_TWO_SIDED
		pValue = 2.0 * stdlib_base_dists_normal_cdf( -stdlib_base_abs( stat ), 0.0, 1.0 );
		q = stdlib_base_dists_normal_quantile( 1.0-(alpha/2.0), 0.0, 1.0 );
		ci[ 0 ] = diff + ( (stat-q)*stderr );
		ci[ 1 ] = diff + ( (stat+q)*stderr );
	}
	// Store test results:
	results->rejected = ( pValue <= alpha );
	results->alternative = alternative;
	results->alpha = alpha;
	results->pValue = pValue;
	results->statistic = stat;
	results->nullValue = diff;
	results->xmean = xmean;
	results->ymean = ymean;
}
