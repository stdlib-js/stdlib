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

var floor = require( '@stdlib/math/base/special/floor' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a geometric distribution.
*
* ## Proof
*
* Consider
*
* ```tex
* N = \left \lfloor \ln (U) / \ln (1-p) \right \rfloor
* ```
*
* where \\( U \\) is uniform on the interval \\((0,1)\\). Accordingly, \\(N\\) must be a nonnegative integer, and, for every \\( n \geq 0\\), the event \\(A_n = \left \{ N = n \right \}\\) is
*
* ```tex
* A_n = \left \{(n+1) \ln (1-p) < \ln (U) \leq n \ln (1-p) \right \}
* ```
*
* where \\(\ln (1-p) < 0\\). Thus,
*
* ```tex
* A_n = \left \{(1-p)^{n+1} < U \leq (1-p)^n \right \}
* ```
*
* For every \\(u < v\\) on the interval \\((0,1)\\),
*
* ```tex
* P\left \[u < U \leq v\right \] = v - u
* ```
*
* Hence,
*
* ```tex
* P\left \[N = n \right \] = P\left \[A_n\right \] = (1-p)^n - (1-p)^{n+1} = (1-p)^n(1-(1-p)) = p(1-p)^n
* ```
*
* which proves that \\(N\\) is a geometric random variable.
*
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} pseudorandom number
*/
function geometric( rand, p ) {
	var u = rand();
	if ( u === 0.0 ) {
		// Drawing random variates from a PRNG (with period > 1) is effectively sampling without replacement. Thus, should not be possible to draw `0` twice in a row.
		u = rand();
	}
	return floor( ln( u ) / ln( 1.0-p ) );
}


// EXPORTS //

module.exports = geometric;
