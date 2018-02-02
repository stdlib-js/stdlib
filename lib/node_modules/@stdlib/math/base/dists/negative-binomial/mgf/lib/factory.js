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
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of a negative binomial distribution.
*
* @param {PositiveNumber} r - number of successes until experiment is stopped
* @param {Probability} p - success probability
* @returns {Function} MGF
*
* @example
* var mgf = factory( 4.3, 0.4 );
* var y = mgf( 0.2 );
* // returns ~4.696
*/
function factory( r, p ) {
	if (
		isnan( r ) ||
		isnan( p ) ||
		r <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a negative binomial distribution.
	*
	* @private
	* @param {number} t - input value
	* @returns {number} evaluated MGF
	*
	* @example
	* var y = mgf( 0.5 );
	* // returns <number>
	*/
	function mgf( t ) {
		if ( t >= -ln( p ) ) {
			return NaN;
		}
		return pow( ( (1.0 - p) * exp( t ) ) / ( 1.0 - (p * exp( t )) ), r );
	}
}


// EXPORTS //

module.exports = factory;
