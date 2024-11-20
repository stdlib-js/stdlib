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
var beta = require( '@stdlib/math/base/special/beta' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a Student's t distribution with `v` degrees of freedom.
*
* @param {PositiveNumber} v - degrees of freedom
* @returns {Function} PDF
*
* @example
* var pdf = factory( 1.0 );
* var y = pdf( 3.0 );
* // returns ~0.032
*
* y = pdf( 1.0 );
* // returns ~0.159
*/
function factory( v ) {
	var exponent;
	var betaTerm;

	if ( isnan( v ) || v <= 0 ) {
		return constantFunction( NaN );
	}
	betaTerm = sqrt( v ) * beta( v/2.0, 0.5 );
	exponent = ( 1.0 + v ) / 2.0;
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a Student's t distribution.
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
		return pow( v / ( v + pow( x, 2.0 ) ), exponent ) / betaTerm;
	}
}


// EXPORTS //

module.exports = factory;
