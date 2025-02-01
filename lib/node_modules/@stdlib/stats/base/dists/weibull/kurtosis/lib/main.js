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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns the excess kurtosis of a Weibull distribution.
*
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} excess kurtosis
*
* @example
* var v = kurtosis( 1.0, 1.0 );
* // returns 6.0
*
* @example
* var v = kurtosis( 4.0, 12.0 );
* // returns ~-0.252
*
* @example
* var v = kurtosis( 8.0, 2.0 );
* // returns ~0.328
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
function kurtosis( k, lambda ) {
	var out;
	var g4;
	var g3;
	var g2;
	var g1;
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	g1 = gamma( 1.0 + (1.0/k) );
	g2 = gamma( 1.0 + (2.0/k) );
	g3 = gamma( 1.0 + (3.0/k) );
	g4 = gamma( 1.0 + (4.0/k) );
	out = (-6.0*pow(g1, 4.0)) + (12.0*g1*g1*g2) - (3.0*g2*g2)- (4.0*g1*g3) + g4;
	out /= pow( g2 - (g1*g1), 2.0 );
	return out;
}


// EXPORTS //

module.exports = kurtosis;
