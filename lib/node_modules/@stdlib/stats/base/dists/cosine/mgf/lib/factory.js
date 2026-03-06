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
var sinh = require( '@stdlib/math/base/special/sinh' );
var exp = require( '@stdlib/math/base/special/exp' );
var PI_SQUARED = require( '@stdlib/constants/float64/pi-squared' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) for a raised cosine distribution with location parameter `mu` and scale parameter `s`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} s - scale parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 3.0, 1.5 );
*
* var y = mgf( 1.9 );
* // returns ~495.57
*
* y = mgf( -1.0 );
* // returns ~0.058
*/
function factory( mu, s ) {
	if (
		isnan( mu ) ||
		isnan( s ) ||
		s <= 0.0
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a raised cosine distribution.
	*
	* @private
	* @param {number} t - input value
	* @returns {number} evaluated MGF
	*
	* @example
	* var y = mgf( 2.0 );
	* // returns <number>
	*/
	function mgf( t ) {
		var out;
		var st;
		if ( isnan( t ) ) {
			return NaN;
		}
		st = s * t;
		out = PI_SQUARED * sinh( st );
		out /= st * ( PI_SQUARED + ( st*st ) );
		out *= exp( mu * t );
		return out;
	}
}


// EXPORTS //

module.exports = factory;
