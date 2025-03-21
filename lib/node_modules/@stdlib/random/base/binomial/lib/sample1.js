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

/**
* Generates a binomially distributed pseudorandom number by computing the sum of Bernoulli random variables.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {PositiveInteger} n - number of trials
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} pseudorandom number
*/
function sample( rand, n, p ) {
	var sum = 0;
	var i;
	for ( i = 0; i < n; i++ ) {
		if ( rand() <= p ) {
			sum += 1;
		}
	}
	return sum;
}


// EXPORTS //

module.exports = sample;
