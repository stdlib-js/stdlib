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

'use strict';

// MAIN //

/**
* Computes the variance of a strided array ignoring `NaN` values and using a one-pass trial mean algorithm.
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
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = nanvariancech( 5, 1, arraylike2object( x ), 2, 1 );
* // returns 6.25
*/
function nanvariancech( N, correction, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var mu;
	var ix;
	var M2;
	var nc;
	var M;
	var d;
	var v;
	var n;
	var i;

	// Cache references to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		v = get( xbuf, offsetX );
		if ( v === v && N-correction > 0.0 ) {
			return 0.0;
		}
		return NaN;
	}
	ix = offsetX;

	// Find an estimate for the mean...
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			mu = v;
			break;
		}
		ix += strideX;
	}
	if ( i === N ) {
		return NaN;
	}
	ix += strideX;
	i += 1;

	// Compute the variance...
	M2 = 0.0;
	M = 0.0;
	n = 1;
	for ( i; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			d = v - mu;
			M2 += d * d;
			M += d;
			n += 1;
		}
		ix += strideX;
	}
	nc = n - correction;
	if ( nc <= 0.0 ) {
		return NaN;
	}
	return (M2/nc) - ((M/n)*(M/nc));
}


// EXPORTS //

module.exports = nanvariancech;
