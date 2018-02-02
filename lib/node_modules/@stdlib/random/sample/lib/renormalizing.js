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
* Samples without replacement from a discrete set using custom probabilities.
*
* ## Notes
*
* -   After each draw, the probabilities of the remaining observations are renormalized so that they sum to one.
*
*
* @private
* @param {ArrayLike} x - array-like object from which to sample
* @param {NonNegativeInteger} size - sample size
* @param {Function} rand - PRNG for generating uniformly distributed numbers
* @param {ProbabilityArray} probabilities - element probabilities
* @returns {Array} sample
*/
function renormalizing( x, size, rand, probabilities ) {
	var probs;
	var psum;
	var out;
	var N;
	var i;
	var j;
	var k;
	var u;

	N = x.length;
	probs = new Array( N );
	for ( i = 0; i < N; i++ ) {
		probs[ i ] = probabilities[ i ];
	}
	out = new Array( size );
	for ( i = 0; i < size; i++ ) {
		u = rand();
		psum = 0;
		for ( j = 0; j < N; j++ ) {
			psum += probs[ j ];
			if ( u < psum ) {
				break;
			}
		}
		for ( k = 0; k < N; k++ ) {
			if ( k === j ) {
				continue;
			}
			probs[ k ] /= 1.0 - probs[ j ];
		}
		probs[ j ] = 0.0;
		out[ i ] = x[ j ];
	}
	return out;
}


// EXPORTS //

module.exports = renormalizing;
