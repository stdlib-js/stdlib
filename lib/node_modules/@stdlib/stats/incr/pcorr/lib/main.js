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
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation coefficient.
*
* ## Method
*
* -   We begin by defining the co-moment \\(C_n\\)
*
*     ```tex
*     C_n = \sum_{i=1}^{n} ( x_i - \bar{x}_n ) ( y_i - \bar{y}_n )
*     ```
*
*     where \\(\bar{x}_n\\) and \\(\bar{y}_n\\) are the sample means for \\(x\\) and \\(y\\), respectively.
*
* -   Based on Welford's method, we know the update formulas for the sample means are given by
*
*     ```tex
*     \bar{x}_n = \bar{x}_{n-1} + \frac{x_n - \bar{x}_{n-1}}{n}
*     ```
*
*     and
*
*     ```tex
*     \bar{y}_n = \bar{y}_{n-1} + \frac{y_n - \bar{y}_{n-1}}{n}
*     ```
*
* -   Substituting into the equation for \\(C_n\\) and rearranging terms
*
*     ```tex
*     C_n = C_{n-1} + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})
*     ```
*
*     where the apparent asymmetry arises from
*
*     ```tex
*     x_n - \bar{x}_n = \frac{n-1}{n} (x_n - \bar{x}_{n-1})
*     ```
*
*     and, hence, the update term can be equivalently expressed
*
*     ```tex
*     \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})
*     ```
*
* -   The covariance can be defined
*
*     ```tex
*     \begin{align*}
*     \operatorname{cov}_n(x,y) &= \frac{C_n}{n} \\
*     &= \frac{C_{n-1} + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})}{n} \\
*     &= \frac{(n-1)\operatorname{cov}_{n-1}(x,y) + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})}{n}
*     \end{align*}
*     ```
*
* -   Applying Bessel's correction, we arrive at an update formula for calculating an unbiased sample covariance
*
*     ```tex
*     \begin{align*}
*     \operatorname{cov}_n(x,y) &= \frac{n}{n-1}\cdot\frac{(n-1)\operatorname{cov}_{n-1}(x,y) + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})}{n} \\
*     &= \operatorname{cov}_{n-1}(x,y) + \frac{(x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})}{n-1} \\
*     &= \frac{C_{n-1} + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})}{n-1}
*     &= \frac{C_{n-1} + (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_n)}{n-1}
*     \end{align*}
*     ```
*
* -   To calculate the corrected sample standard deviation, we can use Welford's method, which can be derived as follows. We can express the variance as
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
* -   To compute the corrected sample standard deviation, we apply Bessel's correction and take the square root.
*
* -   The sample Pearson product-moment correlation coefficient can thus be calculated as
*
*     ```tex
*     r = \frac{\operatorname{cov}_n(x,y)}{\sigma_x \sigma_y}
*     ```
*
*     where \\(\sigma_x\\) and \\(\sigma_y\\) are the corrected sample standard deviations for \\(x\\) and \\(y\\), respectively.
*
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a number primitive
* @throws {TypeError} second argument must be a number primitive
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrpcorr();
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
* r = accumulator();
* // returns ~-1.0
*
* @example
* var accumulator = incrpcorr( 2.0, -3.0 );
*/
function incrpcorr( meanx, meany ) {
	var M2x;
	var M2y;
	var dy1;
	var dy2;
	var dy;
	var dx;
	var mx;
	var my;
	var sx;
	var sy;
	var C;
	var N;

	M2x = 0.0;
	M2y = 0.0;
	C = 0.0;
	N = 0;
	if ( arguments.length ) {
		if ( !isNumber( meanx ) ) {
			throw new TypeError( 'invalid argument. First argument must be a number primitive. Value: `' + meanx + '`.' );
		}
		if ( !isNumber( meany ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a number primitive. Value: `' + meany + '`.' );
		}
		mx = meanx;
		my = meany;
		return accumulator2;
	}
	mx = 0.0;
	my = 0.0;
	return accumulator1;

	/**
	* If provided input values, the accumulator function returns an updated sample correlation coefficient. If not provided input values, the accumulator function returns the current sample correlation coefficient.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} sample correlation coefficient or null
	*/
	function accumulator1( x, y ) {
		var n;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N === 1 ) {
				return ( isnan( M2x ) || isnan( M2y ) ) ? NaN : 0.0;
			}
			return ( C/(N-1) ) / ( sx*sy );
		}
		N += 1;

		dx = x - mx;
		mx += dx / N;
		M2x += dx * ( x-mx );

		dy1 = y - my;
		my += dy1 / N;
		dy2 = y - my;
		M2y += dy2 * dy1;

		C += dx * dy2;
		if ( N < 2 ) {
			return ( isnan( M2x ) || isnan( M2y ) ) ? NaN : 0.0;
		}
		n = N - 1;
		sx = sqrt( M2x/n );
		sy = sqrt( M2y/n );
		return ( C/n ) / ( sx*sy ); // Note: why all the dividing by `N`? To avoid overflow.
	}

	/**
	* If provided input values, the accumulator function returns an updated sample correlation coefficient. If not provided input values, the accumulator function returns the current sample correlation coefficient.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} sample correlation coefficient or null
	*/
	function accumulator2( x, y ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return ( C/N ) / ( sx*sy );
		}
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
}


// EXPORTS //

module.exports = incrpcorr;
