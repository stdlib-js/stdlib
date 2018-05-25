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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a corrected sample skewness.
*
* ## Method
*
* The algorithm computes the corrected sample skewness using the formula for `G_1` in [Joanes and Gill 1998][@joanes:1998].
*
* ## References
*
* -   Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." _Journal of the Royal Statistical Society: Series D (The Statistician)_ 47 (1). Blackwell Publishers Ltd: 183–89. doi:[10.1111/1467-9884.00122][@joanes:1998].
*
* [@joanes:1998]: http://dx.doi.org/10.1111/1467-9884.00122
*
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrskewness();
*
* var skewness = accumulator();
* // returns null
*
* skewness = accumulator( 2.0 );
* // returns null
*
* skewness = accumulator( -5.0 );
* // returns null
*
* skewness = accumulator( -10.0 );
* // returns ~0.492
*
* skewness = accumulator();
* // returns ~0.492
*/
function incrskewness() {
	var deltaN;
	var delta;
	var term1;
	var mean;
	var tmp;
	var g1;
	var M2;
	var M3;
	var N;

	deltaN = 0.0;
	delta = 0.0;
	term1 = 0.0;
	mean = 0.0;
	M2 = 0.0;
	M3 = 0.0;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated corrected sample skewness. If not provided a value, the accumulator function returns the current corrected sample skewness.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} corrected sample skewness or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( N < 3 ) {
				return ( isnan( M3 ) ) ? NaN : null;
			}
			// Calculate the population skewness:
			g1 = sqrt( N )*M3 / pow( M2, 1.5 );

			// Return the corrected sample skewness:
			return sqrt( N*(N-1) )*g1 / (N-2);
		}
		N += 1;
		delta = x - mean;
		deltaN = delta / N;
		term1 = delta * deltaN * (N-1);

		tmp = term1 * deltaN * (N-2);
		tmp -= 3.0 * deltaN * M2;
		M3 += tmp;

		M2 += term1;
		mean += deltaN;
		if ( N < 3 ) {
			return ( isnan( M3 ) ) ? NaN : null;
		}
		// Calculate the population skewness:
		g1 = sqrt( N )*M3 / pow( M2, 1.5 );

		// Return the corrected sample skewness:
		return sqrt( N*(N-1) )*g1 / (N-2);
	}
}


// EXPORTS //

module.exports = incrskewness;
