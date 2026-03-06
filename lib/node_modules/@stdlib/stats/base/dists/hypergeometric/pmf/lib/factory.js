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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var exp = require( '@stdlib/math/base/special/exp' );
var fln = require( '@stdlib/math/base/special/factorialln' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
*
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {Function} PMF
*
* @example
* var mypmf = factory( 30, 20, 5 );
* var y = mypmf( 4.0 );
* // returns ~0.34
*
* y = mypmf( 1.0 );
* // returns ~0.029
*/
function factory( N, K, n ) {
	var maxs;
	var mins;
	if (
		isnan( N ) ||
		isnan( K ) ||
		isnan( n ) ||
		!isNonNegativeInteger( N ) ||
		!isNonNegativeInteger( K ) ||
		!isNonNegativeInteger( n ) ||
		N === PINF ||
		K === PINF ||
		K > N ||
		n > N
	) {
		return constantFunction( NaN );
	}

	mins = max( 0, n + K - N );
	maxs = min( K, n );
	return pmf;

	/**
	* Evaluates the probability mass function (PMF) for a hypergeometric distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated PMF
	*/
	function pmf( x ) {
		var ldenom;
		var lnum;
		var lpmf;
		if ( isnan( x ) ) {
			return NaN;
		}
		if (
			isNonNegativeInteger( x ) &&
			mins <= x &&
			x <= maxs
		) {
			lnum = fln( n ) + fln( K ) + fln( N - n ) + fln( N - K );
			ldenom = fln( N ) + fln( x ) + fln( n - x );
			ldenom += fln( K - x ) + fln( N - K + x - n );
			lpmf = lnum - ldenom;
			return exp( lpmf );
		}
		return 0.0;
	}
}


// EXPORTS //

module.exports = factory;
