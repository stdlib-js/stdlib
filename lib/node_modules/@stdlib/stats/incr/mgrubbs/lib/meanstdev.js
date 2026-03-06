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


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving arithmetic mean and corrected sample standard deviation.
*
* ## Method
*
* -   Let \\(W\\) be a window of \\(N\\) elements over which we want to compute a corrected sample standard deviation.
*
* -   We first recognize that the corrected sample standard deviation is defined as the square root of the unbiased sample variance. Accordingly, in order to derive an update equation for the corrected sample standard deviation, deriving an update equation for the unbiased sample variance is sufficient.
*
* -   The difference between the unbiased sample variance in a window \\(W_i\\) and the unbiased sample variance in a window \\(W_{i+1})\\) is given by
*
*     ```tex
*     \Delta s^2 = s_{i+1}^2 - s_{i}^2
*     ```
*
* -   If we multiply both sides by \\(N-1\\),
*
*     ```tex
*     (N-1)(\Delta s^2) = (N-1)s_{i+1}^2 - (N-1)s_{i}^2
*     ```
*
* -   If we substitute the definition of the unbiased sample variance having the form
*
*     ```tex
*     \begin{align*}
*     s^2 &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} (x_i - \bar{x})^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} (x_i^2 - 2\bar{x}x_i + \bar{x}^2) \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - 2\bar{x} \sum_{i=1}^{N} x_i + \sum_{i=1}^{N} \bar{x}^2) \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - \frac{2N\bar{x}\sum_{i=1}^{N} x_i}{N} + N\bar{x}^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - 2N\bar{x}^2 + N\bar{x}^2 \biggr) \\
*         &= \frac{1}{N-1} \biggl( \sum_{i=1}^{N} x_i^2 - N\bar{x}^2 \biggr)
*     \end{align*}
*     ```
*
*     we return
*
*     ```tex
*     (N-1)(\Delta s^2) = \biggl(\sum_{k=1}^N x_k^2 - N\bar{x}_{i+1}^2 \biggr) - \biggl(\sum_{k=0}^{N-1} x_k^2 - N\bar{x}_{i}^2 \biggr)
*     ```
*
* -   This can be further simplified by recognizing that subtracting the sums reduces to \\(x_N^2 - x_0^2\\); in which case,
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= x_N^2 - x_0^2 - N\bar{x}_{i+1}^2 + N\bar{x}_{i}^2 \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{i+1}^2 - \bar{x}_{i}^2) \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{i+1} - \bar{x}_{i})(\bar{x}_{i+1} + \bar{x}_{i})
*     \end{align*}
*     ```
*
* -   Recognizing that the difference of means can be expressed
*
*     ```tex
*     \bar{x}_{i+1} - \bar{x}_i = \frac{1}{N} \biggl( \sum_{k=1}^N x_k - \sum_{k=0}^{N-1} x_k \biggr) = \frac{x_N - x_0}{N}
*     ```
*
*     and substituting into the equation above
*
*     ```tex
*     (N-1)(\Delta s^2) = x_N^2 - x_0^2 - (x_N - x_0)(\bar{x}_{i+1} + \bar{x}_{i})
*     ```
*
* -   Rearranging terms gives us the update equation
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= (x_N - x_0)(x_N + x_0) - (x_N - x_0)(\bar{x}_{i+1} + \bar{x}_{i})
*     &= (x_N - x_0)(x_N + x_0 - \bar{x}_{i+1} - \bar{x}_{i}) \\
*     &= (x_N - x_0)(x_N - \bar{x}_{i+1} + x_0 - \bar{x}_{i})
*     \end{align*}
*     ```
*
* @private
* @param {Collection} out - output array
* @param {PositiveInteger} W - window size
* @param {Collection} buf - data buffer
* @returns {Function} accumulator function
*
* @example
* var buf = [ 0.0, 0.0, 0.0 ];
* var accumulator = incrmmeanstdev( [ 0.0, 0.0 ], 3, buf );
*
* var v = accumulator( 2.0, 0 );
* // returns [ 2.0, 0.0 ]
*
* buf[ 0 ] = 2.0;
*
* v = accumulator( -5.0, 1 );
* // returns [ -1.5, ~4.95 ]
*
* buf[ 1 ] = -5.0;
*
* v = accumulator( 3.0, 2 );
* // returns [ 0.0, ~4.36 ]
*
* buf[ 2 ] = 3.0;
*
* v = accumulator( 5.0, 0 );
* // returns [ 1.0, ~5.29 ]
*
* buf[ 0 ] = 5.0;
*/
function incrmmeanstdev( out, W, buf ) {
	var delta;
	var tmp;
	var M2;
	var mu;
	var d1;
	var d2;
	var N;
	var n;

	n = W - 1;
	M2 = 0.0;
	mu = 0.0;
	N = 0;

	return accumulator;

	/**
	* Updates accumulator state.
	*
	* @private
	* @param {number} x - input value
	* @param {NonNegativeInteger} i - buffer index
	* @returns {ArrayLike} output array
	*/
	function accumulator( x, i ) {
		var k;
		var v;

		// Case: incoming value is NaN, the sliding second moment is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			mu = NaN;
			M2 = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			delta = x - mu;
			mu += delta / N;
			M2 += delta * (x - mu);

			out[ 0 ] = mu;
			if ( N === 1 ) {
				out[ 1 ] = 0.0;
			} else {
				out[ 1 ] = sqrt( M2/(N-1) );
			}
			return out;
		}
		// Case: N = W = 1
		else if ( N === 1 ) {
			mu = x;
			M2 = 0.0;
			out[ 0 ] = x;
			out[ 1 ] = 0.0;
			return out;
		}
		// Case: outgoing value is NaN, and, thus, we need to compute the accumulated values...
		else if ( isnan( buf[ i ] ) ) {
			N = 1;
			mu = x;
			M2 = 0.0;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					v = buf[ k ];
					if ( isnan( v ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						mu = NaN;
						M2 = NaN;
						break; // second moment is automatically NaN, so no need to continue
					}
					N += 1;
					delta = v - mu;
					mu += delta / N;
					M2 += delta * (v - mu);
				}
			}
		}
		// Case: neither the current second moment nor the incoming value are NaN, so we need to update the accumulated values...
		else if ( isnan( M2 ) === false ) {
			tmp = buf[ i ];
			delta = x - tmp;
			d1 = tmp - mu;
			mu += delta / W;
			d2 = x - mu;
			M2 += delta * (d1 + d2);
		}
		// Case: the current second moment is NaN, so nothing to do until the buffer no longer contains NaN values...

		out[ 0 ] = mu;
		out[ 1 ] = sqrt( M2/n );
		return out;
	}
}


// EXPORTS //

module.exports = incrmmeanstdev;
