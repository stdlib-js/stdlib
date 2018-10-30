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
* Handles case where both `alpha` and `beta` are greater than `1.0`.
*
* @private
* @param {PRNG} randu - PRNG for uniformly distributed numbers
* @param {PRNG} randn - PRNG for normally distributed numbers
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Probability} pseudorandom number
*/
function sample( randu, randn, alpha, beta ) {
	var sigma;
	var flg;
	var mu;
	var A;
	var B;
	var C;
	var L;
	var s;
	var u;
	var x;
	var y;

	A = alpha - 1.0;
	B = beta - 1.0;
	C = A + B;
	L = C * ln( C );
	mu = A / C;
	sigma = 0.5 / pow( C, 0.5 );

	flg = true;
	while ( flg === true ) {
		s = randn();
		x = mu + (s*sigma);
		if ( x >= 0.0 && x <= 1.0 ) {
			u = randu();
			y = A * ln( x/A );
			y += B * ln((1.0-x) / B);
			y += L + (0.5*s*s);
			if ( y >= ln( u ) ) {
				flg = false;
			}
		}
	}
	return x;
}


// EXPORTS //

module.exports = sample;
