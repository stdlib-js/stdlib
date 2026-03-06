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
var erf = require( '@stdlib/math/base/special/erf' );
var SQRT_HALF_PI = require( '@stdlib/constants/float64/sqrt-half-pi' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of a Rayleigh distribution with scale parameter `sigma`.
*
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 0.5 );
* var y = mgf( 1.0 );
* // returns ~2.715
*
* y = mgf( 0.5 );
* // returns ~1.888
*/
function factory( sigma ) {
	if ( isnan( sigma ) || sigma < 0.0 ) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a Rayleigh distribution.
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
		var sigmat;
		var ret;

		if ( isnan( t ) ) {
			return NaN;
		}
		sigmat = t * sigma;
		ret = 1.0 + (sigmat * exp( sigmat*sigmat / 2.0 ));
		ret *= SQRT_HALF_PI * ( erf( sigmat / SQRT2 ) + 1.0 );
		return ret;
	}
}


// EXPORTS //

module.exports = factory;
