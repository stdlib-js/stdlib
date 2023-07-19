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

var factorialln = require( '@stdlib/math/base/special/factorialln' );
var floor = require( '@stdlib/math/base/special/floor' );
var sign = require( '@stdlib/math/base/special/signum' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN_SQRT_TWO_PI = require( '@stdlib/constants/float64/ln-sqrt-two-pi' );


// VARIABLES //

var ONE_12 = 1.0 / 12.0;
var ONE_360 = 1.0 / 360.0;


// MAIN //

/**
* Returns a pseudorandom number drawn from a Poisson distribution with parameter `lambda`.
*
* ## References
*
* -   Hörmann, W. 1993. "The transformed rejection method for generating Poisson random variables." _Insurance: Mathematics and Economics_ 12 (1): 39–45. doi:[10.1016/0167-6687(93)90997-4][@hormann:1993b].
*
* [@hormann:1993b]: http://dx.doi.org/10.1016/0167-6687(93)90997-4
*
*
* @private
* @param {PRNG} rand - PRNG for generating uniformly distributed numbers
* @param {PositiveNumber} lambda - mean
* @returns {NonNegativeInteger} pseudorandom number
*/
function poisson( rand, lambda ) {
	var slambda;
	var ainv;
	var urvr;
	var us;
	var vr;
	var a;
	var b;
	var k;
	var u;
	var v;

	slambda = sqrt( lambda );

	b = (2.53*slambda) + 0.931;
	a = (0.02483*b) - 0.059;

	ainv = (1.1328/(b-3.4)) + 1.1239;
	vr = (-3.6224/(b-2.0)) + 0.9277;
	urvr = 0.86 * vr;

	while ( true ) {
		v = rand();
		if ( v <= urvr ) {
			u = (v / vr) - 0.43;
			u *= (2.0*a / (0.5-abs(u))) + b;
			u += lambda + 0.445;
			return floor( u );
		}
		if ( v >= vr ) {
			u = rand() - 0.5;
		} else {
			u = (v / vr) - 0.93;
			u = (sign( u )*0.5) - u;
			v = vr * rand();
		}
		us = 0.5 - abs( u );
		if (
			us >= 0.013 ||
			us >= v
		) {
			k = floor( (((2.0*a/us) + b)*u) + lambda + 0.445 );
			v *= ainv / ( (a/(us*us)) + b );
			u = (k+0.5) * ln( lambda/k );
			u += -lambda - LN_SQRT_TWO_PI + k;
			u -= ( ONE_12 - (ONE_360/(k*k)) ) / k;
			if (
				k >= 10 &&
				u >= ln( v*slambda )
			) {
				return k;
			}
			u = (k*ln( lambda )) - lambda - factorialln( k );
			if (
				k >= 0 &&
				k <= 9 &&
				u >= ln( v )
			) {
				return k;
			}
		}
	}
}


// EXPORTS //

module.exports = poisson;
