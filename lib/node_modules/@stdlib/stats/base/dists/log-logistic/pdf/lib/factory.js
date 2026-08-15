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

var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a log-logistic distribution.
*
* @param {PositiveNumber} alpha - scale parameter
* @param {PositiveNumber} beta - shape parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 1.0, 1.0 );
* var y = pdf( 2.0 );
* // returns ~0.111
*
* y = pdf( -1.0 );
* // returns 0.0
*/
function factory( alpha, beta ) {
	if (
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return constantFunction( NaN );
	}
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a log-logistic distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*/
	function pdf( x ) {
		var xa;
		var xb;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x <= 0.0 ) {
			return 0.0;
		}
		xa = x / alpha;
		xb = pow( xa, beta );
		return ( beta / alpha ) * pow( xa, beta - 1.0 ) / pow( 1.0 + xb, 2.0 );
	}
}


// EXPORTS //

module.exports = factory;
