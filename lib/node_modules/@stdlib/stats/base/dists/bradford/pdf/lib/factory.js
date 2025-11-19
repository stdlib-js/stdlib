/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var log1p = require( '@stdlib/math/base/special/log1p' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a Bradford distribution with shape parameter `c`.
*
* @param {PositiveNumber} c - shape parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 5.0 );
* var y = pdf( 0.5 );
* // returns ~0.797
*
* y = pdf( 1.0 );
* // returns ~0.465
*/
function factory( c ) {
	var k;
	if ( isnan( c ) || c <= 0.0 ) {
		return constantFunction( NaN );
	}
	k = log1p( c );
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a Bradford distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated PDF
	*
	* @example
	* var y = pdf( 0.5 );
	* // returns <number>
	*/
	function pdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 || x > 1.0 ) {
			return 0.0;
		}
		return c / ( ( 1.0 + ( c*x ) ) * k );
	}
}


// EXPORTS //

module.exports = factory;
