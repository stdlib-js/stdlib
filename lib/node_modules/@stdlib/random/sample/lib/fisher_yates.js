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


// FUNCTIONS //

var slice = Array.prototype.slice;


// MAIN //

/**
* Samples uniformly without replacement using the Fisher-Yates shuffle.
*
* ## References
*
* -   Knuth, Donald E. 1997. _The Art of Computer Programming, Volume 2 (3rd Ed.): Seminumerical Algorithms_. Boston, MA, USA: Addison-Wesley Longman Publishing Co., Inc.
*
* @private
* @param {ArrayLike} x - array-like object from which to sample
* @param {NonNegativeInteger} size - sample size
* @param {Function} rand - PRNG for generating uniformly distributed numbers
* @returns {Array} sample
*/
function fisherYates( x, size, rand ) {
	var tmp;
	var N;
	var i;
	var j;

	N = x.length;

	// Note: we skip the first element, as no further swaps are possible given that all other indices are excluded from swapping...
	for ( i = N-1; i > 0; i-- ) {
		// Generate an integer index on the interval: [0,i]
		j = floor( rand()*(i+1) );

		// Swap elements:
		tmp = x[ i ];
		x[ i ] = x[ j ];
		x[ j ] = tmp;
	}
	return slice.call( x, 0, size );
}


// EXPORTS //

module.exports = fisherYates;
