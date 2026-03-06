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

var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a gamma distribution.
*
* @private
* @param {PRNG} randu - PRNG for uniformly distributed numbers
* @param {PRNG} randn - PRNG for standard normally distributed numbers
* @param {PositiveNumber} beta - rate parameter
* @param {PositiveNumber} d - `alpha + 2/3` or `alpha - 1/3`
* @param {PositiveNumber} c - `1.0 / sqrt( 9.0*d )`
* @returns {PositiveNumber} pseudorandom number
*/
function gamma( randu, randn, beta, d, c ) {
	var flg;
	var x2;
	var v0;
	var v1;
	var x;
	var u;
	var v;

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
	return (1.0/beta) * d * v;
}


// EXPORTS //

module.exports = gamma;
