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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a variance-to-mean ratio (VMR).
*
* ## Method
*
* -   This implementation uses [Welford's method][algorithms-variance] for efficient computation, which can be derived as follows. Let
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
* [algorithms-variance]: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance
*
* @param {number} [mean] - mean value
* @throws {TypeError} must provide a number primitive
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrvmr();
*
* var D = accumulator();
* // returns null
*
* D = accumulator( 2.0 );
* // returns 0.0
*
* D = accumulator( 1.0 );
* // returns ~0.33
*
* D = accumulator();
* // returns ~0.33
*
* @example
* var accumulator = incrvmr( 3.14 );
*/
function incrvmr( mean ) {
	var delta;
	var mu;
	var M2;
	var N;

	M2 = 0.0;
	N = 0;
	if ( arguments.length ) {
		if ( !isNumber( mean ) ) {
			throw new TypeError( 'invalid argument. Must provide a number primitive. Value: `' + mean + '`.' );
		}
		mu = mean;
		return accumulator2;
	}
	mu = 0.0;
	return accumulator1;

	/**
	* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} accumulated value or null
	*/
	function accumulator1( x ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N === 1 ) {
				return ( isnan( M2 ) ) ? NaN : 0.0/mu;
			}
			return ( M2/(N-1) ) / mu;
		}
		N += 1;
		delta = x - mu;
		mu += delta / N;
		M2 += delta * ( x - mu );
		if ( N < 2 ) {
			return ( isnan( M2 ) ) ? NaN : 0.0/mu;
		}
		return ( M2/(N-1) ) / mu;
	}

	/**
	* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} accumulated value or null
	*/
	function accumulator2( x ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return ( M2/N ) / mu;
		}
		N += 1;
		delta = x - mu;
		M2 += delta * delta;
		return ( M2/N ) / mu;
	}
}


// EXPORTS //

module.exports = incrvmr;
