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

var factorial = require( '@stdlib/math/base/special/factorial' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a hypergeometric distribution using the HIN algorithm, which is based on an inverse transformation method.
*
* ## References
*
* -   Fishman, George S. 1973. _Concepts and methods in discrete event digital simulation_. A Wiley-Interscience Publication. New York, NY, USA: Wiley.
* -   Kachitvichyanukul, Voratas., and Burce Schmeiser. 1985. "Computer generation of hypergeometric random variates." _Journal of Statistical Computation and Simulation_ 22 (2): 127–45. doi:[10.1080/00949658508810839][@kachitvichyanukul:1985].
*
* [@kachitvichyanukul:1985]: http://dx.doi.org/10.1080/00949658508810839
*
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {NonNegativeInteger} n1 - number of successes in population
* @param {NonNegativeInteger} n2 - number of failures in population
* @param {NonNegativeInteger} k - number of draws
* @returns {NonNegativeInteger} pseudorandom number
*/
function hin( rand, n1, n2, k ) {
	var p;
	var u;
	var x;
	if ( k < n2 ) {
		p = ( factorial( n2 ) * factorial( n1 + n2 - k ) ) /
			( factorial( n1 + n2 ) * factorial( n2 - k ) );
		x = 0;
	} else {
		p = ( factorial( n1 ) * factorial( k ) ) /
			( factorial( k - n2 ) * factorial( n1 + n2 ) );
		x = k - n2;
	}
	u = rand();
	while ( u > p ) {
		u -= p;
		p *= ( n1 - x ) * ( k - x ) / ( ( x + 1 ) * ( n2 - k + 1 + x ) );
		x += 1;
	}
	return x;
}


// EXPORTS //

module.exports = hin;
