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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/cdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma`.
*
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 2.0 );
* var y = cdf( 3.0 );
* // returns ~0.675
*
* y = cdf( 1.0 );
* // returns ~0.118
*/
function factory( sigma ) {
	var s2;
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( sigma === 0.0 ) {
		return degenerate( 0.0 );
	}
	s2 = pow( sigma, 2.0 );
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution.
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
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		return 1.0 - exp( -pow( x, 2.0 ) / ( 2.0 * s2 ) );
	}
}


// EXPORTS //

module.exports = factory;
