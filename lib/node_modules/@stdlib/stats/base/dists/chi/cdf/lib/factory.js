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

var degenerate = require( '@stdlib/stats/base/dists/degenerate/cdf' ).factory;
var gammaFactory = require( '@stdlib/stats/base/dists/gamma/cdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a chi distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} CDF
*
* @example
* var cdf = factory( 3.0 );
*
* var y = cdf( 6.0 );
* // returns ~1.0
*
* y = cdf( 1.5 );
* // returns ~0.478
*/
function factory( k ) {
	var gamma;
	if ( k === 0.0 ) {
		return degenerate( 0.0 );
	}
	gamma = gammaFactory( k/2.0, 0.5 );
	return cdf;

	/**
	* Evaluates the cumulative distribution function (CDF) for a chi distribution with degrees of freedom `k`.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*/
	function cdf( x ) {
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x < 0.0 ) {
			return 0.0;
		}
		return gamma( x*x );
	}
}


// EXPORTS //

module.exports = factory;
