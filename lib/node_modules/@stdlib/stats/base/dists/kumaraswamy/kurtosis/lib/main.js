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
var beta = require( '@stdlib/math/base/special/beta' );


// MAIN //

/**
* Returns the excess kurtosis of a Kumaraswamy's double bounded distribution.
*
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 0.5, 1.0 );
* // returns ~2.143
*
* @example
* var v = kurtosis( 4.0, 12.0 );
* // returns ~2.704
*
* @example
* var v = kurtosis( 12.0, 2.0 );
* // returns ~4.817
*
* @example
* var v = kurtosis( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = kurtosis( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = kurtosis( 2.0, NaN );
* // returns NaN
*
* @example
* var v = kurtosis( NaN, 2.0 );
* // returns NaN
*/
function kurtosis( a, b ) {
	var sigma2;
	var out;
	var mu2;
	var m1;
	var m2;
	var m3;
	var m4;
	if (
		isnan( a ) ||
		a <= 0.0 ||
		isnan( b ) ||
		b <= 0.0
	) {
		return NaN;
	}
	m1 = b * beta( 1.0 + ( 1.0/a ), b );
	m2 = b * beta( 1.0 + ( 2.0/a ), b );
	m3 = b * beta( 1.0 + ( 3.0/a ), b );
	m4 = b * beta( 1.0 + ( 4.0/a ), b );
	sigma2 = m2 - ( m1*m1 );
	mu2 = m1 * m1;
	out = ( m4 - ( 4.0*m3*m1 ) + ( 6.0*m2*mu2 ) - ( 3.0*mu2*mu2 ) );
	out /= sigma2*sigma2;
	return out;
}


// EXPORTS //

module.exports = kurtosis;
