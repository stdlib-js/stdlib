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
* Returns a pseudorandom number drawn from an exponential distribution.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {PositiveNumber} lambda - rate parameter
* @returns {NonNegativeNumber} pseudorandom number
*/
function exponential( rand, lambda ) {
	return -ln( 1.0 - rand() ) / lambda;
}


// EXPORTS //

module.exports = exponential;
