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
* Transforms the tail of the normal distribution to the unit interval and then uses rejection technique to generate standard normal variable.
*
* ## References
*
* -   Marsaglia, George. 1964. "Generating a Variable from the Tail of the Normal Distribution." _Technometrics_ 6 (1): 101–2. doi:[10.1080/00401706.1964.10490150](http://dx.doi.org/10.1080/00401706.1964.10490150).
*
* @private
* @param {PRNG} rand - pseudorandom number generator
* @param {number} rTail - start value of the right tail
* @param {boolean} isNegative - boolean indicating which side to evaluate
* @returns {number} standard normal variable
*/
function sampleTail( rand, rTail, isNegative ) {
	var x;
	var y;
	do {
		x = ln( rand() ) / rTail;
		y = ln( rand() );
	} while ( -2.0*y < x*x );
	return ( isNegative ) ? x-rTail : rTail-x;
}


// EXPORTS //

module.exports = sampleTail;
