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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Returns the skewness for a lognormal distribution with location `mu` and scale `sigma`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {NonNegativeNumber} skewness
*
* @example
* var y = skewness( 0.0, 1.0 );
* // returns ~6.185
*
* @example
* var y = skewness( 5.0, 2.0 );
* // returns ~414.359
*
* @example
* var y = skewness( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = skewness( 0.0, NaN );
* // returns NaN
*
* @example
* var y = skewness( 0.0, 0.0 );
* // returns NaN
*/
function skewness( mu, sigma ) {
	var es2;
	if (
		isnan( mu ) ||
		isnan( sigma ) ||
		sigma <= 0.0
	) {
		return NaN;
	}
	es2 = exp( sigma*sigma );
	return ( es2 + 2.0 ) * sqrt( es2 - 1.0 );
}


// EXPORTS //

module.exports = skewness;
