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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving sample Pearson product-moment correlation coefficient.
*
* ## Method
*
* -   Let \\(W\\) be a window of \\(N\\) elements over which we want to compute a sample Pearson product-moment correlation coefficient.
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
* -   To calculate corrected sample standard deviations, we first recognize that the corrected sample standard deviation is defined as the square root of the unbiased sample variance. Accordingly, in order to derive an update equation for the corrected sample standard deviation, deriving an update equation for the unbiased sample variance is sufficient.
*
* -   The difference between the unbiased sample variance in a window \\(W_{n-1}\\) and the unbiased sample variance in a window \\(W_{n})\\) is given by
*
*     ```tex
*     \Delta s^2 = s_n^2 - s_{n-1}^2
*     ```
*
* -   If we multiply both sides by \\(N-1\\),
*
*     ```tex
*     (N-1)(\Delta s^2) = (N-1)s_{n}^2 - (N-1)s_{n-1}^2
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
*     (N-1)(\Delta s^2) = \biggl(\sum_{i=1}^N x_i^2 - N\bar{x}_{n}^2 \biggr) - \biggl(\sum_{i=0}^{N-1} x_i^2 - N\bar{x}_{n-1}^2 \biggr)
*     ```
*
* -   This can be further simplified by recognizing that subtracting the sums reduces to \\(x_N^2 - x_0^2\\); in which case,
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= x_N^2 - x_0^2 - N\bar{x}_{n}^2 + N\bar{x}_{n-1}^2 \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{n}^2 - \bar{x}_{n-1}^2) \\
*     &= x_N^2 - x_0^2 - N(\bar{x}_{n} - \bar{x}_{n-1})(\bar{x}_{n} + \bar{x}_{n-1})
*     \end{align*}
*     ```
*
* -   Recognizing that the difference of means can be expressed
*
*     ```tex
*     \bar{x}_{n} - \bar{x}_{n-1} = \frac{1}{N} \biggl( \sum_{i=1}^N x_i - \sum_{i=0}^{N-1} x_i \biggr) = \frac{x_N - x_0}{N}
*     ```
*
*     and substituting into the equation above
*
*     ```tex
*     (N-1)(\Delta s^2) = x_N^2 - x_0^2 - (x_N - x_0)(\bar{x}_{n} + \bar{x}_{n-1})
*     ```
*
* -   Rearranging terms gives us the update equation
*
*     ```tex
*     \begin{align*}
*     (N-1)(\Delta s^2) &= (x_N - x_0)(x_N + x_0) - (x_N - x_0)(\bar{x}_{n} + \bar{x}_{n-1})
*     &= (x_N - x_0)(x_N + x_0 - \bar{x}_{n} - \bar{x}_{n-1}) \\
*     &= (x_N - x_0)(x_N - \bar{x}_{n} + x_0 - \bar{x}_{n-1})
*     \end{align*}
*     ```
*
* -   To compute the corrected sample standard deviation, we apply Bessel's correction and take the square root.
*
* -   The sample Pearson product-moment correlation coefficient can thus be calculated as
*
*     ```tex
*     r_n(x,y) = \frac{\operatorname{cov}_n(x,y)}{\sigma_{x,n} \sigma_{y,n}}
*     ```
*
*     where \\(\sigma_{x,n}\\) and \\(\sigma_{y,n}\\) are the corrected sample standard deviations for \\(x\\) and \\(y\\), respectively, for a window \\(n\\).
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
* var accumulator = incrmpcorr( 3 );
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 1.0 );
* // returns 0.0
*
* r = accumulator( -5.0, 3.14 );
* // returns ~-1.0
*
* r = accumulator( 3.0, -1.0 );
* // returns ~-0.925
*
* r = accumulator( 5.0, -9.5 );
* // returns ~-0.863
*
* r = accumulator();
* // returns ~-0.863
*
* @example
* var accumulator = incrmpcorr( 3, -2.0, 10.0 );
*/
function incrmpcorr( W, meanx, meany ) {
	var buf;
	var dx0;
	var dxN;
	var dy0;
	var dyN;
	var M2x;
	var M2y;
	var mx;
	var my;
	var sx;
	var sy;
	var dx;
	var dy;
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
	M2x = 0.0;
	M2y = 0.0;
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
	* If provided a value, the accumulator function returns an updated sample correlation coefficient. If not provided a value, the accumulator function returns the current sample correlation coefficient.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} sample correlation coefficient or null
	*/
	function accumulator1( x, y ) {
		var v1;
		var v2;
		var n1;
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
				return ( C/(N-1) ) / ( sx*sy );
			}
			return ( C/n ) / ( sx*sy );
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

			dx = x - mx;
			mx += dx / N;
			M2x += dx * ( x-mx );

			dy = y - my;
			my += dy / N;
			dyN = y - my;
			M2y += dy * dyN;

			C += dx * dyN;
			if ( N === 1 ) {
				return 0.0;
			}
			n1 = N - 1;
			sx = sqrt( M2x/n1 );
			sy = sqrt( M2y/n1 );
			return ( C/n1 ) / ( sx*sy ); // Note: why all the dividing by `N`? To avoid overflow.
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
			M2x = 0.0;
			M2y = 0.0;
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

					dx = v1 - mx;
					mx += dx / N;
					M2x += dx * ( v1-mx );

					dy = v2 - my;
					my += dy / N;
					dyN = v2 - my;
					M2y += dy * dyN;

					C += dx * dyN;
				}
			}
		}
		// Case: neither the current co-moment nor the incoming values are NaN, so we need to update the accumulated values...
		else if ( isnan( C ) === false ) {
			dx0 = buf[ i ] - mx;
			dy0 = buf[ i+1 ] - my;
			dxN = x - mx;
			dyN = y - my;
			dx = dxN - dx0;
			dy = dyN - dy0;
			mx += dx / W;
			my += dy / W;
			M2x += dx * ( dx0+(x-mx) );
			M2y += dy * ( dy0+(y-my) );
			C += (dxN*dyN) - (dx0*dy0) - ( dx*dy/W );
		}
		// Case: the current co-moment is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;
		buf[ i+1 ] = y;

		sx = sqrt( M2x/n );
		sy = sqrt( M2y/n );
		return ( C/n ) / ( sx*sy ); // Note: why all the dividing by `n`? To avoid overflow.
	}

	/**
	* If provided a value, the accumulator function returns an updated sample correlation coefficient. If not provided a value, the accumulator function returns the current sample correlation coefficient.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} sample correlation coefficient or null
	*/
	function accumulator2( x, y ) {
		var k;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N < W ) {
				return ( C/N ) / ( sx*sy );
			}
			return ( C/W ) / ( sx*sy );
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
			dx = x - mx;
			M2x += dx * dx;
			dy = y - my;
			M2y += dy * dy;

			C += dx * dy;
			sx = sqrt( M2x/N );
			sy = sqrt( M2y/N );
			return ( C/N ) / ( sx*sy ); // Note: why all the dividing by `N`? To avoid overflow.
		}
		// Case: an outgoing value is NaN, and, thus, we need to compute the accumulated values...
		else if ( isnan( buf[ i ] ) || isnan( buf[ i+1 ] ) ) {
			M2x = 0.0;
			M2y = 0.0;
			C = 0.0;
			for ( k = 0; k < W; k++ ) {
				j = 2 * k; // convert to a strided array index
				if ( j !== i ) {
					if ( isnan( buf[ j ] ) || isnan( buf[ j+1 ] ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						C = NaN;
						break; // co-moment is automatically NaN, so no need to continue
					}
					dx = buf[j] - mx;
					M2x += dx * dx;
					dy = buf[j+1] - my;
					M2y += dy * dy;
					C += dx * dy;
				}
			}
		}
		// Case: neither the current co-moment nor the incoming values are NaN, so we need to update the accumulated values...
		else if ( isnan( C ) === false ) {
			// Use textbook formulas along with simplification arising from difference of sums:
			dx0 = buf[ i ] - mx;
			dxN = x - mx;
			dy0 = buf[ i+1 ] - my;
			dyN = y - my;
			M2x += ( dxN-dx0 ) * ( dxN+dx0 );
			M2y += ( dyN-dy0 ) * ( dyN+dy0 );
			C += ( dxN*dyN ) - ( dx0*dy0 );
		}
		// Case: the current co-moment is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;
		buf[ i+1 ] = y;

		sx = sqrt( M2x/W );
		sy = sqrt( M2y/W );
		return ( C/W ) / ( sx*sy ); // Note: why all the dividing by `W`? To avoid overflow.
	}
}


// EXPORTS //

module.exports = incrmpcorr;
