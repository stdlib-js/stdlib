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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_65_1/doc/html/boost/random/uniform_int_distribution.html}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Steven Watanabe 2011.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
*
* @private
* @param {PRNG} rand - pseudorandom number generator which outputs integer values
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {integer} pseudorandom number
*/
function discreteUniform( rand, a, b ) {
	var result;
	var RANGE;
	var range;
	var limit;
	var bsize;
	var mult;
	var MIN;
	var MAX;
	var inc;

	range = b - a;
	if ( range === 0 ) {
		return a;
	}
	MIN = rand.MIN;
	MAX = rand.MAX;
	RANGE = MAX - MIN;
	if ( RANGE === range ) {
		return ( rand()-MIN ) + a;
	}
	if ( RANGE < range ) {
		limit = 0;
		while ( true ) {
			// Avoid overflow...
			if ( range === MAX_SAFE_INTEGER ) { // in JavaScript, we only explicitly have doubles
				limit = floor( range / (RANGE+1) );
				if ( range%(RANGE+1) === RANGE ) { // e.g., 5%(2+1) == 2
					limit += 1;
				}
			} else {
				limit = floor( (range+1) / (RANGE+1) );
			}
			// We consider `result` as expressed base `(RANGE+1)`:
			result = 0;

			// For every power of `(RANGE+1)`, we determine a random factor:
			mult = 1;

			// Loop invariants: result < mult && mult <= range
			while ( mult <= limit ) {
				// Note: see first and second post-conditions.
				result += (rand() - MIN) * mult;

				// Equivalent to (mult * (RANGE+1)) == range+1, but avoids overflow...
				if ( mult*RANGE === range-mult+1 ) {
					// The destination range is an integer power of the generator's range...
					return result;
				}
				// Note: see third post-condition.
				mult *= RANGE + 1;
			}
			// range/mult < RANGE+1 (no endless loop)
			inc = discreteUniform( rand, 0, floor( range/mult ) );
			if ( inc > MAX_SAFE_INTEGER/mult ) {
				// The multiplication would overflow, so reject immediately...
				continue;
			}
			inc *= mult;
			result += inc;

			// NOTE: if we were working with unsigned integers, we would need to check that `result` is NOT less than `inc`, as unsigned integers wrap on overflow. In which case, we would need to reject.

			if ( result > range ) {
				// Result is too big, so reject...
				continue;
			}
			return result + a;
		}
	}
	// Case: RANGE > range

	// When determining the bucket size, avoid overflow...
	if ( RANGE === MAX_SAFE_INTEGER ) { // in JavaScript, we only explicitly have doubles
		bsize = floor( RANGE / (range+1) );
		if ( RANGE%(range+1) === range ) { // e.g., 5%(2+1) == 2
			bsize += 1;
		}
	} else {
		bsize = floor( (RANGE+1) / (range+1) );
	}
	while ( true ) {
		result = rand() - MIN;
		result = floor( result / bsize );
		if ( result <= range ) {
			return result + a;
		}
	}
}


// EXPORTS //

module.exports = discreteUniform;
