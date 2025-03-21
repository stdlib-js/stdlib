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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/pdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var cospi = require( '@stdlib/math/base/special/cospi' );


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for a raised cosine distribution.
*
* @param {number} mu - location parameter
* @param {NonNegativeNumber} s - scale parameter
* @returns {Function} PDF
*
* @example
* var pdf = factory( 0.0, 3.0 );
* var y = pdf( 2.0 );
* // returns ~0.083
*
* y = pdf( 5.0 );
* // returns 0.0
*/
function factory( mu, s ) {
	if ( isnan( mu ) || isnan( s ) || s < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( s === 0.0 ) {
		return degenerate( mu );
	}
	return pdf;

	/**
	* Evaluates the probability density function (PDF) for a raised cosine distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated PDF
	*
	* @example
	* var y = pdf( -1.2 );
	* // returns <number>
	*/
	function pdf( x ) {
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		if (
			x < mu - s ||
			x > mu + s
		) {
			return 0.0;
		}
		z = ( x - mu ) / s;
		return ( 1.0 + cospi( z ) ) / ( 2.0 * s );
	}
}


// EXPORTS //

module.exports = factory;
