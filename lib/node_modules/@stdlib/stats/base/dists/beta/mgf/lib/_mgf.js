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

var betaFcn = require( '@stdlib/math/base/special/beta' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.5, 1.0, 1.0 );
* // returns ~1.297
*
* @example
* var y = mgf( 0.5, 2.0, 4.0 );
* // returns ~1.186
*
* @example
* var y = mgf( 3.0, 2.0, 2.0 );
* // returns ~5.575
*
* @example
* var y = mgf( -0.8, 4.0, 4.0 );
* // returns ~0.676
*/
function mgf( t, alpha, beta ) {
	var summand;
	var denom;
	var sum;
	var c;
	var k;

	denom = betaFcn( alpha, beta );
	sum = 1.0;
	c = 1.0;
	k = 1;
	do {
		c *= t / k;
		summand = ( betaFcn( alpha+k, beta ) / denom ) * c;
		sum += summand;
		k += 1;
	} while ( abs( summand / sum ) >= EPS );
	return sum;
}


// EXPORTS //

module.exports = mgf;
