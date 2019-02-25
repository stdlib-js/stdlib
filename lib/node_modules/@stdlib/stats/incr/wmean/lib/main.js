/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Returns an accumulator function which incrementally computes a weighted arithmetic mean.
*
* ## Method
*
* -   The weighted arithmetic mean is defined as
*
*     ```tex
*     \mu = \frac{\sum_{i=0}^{n-1} w_i x_i}{\sum_{i=0}^{n-1} w_i}
*     ```
*
*     where \\( w_i \\) are the weights.
*
* -   The weighted arithmetic mean is equivalent to the simple arithmetic mean when all weights are equal.
*
*     ```tex
*     \begin{align*}
*     \mu &= \frac{\sum_{i=0}^{n-1} w x_i}{\sum_{i=0}^{n-1} w} \\
*         &= \frac{w\sum_{i=0}^{n-1} x_i}{nw} \\
*         &= \frac{1}{n} \sum_{i=0}^{n-1}
*     \end{align*}
*     ```
*
* -   If the weights are different, then one can view weights either as sample frequencies or as a means to calculate probabilities where \\( p_i = w_i / \sum w_i \\).
*
* -   To derive an incremental formula for computing a weighted arithmetic mean, let
*
*     ```tex
*     W_n = \sum_{i=1}^{n} w_i
*     ```
*
* -   Accordingly,
*
*     ```tex
*     \begin{align*}
*     \mu_n &= \frac{1}{W_n} \sum_{i=1}^{n} w_i x_i \\
*         &= \frac{1}{W_n} \biggl(w_n x_n + \sum_{i=1}^{n-1} w_i x_i \biggr) \\
*         &= \frac{1}{W_n} (w_n x_n + W_{n-1} \mu_{n-1}) \\
*         &= \frac{1}{W_n} (w_n x_n + (W_n - w_n) \mu_{n-1}) \\
*         &= \frac{1}{W_n} (W_n \mu_{n-1} + w_n x_n - w_n\mu_{n-1}) \\
*         &= \mu_{n-1} + \frac{w_n}{W_n} (x_n - \mu_{n-1})
*     \end{align*}
*     ```
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrwmean();
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0, 1.0 );
* // returns 2.0
*
* mu = accumulator( 2.0, 0.5 );
* // returns 2.0
*
* mu = accumulator( 3.0, 1.5 );
* // returns 2.5
*
* mu = accumulator();
* // returns 2.5
*/
function incrwmean() {
	var wsum;
	var FLG;
	var mu;

	wsum = 0.0;
	mu = 0.0;

	return accumulator;

	/**
	* If provided arguments, the accumulator function returns an updated weighted mean. If not provided arguments, the accumulator function returns the current weighted mean.
	*
	* @private
	* @param {number} [x] - value
	* @param {number} [w] - weight
	* @returns {(number|null)} weighted mean or null
	*/
	function accumulator( x, w ) {
		if ( arguments.length === 0 ) {
			if ( FLG === void 0 ) {
				return null;
			}
			return mu;
		}
		FLG = true;
		wsum += w;
		mu += ( w/wsum ) * ( x-mu );
		return mu;
	}
}


// EXPORTS //

module.exports = incrwmean;
