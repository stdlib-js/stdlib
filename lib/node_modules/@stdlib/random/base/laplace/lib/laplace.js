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

var sign = require( '@stdlib/math/base/special/signum' );
var abs = require( '@stdlib/math/base/special/abs' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a Laplace (double exponential) distribution.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {number} mu - mean
* @param {PositiveNumber} b - scale parameter
* @returns {number} pseudorandom number
*/
function laplace( rand, mu, b ) {
	var u = rand() - 0.5;
	return mu - ( b*sign( u )*ln( 1.0 - (2.0*abs(u)) ) );
}


// EXPORTS //

module.exports = laplace;
