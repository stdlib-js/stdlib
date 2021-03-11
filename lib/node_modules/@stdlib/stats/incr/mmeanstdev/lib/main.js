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
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Float64Array = require( '@stdlib/array/float64' );


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
* @param {Collection} [out] - output array
* @param {PositiveInteger} window - window size
* @throws {TypeError} output argument must be array-like
* @throws {TypeError} window size must be a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmeanstdev( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* v = accumulator( -5.0 );
* // returns [ -1.5, ~4.95 ]
*
* v = accumulator( 3.0 );
* // returns [ 0.0, ~4.36 ]
*
* v = accumulator( 5.0 );
* // returns [ 1.0, ~5.29 ]
*
* v = accumulator();
* // returns [ 1.0, ~5.29 ]
*/
function incrmmeanstdev( out, window ) {
	var meanstdev;
	var delta;
	var buf;
	var tmp;
	var M2;
	var mu;
	var d1;
	var d2;
	var W;
	var N;
	var n;
	var i;
	if ( arguments.length === 1 ) {
		meanstdev = [ 0.0, 0.0 ];
		W = out;
	} else {
		if ( !isArrayLike( out ) ) {
			throw new TypeError( 'invalid argument. Output argument must be an array-like object. Value: `' + out + '`.' );
		}
		meanstdev = out;
		W = window;
	}
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Window size must be a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	n = W - 1;
	M2 = 0.0;
	mu = 0.0;
	i = -1;
	N = 0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns updated accumulated values. If not provided a value, the accumulator function returns the current accumulated values.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(ArrayLikeObject|null)} output array or null
	*/
	function accumulator( x ) {
		var k;
		var v;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			meanstdev[ 0 ] = mu;
			if ( N === 1 ) {
				if ( isnan( M2 ) ) {
					meanstdev[ 1 ] = NaN;
				} else {
					meanstdev[ 1 ] = 0.0;
				}
			} else if ( N < W ) {
				meanstdev[ 1 ] = sqrt( M2/(N-1) );
			} else {
				meanstdev[ 1 ] = sqrt( M2/n );
			}
			return meanstdev;
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

			meanstdev[ 0 ] = mu;
			if ( N === 1 ) {
				meanstdev[ 1 ] = 0.0;
			} else {
				meanstdev[ 1 ] = sqrt( M2/(N-1) );
			}
			return meanstdev;
		}
		// Case: N = W = 1
		else if ( N === 1 ) {
			mu = x;
			M2 = 0.0;
			meanstdev[ 0 ] = x;
			meanstdev[ 1 ] = 0.0;
			return meanstdev;
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

		meanstdev[ 0 ] = mu;
		meanstdev[ 1 ] = sqrt( M2/n );
		return meanstdev;
	}
}


// EXPORTS //

module.exports = incrmmeanstdev;
