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


// MAIN //

/**
* Returns a pseudorandom number drawn from a Poisson distribution.
*
* ## Notes
*
* -   Appropriate for \\(lambda < 30\\).
*
*
* ## References
*
* -   Knuth, Donald E. 1997. _The Art of Computer Programming, Volume 2 (3rd Ed.): Seminumerical Algorithms_. Boston, MA, USA: Addison-Wesley Longman Publishing Co., Inc.
*
*
* @private
* @param {PRNG} rand - PRNG for generating uniformly distributed numbers
* @param {PositiveNumber} lambda - mean
* @returns {NonNegativeInteger} pseudorandom number
*/
function poisson( rand, lambda ) {
	var p = rand();
	var k = 1;
	while ( p > exp( -lambda ) ) {
		k += 1;
		p *= rand();
	}
	return k - 1;
}


// EXPORTS //

module.exports = poisson;
