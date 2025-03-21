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

/**
* Returns an accumulator function which incrementally computes an arithmetic mean.
*
* ## Method
*
* -   This implementation uses [Welford's method][algorithms-variance] for efficient computation, which can be derived as follows
*
*     ```tex
*     \begin{align*}
*     \mu_n &= \frac{1}{n} \sum_{i=0}^{n-1} x_i \\
*           &= \frac{1}{n} \biggl(x_{n-1} + \sum_{i=0}^{n-2} x_i \biggr) \\
*           &= \frac{1}{n} (x_{n-1} + (n-1)\mu_{n-1}) \\
*           &= \mu_{n-1} + \frac{1}{n} (x_{n-1} - \mu_{n-1})
*     \end{align*}
*     ```
*
* [algorithms-variance]: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmean();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 2.0
*
* mu = accumulator( -5.0 );
* // returns -1.5
*
* mu = accumulator();
* // returns -1.5
*/
function incrmean() {
	var mu;
	var N;

	mu = 0.0;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean. If not provided a value, the accumulator function returns the current mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} mean value or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return mu;
		}
		N += 1;
		mu += (x-mu) / N;
		return mu;
	}
}


// EXPORTS //

module.exports = incrmean;
