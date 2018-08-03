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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving variance-to-mean ratio (VMR).
*
* ## Method
*
* -   Let \\(W\\) be a window of \\(N\\) elements over which we want to compute a variance-to-mean ratio (VMR).
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
* -   Rearranging terms gives us the update equation for the unbiased sample variance
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= (x_N - x_0)(x_N + x_0) - (x_N - x_0)(\bar{x}_{i+1} + \bar{x}_{i})
*     &= (x_N - x_0)(x_N + x_0 - \bar{x}_{i+1} - \bar{x}_{i}) \\
*     &= (x_N - x_0)(x_N - \bar{x}_{i+1} + x_0 - \bar{x}_{i})
*     \end{align*}
*     ```
*
* @param {PositiveInteger} W - window size
* @param {number} [mean] - mean value
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a number primitive
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmvmr( 3 );
*
* var F = accumulator();
* // returns null
*
* F = accumulator( 2.0 );
* // returns 0.0
*
* F = accumulator( 1.0 );
* // returns ~0.33
*
* F = accumulator( 3.0 );
* // returns 0.5
*
* F = accumulator( 7.0 );
* // returns ~2.55
*
* F = accumulator();
* // returns ~2.55
*
* @example
* var accumulator = incrmvmr( 3, 2.0 );
*/
function incrmvmr( W, mean ) {
	var delta;
	var buf;
	var tmp;
	var M2;
	var mu;
	var d1;
	var d2;
	var N;
	var n;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Array( W );
	n = W - 1;
	M2 = 0.0;
	i = -1;
	N = 0;
	if ( arguments.length > 1 ) {
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
	* @param {number} [x] - input value
	* @returns {(number|null)} accumulated value or null
	*/
	function accumulator1( x ) {
		var k;
		var v;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N === 1 ) {
				return ( isnan( M2 ) ) ? NaN : 0.0/mu;
			}
			if ( N < W ) {
				return ( M2/(N-1) ) / mu;
			}
			return ( M2/n ) / mu;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: incoming value is NaN, the sliding second moment is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			mu = NaN;
			M2 = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			buf[ i ] = x; // update buffer
			N += 1;
			delta = x - mu;
			mu += delta / N;
			M2 += delta * (x - mu);
			if ( N === 1 ) {
				return 0.0 / mu;
			}
			return ( M2/(N-1) ) / mu;
		}
		// Case: N = W = 1
		else if ( N === 1 ) {
			mu = x;
			M2 = 0.0;
			return M2 / mu;
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
		buf[ i ] = x;

		return ( M2/n ) / mu;
	}

	/**
	* If provided a value, the accumulator function returns an updated accumulated value. If not provided a value, the accumulator function returns the current accumulated value.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} accumulated value or null
	*/
	function accumulator2( x ) {
		var k;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N < W ) {
				return ( M2/N ) / mu;
			}
			return ( M2/W ) / mu;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: incoming value is NaN, the sliding second moment is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			M2 = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			buf[ i ] = x; // update buffer
			N += 1;
			delta = x - mu;
			M2 += delta * delta;
			return ( M2/N ) / mu;
		}
		// Case: outgoing value is NaN, and, thus, we need to compute the accumulated values...
		else if ( isnan( buf[ i ] ) ) {
			M2 = 0.0;
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					if ( isnan( buf[ k ] ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						M2 = NaN;
						break; // second moment is automatically NaN, so no need to continue
					}
					delta = buf[ k ] - mu;
					M2 += delta * delta;
				}
			}
		}
		// Case: neither the current second moment nor the incoming value are NaN, so we need to update the accumulated values...
		else if ( isnan( M2 ) === false ) {
			tmp = buf[ i ];
			M2 += ( x-tmp ) * ( x-mu + tmp-mu );
		}
		// Case: the current second moment is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;

		return ( M2/W ) / mu;
	}
}


// EXPORTS //

module.exports = incrmvmr;
