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

var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Handles general case.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Probability} pseudorandom number
*/
function sample( rand, alpha, beta ) {
	var lx;
	var ly;
	var xy;
	var u;
	var v;
	var x;
	var y;
	while ( true ) {
		u = rand();
		v = rand();
		x = pow( u, 1.0/alpha );
		y = pow( v, 1.0/beta );
		xy = x + y;
		if ( xy <= 1.0 ) {
			if ( xy > 0.0 ) {
				return x / ( xy );
			}
			lx = ln( u ) / alpha;
			ly = ln( v ) / beta;
			if ( lx > ly ) {
				ly -= lx;
				lx = 0.0;
			} else {
				lx -= ly;
				ly = 0.0;
			}
			return exp( lx - ln( exp(lx) + exp(ly) ) );
		}
	}
}


// EXPORTS //

module.exports = sample;
