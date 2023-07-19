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
var gamma = require( '@stdlib/math/base/special/gamma' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the variance for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {PositiveNumber} variance
*
* @example
* var y = variance( 5.0, 2.0, 0.0 );
* // returns ~0.535
*
* @example
* var y = variance( 5.0, 2.0, -5.0 );
* // returns ~0.535
*
* @example
* var y = variance( 1.0, 1.0, 0.0 );
* // returns Infinity
*
* @example
* var y = variance( NaN, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = variance( 1.0, NaN, 0.0 );
* // returns NaN
*
* @example
* var y = variance( 1.0, 1.0, NaN );
* // returns NaN
*/
function variance( alpha, s, m ) {
	var g1;
	var g2;
	if (
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return NaN;
	}
	if ( alpha <= 2.0 ) {
		// Case: 0 < alpha <= 2
		return PINF;
	}
	g1 = gamma( 1.0 - ( 1.0/alpha ) );
	g2 = gamma( 1.0 - ( 2.0/alpha ) );
	return ( s*s ) * ( g2 - ( g1*g1 ) );
}


// EXPORTS //

module.exports = variance;
