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

var constantFunction = require( '@stdlib/utils/constant-function' );
var betaln = require( '@stdlib/math/base/special/betaln' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var exp = require( '@stdlib/math/base/special/exp' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 0.5, 0.5 );
*
* var y = pdf( 0.8 );
* // returns ~0.796
*
* y = pdf( 0.3 );
* // returns ~0.695
*/
function factory( alpha, beta ) {
	var betalnAB;
	if (
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return constantFunction( NaN );
	}
	betalnAB = betaln( alpha, beta );
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a beta distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 0.3 );
	* // returns <number>
	*/
	function pdf( x ) {
		var out;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 || x > 1.0 ) {
			// Support of the Beta distribution: [0,1]
			return 0.0;
		}
		if ( x === 0.0 ) {
			if ( alpha < 1.0 ) {
				return PINF;
			}
			if ( alpha > 1.0 ) {
				return 0.0;
			}
			return beta;
		}
		if ( x === 1.0 ) {
			if ( beta < 1.0 ) {
				return PINF;
			}
			if ( beta > 1.0 ) {
				return 0.0;
			}
			return alpha;
		}
		out = -betalnAB;
		out += ( alpha-1.0 ) * ln( x );
		out += ( beta-1.0 ) * log1p( -x );
		return exp( out );
	}
}


// EXPORTS //

module.exports = factory;
