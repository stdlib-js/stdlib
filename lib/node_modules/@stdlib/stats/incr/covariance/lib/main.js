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
* Returns an accumulator function which incrementally computes an unbiased sample covariance.
*
* ## Method
*
* -   We begin by defining the co-moment \\(C_n\\)
*
*     ```tex
*     C_n = \sum_{i=1}^{N} ( x_i - \bar{x}_n ) ( y_i - \bar{y}_n )
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
* @param {number} [meanx] - mean value
* @param {number} [meany] - mean value
* @throws {TypeError} first argument must be a number primitive
* @throws {TypeError} second argument must be a number primitive
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrcovariance();
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
* v = accumulator();
* // returns ~-7.49
*
* @example
* var accumulator = incrcovariance( 2.0, -3.0 );
*/
function incrcovariance( meanx, meany ) {
	var dx;
	var mx;
	var my;
	var C;
	var N;

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
	* If provided input values, the accumulator function returns an updated unbiased sample covariance. If not provided input values, the accumulator function returns the current unbiased sample covariance.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} unbiased sample covariance or null
	*/
	function accumulator1( x, y ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			if ( N === 1 ) {
				return ( isnan( C ) ) ? NaN : 0.0;
			}
			return C / (N-1);
		}
		N += 1;
		dx = x - mx;
		mx += dx / N;
		my += ( y-my ) / N;
		C += dx * ( y-my ); // Note: repeated `y-my` is intentional, as `my` is updated when used here
		if ( N < 2 ) {
			return ( isnan( C ) ) ? NaN : 0.0;
		}
		return C / (N-1);
	}

	/**
	* If provided input values, the accumulator function returns an updated unbiased sample covariance. If not provided input values, the accumulator function returns the current unbiased sample covariance.
	*
	* @private
	* @param {number} [x] - new value
	* @param {number} [y] - new value
	* @returns {(number|null)} unbiased sample covariance or null
	*/
	function accumulator2( x, y ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return C / N;
		}
		N += 1;
		C += ( x-mx ) * ( y-my );
		return C / N;
	}
}


// EXPORTS //

module.exports = incrcovariance;
