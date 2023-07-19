/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var ln = require( '@stdlib/math/base/special/ln' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var ONE_THIRD = 1.0 / 3.0;


// MAIN //

/**
* Returns a pseudorandom number drawn from a gamma distribution with rate parameter equal to 1.0 and shape parameter equal to `alpha`.
*
* @private
* @param {PRNG} randu - PRNG for uniformly distributed numbers
* @param {PRNG} randn - PRNG for standard normally distributed numbers
* @param {PositiveNumber} alpha - shape parameter
* @returns {PositiveNumber} pseudorandom number
*/
function standardGamma( randu, randn, alpha ) {
	var flg;
	var x2;
	var v0;
	var v1;
	var c;
	var d;
	var x;
	var s;
	var u;
	var v;

	if ( alpha < 1.0 ) {
		d = alpha + 1.0 - ONE_THIRD;
		c = 1.0 / sqrt( 9.0*d );
		s = pow( randu(), 1.0/alpha );
	} else {
		d = alpha - ONE_THIRD;
		c = 1.0 / sqrt( 9.0*d );
		s = 1.0;
	}
	flg = true;
	while ( flg ) {
		do {
			x = randn();
			v = 1.0 + (c*x);
		} while ( v <= 0.0 );
		v *= v * v;
		x2 = x * x;
		v0 = 1.0 - (0.331*x2*x2);
		v1 = (0.5*x2) + (d*( 1.0-v+ln(v) ));
		u = randu();
		if ( u < v0 || ln( u ) < v1 ) {
			flg = false;
		}
	}
	return d * v * s;
}


// EXPORTS //

module.exports = standardGamma;
