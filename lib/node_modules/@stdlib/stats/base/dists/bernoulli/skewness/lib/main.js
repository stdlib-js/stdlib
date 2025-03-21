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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns the skewness of a Bernoulli distribution.
*
* @param {Probability} p - success probability
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 0.1 );
* // returns ~2.667
*
* @example
* var v = skewness( 0.5 );
* // returns 0.0
*
* @example
* var v = skewness( 1.1 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( p ) {
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	if ( p === 0.0 ) {
		return PINF;
	}
	if ( p === 1.0 ) {
		return NINF;
	}
	return ( 1.0 - ( 2.0*p ) ) / sqrt( p * ( 1.0-p ) );
}


// EXPORTS //

module.exports = skewness;
