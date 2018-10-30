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

var hin = require( './hin.js' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a hypergeometric distribution.
*
* ## References
*
* -   Kachitvichyanukul, Voratas., and Burce Schmeiser. 1985. "Computer generation of hypergeometric random variates." _Journal of Statistical Computation and Simulation_ 22 (2): 127–45. doi:[10.1080/00949658508810839][@kachitvichyanukul:1985].
*
* [@kachitvichyanukul:1985]: http://dx.doi.org/10.1080/00949658508810839
*
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {NonNegativeInteger} N - population size
* @param {NonNegativeInteger} K - subpopulation size
* @param {NonNegativeInteger} n - number of draws
* @returns {NonNegativeInteger} pseudorandom number
*/
function hypergeometric( rand, N, K, n ) {
	var n1;
	var n2;
	var k;
	var x;

	if ( n > N/2 ) {
		k = N - n;
		if ( 2*K <= N ) {
			n1 = K;
			n2 = N - K;
			x = hin( rand, n1, n2, k );
			return K - x;
		}
		n2 = K;
		n1 = N - K;
		x = hin( rand, n1, n2, k );
		return n - N + K + x;
	}
	k = n;
	if ( 2*K <= N ) {
		n1 = K;
		n2 = N - K;
		x = hin( rand, n1, n2, k );
		return x;
	}
	n1 = N - K;
	n2 = K;
	x = hin( rand, n1, n2, k );
	return n - x;
}


// EXPORTS //

module.exports = hypergeometric;
