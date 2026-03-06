/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var round = require( '@stdlib/math/base/special/round' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var weights = require( './weights.js' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for the distribution of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param {PositiveInteger} n - number of observations
* @returns {Function} CDF
*
* @example
* var cdf = factory( 8 );
* var y = cdf( 3.9 );
* // returns ~0.027
*
* y = cdf( 17.0 );
* // returns ~0.473
*/
function factory( n ) {
	var mlim;
	var pui;

	if ( !isPositiveInteger( n ) || !isfinite( n ) ) {
		return constantFunction( NaN );
	}
	pui = exp( -n * LN2 );
	mlim = n * ( n + 1 ) / 2;
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for the distribution of the Wilcoxon signed rank test statistic.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2 );
	* // returns <number>
	*/
	function cdf( x ) {
		var i;
		var p;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		x = round( x );
		if ( x >= mlim ) {
			return 1.0;
		}
		p = 0;
		for ( i = 0; i <= x; i++ ) {
			p += weights( i, n ) * pui;
		}
		return p;
	}
}


// EXPORTS //

module.exports = factory;
