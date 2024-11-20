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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var erf = require( '@stdlib/math/base/special/erf' );
var SQRT_HALF_PI = require( '@stdlib/constants/float64/sqrt-half-pi' );
var SQRT2 = require( '@stdlib/constants/float64/sqrt-two' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a Rayleigh distribution with scale parameter `sigma` at a value `t`.
*
* @param {number} t - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 1.0, 3.0 );
* // returns ~678.508
*
* @example
* var y = mgf( 1.0, 2.0 );
* // returns ~38.65
*
* @example
* var y = mgf( -1.0, 4.0 );
* // returns ~-0.947
*
* @example
* var y = mgf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.5, -1.0 );
* // returns NaN
*/
function mgf( t, sigma ) {
	var sigmat;
	var out;
	if (
		isnan( t ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return NaN;
	}
	sigmat = t * sigma;
	out = 1.0 + (sigmat * exp( sigmat*sigmat / 2.0 ));
	out *= SQRT_HALF_PI * ( erf( sigmat / SQRT2 ) + 1.0 );
	return out;
}


// EXPORTS //

module.exports = mgf;
