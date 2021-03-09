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

var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes an arithmetic mean and unbiased sample variance.
*
* ## Method
*
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
* @param {Collection} [out] - output array
* @throws {TypeError} output argument must be array-like
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmeanvar();
*
* var mv = accumulator();
* // returns null
*
* mv = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* mv = accumulator( -5.0 );
* // returns [ -1.5, 24.5 ]
*
* mv = accumulator( 3.0 );
* // returns [ 0.0, 19.0 ]
*
* mv = accumulator( 5.0 );
* // returns [ 1.25, ~18.92 ]
*
* mv = accumulator();
* // returns [ 1.25, ~18.92 ]
*/
function incrmeanvar( out ) {
	var meanvar;
	var delta;
	var mu;
	var M2;
	var N;
	if ( arguments.length === 0 ) {
		meanvar = [ 0.0, 0.0 ];
	} else {
		if ( !isArrayLike( out ) ) {
			throw new TypeError( 'invalid argument. Output argument must be an array-like object. Value: `' + out + '`.' );
		}
		meanvar = out;
	}
	M2 = 0.0;
	mu = 0.0;
	N = 0;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns updated results. If not provided a value, the accumulator function returns the current results.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(ArrayLikeObject|null)} output array or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			meanvar[ 0 ] = mu; // Why? Because we cannot guarantee someone hasn't mutated the output array
			if ( N === 1 ) {
				if ( isnan( M2 ) ) {
					meanvar[ 1 ] = NaN;
				} else {
					meanvar[ 1 ] = 0.0;
				}
				return meanvar;
			}
			meanvar[ 1 ] = M2 / (N-1);
			return meanvar;
		}
		N += 1;
		delta = x - mu;
		mu += delta / N;
		M2 += delta * ( x - mu );

		meanvar[ 0 ] = mu;
		if ( N < 2 ) {
			if ( isnan( M2 ) ) {
				meanvar[ 1 ] = NaN;
			} else {
				meanvar[ 1 ] = 0.0;
			}
			return meanvar;
		}
		meanvar[ 1 ] = M2 / (N-1);
		return meanvar;
	}
}


// EXPORTS //

module.exports = incrmeanvar;
