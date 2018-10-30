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

var sample1 = require( './sample1.js' );
var sample2 = require( './sample2.js' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a binomial distribution.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {PositiveInteger} n - number of trials
* @param {Probability} p - probability of success
* @returns {NonNegativeInteger} pseudorandom number
*/
function sample( rand, n, p ) {
	if ( p > 0.5 ) {
		return n - sample( rand, n, 1.0-p );
	}
	if ( n*p < 10.0 ) {
		return sample1( rand, n, p );
	}
	return sample2( rand, n, p );
}


// EXPORTS //

module.exports = sample;
