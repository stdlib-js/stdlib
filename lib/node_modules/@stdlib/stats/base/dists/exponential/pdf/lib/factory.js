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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for an exponential distribution with parameter `lambda`.
*
* @param {PositiveNumber} lambda - rate parameter
* @returns {Function} probability density function (PDF)
*
* @example
* var pdf = factory( 0.5 );
* var y = pdf( 3.0 );
* // returns ~0.112
*
* y = pdf( 1.0 );
* // returns ~0.303
*/
function factory( lambda ) {
	var scale;
	if ( isnan( lambda ) || lambda < 0.0 || lambda === PINF ) {
		return constantFunction( NaN );
	}
	scale = 1.0 / lambda;
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for an exponential distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( 2.3 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		return exp( -x / scale ) / scale;
	}
}


// EXPORTS //

module.exports = factory;
