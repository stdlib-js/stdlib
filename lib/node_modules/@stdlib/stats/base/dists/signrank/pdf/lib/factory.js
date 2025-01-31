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
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var weights = require( './weights.js' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for the distribution of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param {PositiveInteger} n - number of observations
* @returns {Function} PDF
*
* @example
* var pdf = factory( 8 );
* var y = pdf( 4.0 );
* // returns ~0.008
*
* y = pdf( 17.0 );
* // returns ~0.051
*/
function factory( n ) {
	var mlim;
	if ( !isPositiveInteger( n ) || !isfinite( n ) ) {
		return constantFunction( NaN );
	}
	mlim = n * ( n + 1 ) / 2;
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for the distribution of the Wilcoxon signed rank test statistic.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated PDF
	*
	* @example
	* var y = pdf( 2 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( !isInteger( x ) ) {
			return 0.0;
		}
		if ( x < 0.0 || x > mlim ) {
			return 0.0;
		}
		return exp( ln( weights( x, n ) ) - ( n * LN2 ) );
	}
}


// EXPORTS //

module.exports = factory;
