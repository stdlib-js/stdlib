/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MODULES //

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a corrected sample excess kurtosis.
*
* ## Method
*
* The algorithm computes the sample excess kurtosis using the formula for `G_2` in [Joanes and Gill 1998][@joanes:1998]. In contrast to alternatives for calculating a sample kurtosis, `G_2` is an unbiased estimator under normality.
*
* ## References
*
* -   Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." _Journal of the Royal Statistical Society: Series D (The Statistician)_ 47 (1). Blackwell Publishers Ltd: 183–89. doi:[10.1111/1467-9884.00122][@joanes:1998].
*
* [@joanes:1998]: http://dx.doi.org/10.1111/1467-9884.00122
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrkurtosis();
*
* var kurtosis = accumulator();
* // returns null
*
* kurtosis = accumulator( 2.0 );
* // returns null
*
* kurtosis = accumulator( 2.0 );
* // returns null
*
* kurtosis = accumulator( -4.0 );
* // returns null
*
* kurtosis = accumulator( -4.0 );
* // returns -6.0
*/
function incrkurtosis() {
	var deltaN2;
	var deltaN;
	var delta;
	var term1;
	var mean;
	var tmp;
	var g2;
	var M2;
	var M3;
	var M4;
	var N;

	deltaN2 = 0.0;
	deltaN = 0.0;
	delta = 0.0;
	term1 = 0.0;
	mean = 0.0;
	M2 = 0.0;
	M3 = 0.0;
	M4 = 0.0;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated corrected sample excess kurtosis. If not provided a value, the accumulator function returns the current corrected sample excess kurtosis.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} corrected sample excess kurtosis
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( N < 4 ) {
				return ( isnan( M4 ) ) ? NaN : null;
			}
			// Calculate the population excess kurtosis:
			g2 = (( N*M4 ) / ( M2*M2 )) - 3.0;

			// Return the corrected sample excess kurtosis:
			return (N-1) / ( (N-2)*(N-3) ) * ( ((N+1)*g2) + 6.0 );
		}
		N += 1;
		delta = x - mean;
		deltaN = delta / N;
		deltaN2 = deltaN * deltaN;

		term1 = delta * deltaN * (N-1);

		tmp = term1 * deltaN2 * ((N*N) - (3*N) + 3);
		tmp += 6.0 * deltaN2 * M2;
		tmp -= 4.0 * deltaN * M3;
		M4 += tmp;

		tmp = term1 * deltaN * (N-2);
		tmp -= 3.0 * deltaN * M2;
		M3 += tmp;

		M2 += term1;
		mean += deltaN;
		if ( N < 4 ) {
			return ( isnan( M4 ) ) ? NaN : null;
		}
		// Calculate the population excess kurtosis:
		g2 = (N*M4 / ( M2*M2 )) - 3.0;

		// Return the corrected sample excess kurtosis:
		return (N-1) / ( (N-2)*(N-3) ) * ( ((N+1)*g2) + 6.0 );
	}
}


// EXPORTS //

module.exports = incrkurtosis;
