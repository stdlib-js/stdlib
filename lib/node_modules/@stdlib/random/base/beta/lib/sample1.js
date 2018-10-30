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

var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Handles case where `alpha` and `beta` are equal and greater than `1.5`.
*
* @private
* @param {PRNG} randu - PRNG for uniformly distributed numbers
* @param {PRNG} randn - PRNG for normally distributed numbers
* @param {PositiveNumber} alpha - first shape parameter
* @returns {Probability} pseudorandom number
*/
function sample( randu, randn, alpha ) {
	var flg;
	var s4;
	var A;
	var s;
	var t;
	var u;
	var x;
	var y;

	A = alpha - 1.0;
	t = pow( A+A, 0.5 );

	flg = true;
	while ( flg === true ) {
		s = randn();
		x = 0.5 * ( 1.0+(s/t) );
		if ( x >= 0.0 && x <= 1.0 ) {
			u = randu();
			s4 = pow( s, 4.0 );
			y = (8.0*alpha) - 12.0;
			y = 1.0 - (s4 / y);
			if ( u <= y ) {
				flg = false;
			} else {
				y += 0.5 * pow( s4/((8.0*alpha)-8.0), 2.0 );
				if ( u < y ) {
					y = A * ln( 4.0*x*(1.0-x) );
					y += s*s / 2.0;
					if ( y >= ln( u ) ) {
						flg = false;
					}
				}
			}
		}
	}
	return x;
}


// EXPORTS //

module.exports = sample;
