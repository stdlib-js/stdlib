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
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving unbiased sample covariance.
*
* ## Method
*
* -   Let \\(W\\) be a window of \\(N\\) elements over which we want to compute an unbiased sample covariance.
*
* -   We begin by defining the covariance \\( \operatorname{cov}_n(x,y) \\) for a window \\(n\\) as follows
*
*     ```tex
*     \operatorname{cov}_n(x,y) &= \frac{C_n}{n}
*     ```
*
*     where \\(C_n\\) is the co-moment, which is defined as
*
*     ```tex
*     C_n = \sum_{i=1}^{N} ( x_i - \bar{x}_n ) ( y_i - \bar{y}_n )
*     ```
*
*     and where \\(\bar{x}_n\\) and \\(\bar{y}_n\\) are the sample means for \\(x\\) and \\(y\\), respectively, and \\(i=1\\) specifies the first element in a window.
*
* -   The sample mean is computed using the canonical formula
*
*     ```tex
*     \bar{x}_n = \frac{1}{N} \sum_{i=1}^{N} x_i
*     ```
*
*     which, taking into account a previous window, can be expressed
*
*     ```tex
*     \begin{align*}
*     \bar{x}_n &= \frac{1}{N} \biggl( \sum_{i=0}^{N-1} x_i - x_0 + x_N \biggr) \\
*               &= \bar{x}_{n-1} + \frac{x_N - x_0}{N}
*     \end{align*}
*     ```
*
*     where \\(x_0\\) is the first value in the previous window.
*
* -   We can substitute into the co-moment equation
*
*     ```tex
*     \begin{align*}
*     C_n &= \sum_{i=1}^{N} ( x_i - \bar{x}_n ) ( y_i - \bar{y}_n ) \\
*         &= \sum_{i=1}^{N} \biggl( x_i - \bar{x}_{n-1} - \frac{x_N - x_0}{N} \biggr) \biggl( y_i - \bar{y}_{n-1} - \frac{y_N - y_0}{N} \biggr) \\
*         &= \sum_{i=1}^{N} \biggl( \Delta x_{i,n-1} - \frac{x_N - x_0}{N} \biggr) \biggl( \Delta y_{i,n-1} - \frac{y_N - y_0}{N} \biggr)
*     \end{align*}
*     ```
*
*     where
*
*     ```tex
*     \Delta x_{i,k} = x_i - \bar{x}_{k}
*     ```
*
* -   We can subsequently expand terms and apply a summation identity
*
*     ```tex
*     \begin{align*}
*     C_n &= \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} - \sum_{i=1}^{N} \Delta x_{i,n-1} \biggl( \frac{y_N - y_0}{N} \biggr) - \sum_{i=1}^{N} \Delta y_{i,n-1} \biggl( \frac{x_N - x_0}{N} \biggr) + \sum_{i=1}^{N} \biggl( \frac{x_N - x_0}{N} \biggr) \biggl( \frac{y_N - y_0}{N} \biggr) \\
*         &= \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} - \biggl( \frac{y_N - y_0}{N} \biggr) \sum_{i=1}^{N} \Delta x_{i,n-1} - \biggl( \frac{x_N - x_0}{N} \biggr) \sum_{i=1}^{N} \Delta y_{i,n-1} + \frac{(x_N - x_0)(y_N - y_0)}{N}
*     \end{align*}
*     ```
*
* -   Let us first consider the second term which we can reorganize as follows
*
*     ```tex
*     \begin{align*}
*     \biggl( \frac{y_N - y_0}{N} \biggr) \sum_{i=1}^{N} \Delta x_{i,n-1} &= \biggl( \frac{y_N - y_0}{N} \biggr) \sum_{i=1}{N} ( x_i - \bar{x}_{n-1}) \\
*         &= \biggl( \frac{y_N - y_0}{N} \biggr) \sum_{i=1}^{N} x_i - \biggl( \frac{y_N - y_0}{N} \biggr) \sum_{i=1}^{N} \bar{x}_{n-1} \\
*         &= (y_N - y_0) \bar{x}_{n} - (y_N - y_0)\bar{x}_{n-1} \\
*         &= (y_N - y_0) (\bar{x}_{n} - \bar{x}_{n-1}) \\
*         &= \frac{(x_N - x_0)(y_N - y_0)}{N}
*     \end{align*}
*     ```
*
* -   The third term can be reorganized in a manner similar to the second term such that
*
*     ```tex
*     \biggl( \frac{x_N - x_0}{N} \biggr) \sum_{i=1}^{N} \Delta y_{i,n-1} = \frac{(x_N - x_0)(y_N - y_0)}{N}
*     ```
*
* -   Substituting back into the equation for the co-moment
*
*     ```tex
*     \begin{align*}
*     C_n &= \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} - \frac{(x_N - x_0)(y_N - y_0)}{N} - \frac{(x_N - x_0)(y_N - y_0)}{N} + \frac{(x_N - x_0)(y_N - y_0)}{N} \\
*         &= \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} - \frac{(x_N - x_0)(y_N - y_0)}{N}
*     \end{align*}
*     ```
*
* -   Let us now consider the first term which we can modify as follows
*
*     ```tex
*     \begin{align*}
*     \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} &= \sum_{i=1}^{N} (x_i - \bar{x}_{n-1})(y_i - \bar{y}_{n-1}) \\
*         &= \sum_{i=1}^{N-1} (x_i - \bar{x}_{n-1})(y_i - \bar{y}_{n-1}) + (x_N - \bar{x}_{n-1})(y_N - \bar{y}_{n-1}) \\
*         &= \sum_{i=1}^{N-1} (x_i - \bar{x}_{n-1})(y_i - \bar{y}_{n-1}) + (x_N - \bar{x}_{n-1})(y_N - \bar{y}_{n-1}) + (x_0 - \bar{x}_{n-1})(y_0 - \bar{y}_{n-1}) - (x_0 - \bar{x}_{n-1})(y_0 - \bar{y}_{n-1}) \\
*         &= \sum_{i=0}^{N-1} (x_i - \bar{x}_{n-1})(y_i - \bar{y}_{n-1}) + (x_N - \bar{x}_{n-1})(y_N - \bar{y}_{n-1}) - (x_0 - \bar{x}_{n-1})(y_0 - \bar{y}_{n-1})
*     \end{align*}
*     ```
*
*     where we recognize that the first term equals the co-moment for the previous window
*
*     ```tex
*     C_{n-1} = \sum_{i=0}^{N-1} (x_i - \bar{x}_{n-1})(y_i - \bar{y}_{n-1})
*     ```
*
*     In which case,
*
*     ```tex
*     \begin{align*}
*     \sum_{i=1}^{N} \Delta x_{i,n-1} \Delta y_{i,n-1} &= C_{n-1} + (x_N - \bar{x}_{n-1})(y_N - \bar{y}_{n-1}) - (x_0 - \bar{x}_{n-1})(y_0 - \bar{y}_{n-1}) \\
*         &= C_{n-1} + \Delta x_{N,n-1} \Delta y_{N,n-1} - \Delta x_{0,n-1} \Delta y_{0,n-1}
*     \end{align*}
*     ```
*
* -   Substituting into the equation for the co-moment
*
*     ```tex
*     C_n = C_{n-1} + \Delta x_{N,n-1} \Delta y_{N,n-1} - \Delta x_{0,n-1} \Delta y_{0,n-1} - \frac{(x_N - x_0)(y_N - y_0)}{N}
*     ```
*
* -   We can make one further modification to the last term
*
*     ```tex
*     \begin{align*}
*     \frac{(x_N - x_0)(y_N - y_0)}{N} &= \frac{(x_N - \bar{x}_{n-1} - x_0 + \bar{x}_{n-1})(y_N - \bar{y}_{n-1} - y_0 + \bar{y}_{n-1})}{N} \\
*         &= \frac{(\Delta x_{N,n-1} - \Delta x_{0,n-1})(\Delta y_{N,n-1} - \Delta y_{0,n-1})}{N}
*     \end{align*}
*     ```
*
*     which, upon substitution into the equation for the co-moment, yields
*
*     ```tex
*     C_n = C_{n-1} + \Delta x_{N,n-1} \Delta y_{N,n-1} - \Delta x_{0,n-1} \Delta y_{0,n-1} - \frac{(\Delta x_{N,n-1} - \Delta x_{0,n-1})(\Delta y_{N,n-1} - \Delta y_{0,n-1})}{N}
*     ```
*
*
* @param {PositiveInteger} W - window size
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a number primitive
* @throws {TypeError} third argument must be a number primitive
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmcovariance( 3 );
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* v = accumulator( -5.0, 3.14 );
* // returns ~-7.49
*
* v = accumulator( 3.0, -1.0 );
* // returns -8.35
*
* v = accumulator( 5.0, -9.5 );
* // returns -29.42
*
* v = accumulator();
* // returns -29.42
*
* @example
* var accumulator = incrmcovariance( 3, -2.0, 10.0 );
*/
function incrmcovariance( W, meanx, meany ) {
	var buf;
	var dx0;
	var dxN;
	var dy0;
	var dyN;
	var mx;
	var my;
	var wi;
	var C;
	var N;
	var n;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. First argument must be a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( 2*W ); // strided array
	n = W - 1;
	C = 0.0;
	wi = -1;
	N = 0;
	if ( arguments.length > 1 ) {
		if ( !isNumber( meanx ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a number primitive. Value: `' + meanx + '`.' );
		}
		if ( !isNumber( meany ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a number primitive. Value: `' + meany + '`.' );
		}
		mx = meanx;
		my = meany;
		return accumulator2;
	}
	mx = 0.0;
	my = 0.0;
	return accumulator1;

	/**
	* If provided a value, the accumulator function returns an updated unbiased sample covariance. If not provided a value, the accumulator function returns the current unbiased sample covariance.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} unbiased sample covariance or null
	*/
	function accumulator1( x, y ) {
		var v1;
		var v2;
		var k;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N === 1 ) {
				return 0.0;
			}
			if ( N < W ) {
				return C / (N-1);
			}
			return C / n;
		}
		// Update the window and strided array indices for managing the circular buffer:
		wi = (wi+1) % W;
		i = 2 * wi;

		// Case: an incoming value is NaN, the sliding co-moment is automatically NaN...
		if ( isnan( x ) || isnan( y ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			C = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			buf[ i ] = x; // update buffer
			buf[ i+1 ] = y;

			N += 1;
			dxN = x - mx;
			mx += dxN / N;
			my += ( y-my ) / N;
			C += dxN * ( y-my ); // Note: repeated `y-my` is intentional, as `my` is updated when used here
			if ( N === 1 ) {
				return 0.0;
			}
			return C / (N-1);
		}
		// Case: N = W = 1
		else if ( N === 1 ) {
			return 0.0;
		}
		// Case: an outgoing value is NaN, and, thus, we need to compute the accumulated values...
		else if ( isnan( buf[ i ] ) || isnan( buf[ i+1 ] ) ) {
			N = 1;
			mx = x;
			my = y;
			C = 0.0;
			for ( k = 0; k < W; k++ ) {
				j = 2 * k; // convert to a strided array index
				if ( j !== i ) {
					v1 = buf[ j ];
					v2 = buf[ j+1 ];
					if ( isnan( v1 ) || isnan( v2 ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						C = NaN;
						break; // co-moment is automatically NaN, so no need to continue
					}
					N += 1;
					dxN = v1 - mx;
					mx += dxN / N;
					my += ( v2-my ) / N;
					C += dxN * ( v2-my ); // Note: repeated `y-my` is intentional, as `my` is updated when used here
				}
			}
		}
		// Case: neither the current co-moment nor the incoming values are NaN, so we need to update the accumulated values...
		else if ( isnan( C ) === false ) {
			dx0 = buf[ i ] - mx;
			dy0 = buf[ i+1 ] - my;
			dxN = x - mx;
			dyN = y - my;
			C += (dxN*dyN) - (dx0*dy0) - ( (dxN-dx0)*(dyN-dy0)/W );
			mx += ( dxN-dx0 ) / W;
			my += ( dyN-dy0 ) / W;
		}
		// Case: the current co-moment is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;
		buf[ i+1 ] = y;

		return C / n;
	}

	/**
	* If provided a value, the accumulator function returns an updated unbiased sample covariance. If not provided a value, the accumulator function returns the current unbiased sample covariance.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} unbiased sample covariance or null
	*/
	function accumulator2( x, y ) {
		var k;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N < W ) {
				return C / N;
			}
			return C / W;
		}
		// Update the window and strided array indices for managing the circular buffer:
		wi = (wi+1) % W;
		i = 2 * wi;

		// Case: an incoming value is NaN, the sliding co-moment is automatically NaN...
		if ( isnan( x ) || isnan( y ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			C = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			buf[ i ] = x; // update buffer
			buf[ i+1 ] = y;

			N += 1;
			C += ( x-mx ) * ( y-my );
			return C / N;
		}
		// Case: an outgoing value is NaN, and, thus, we need to compute the accumulated values...
		else if ( isnan( buf[ i ] ) || isnan( buf[ i+1 ] ) ) {
			C = 0.0;
			for ( k = 0; k < W; k++ ) {
				j = 2 * k; // convert to a strided array index
				if ( j !== i ) {
					if ( isnan( buf[ j ] ) || isnan( buf[ j+1 ] ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						C = NaN;
						break; // co-moment is automatically NaN, so no need to continue
					}
					C += ( buf[j]-mx ) * ( buf[j+1]-my );
				}
			}
		}
		// Case: neither the current co-moment nor the incoming values are NaN, so we need to update the accumulated values...
		else if ( isnan( C ) === false ) {
			// Use textbook formula along with simplification arising from difference of sums:
			C += ( (x-mx)*(y-my) ) - ( (buf[i]-mx)*(buf[i+1]-my) );
		}
		// Case: the current co-moment is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;
		buf[ i+1 ] = y;

		return C / W;
	}
}


// EXPORTS //

module.exports = incrmcovariance;
