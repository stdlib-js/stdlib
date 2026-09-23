/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var clamp = require( '@stdlib/math/base/special/clamp' );


// MAIN //

/**
* Computes the sample Pearson product-moment correlation coefficient of two double-precision floating-point strided arrays using Welford's algorithm.
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
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index of `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index of `y`
* @returns {number} sample correlation coefficient
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float64Array( [ 2.0, -2.0, 1.0 ] );
*
* var v = dpcorrwd( x.length, x, 1, 0, y, 1, 0 );
* // returns ~0.885
*/
function dpcorrwd( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var M2x;
	var M2y;
	var dy1;
	var dy2;
	var dx;
	var my;
	var mx;
	var ix;
	var iy;
	var sx;
	var sy;
	var C;
	var r;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	ix = offsetX;
	iy = offsetY;
	C = 0.0;
	mx = 0.0;
	my = 0.0;
	M2x = 0.0;
	M2y = 0.0;
	for ( i = 0; i < N; i++ ) {
		dx = x[ ix ] - mx;
		mx += dx / ( i+1 );
		M2x += dx * ( x[ ix ] - mx );

		dy1 = y[ iy ] - my;
		my += dy1 / ( i+1 );
		dy2 = y[ iy ] - my;
		M2y += dy2 * dy1;

		C += dx * dy2;

		ix += strideX;
		iy += strideY;
	}
	if ( M2x === 0.0 || M2y === 0.0 ) {
		return NaN;
	}
	sx = sqrt( M2x/N );
	sy = sqrt( M2y/N );
	r = ( C/N ) / ( sx*sy ); // Why all the dividing by `N`? To avoid overflow.
	return clamp( r, -1.0, 1.0 ); // Guard against accumulated floating-point errors resulting in |r| > 1
}


// EXPORTS //

module.exports = dpcorrwd;
