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


// MAIN //

/**
* Samples with replacement and non-uniform probabilities using Vose's [alias method][alias-method].
*
* ## References
*
* -   Vose, Michael D. 1991. "A linear algorithm for generating random numbers with a given distribution." _IEEE Transactions on Software Engineering_ 17 (9): 972–75. doi:[10.1109/32.92917][@vose:1991].
*
* [alias-method]: http://keithschwarz.com/darts-dice-coins/
* [@vose:1991]: https://doi.org/10.1109/32.92917
*
*
* @private
* @param {ArrayLike} x - array-like object from which to sample
* @param {NonNegativeInteger} size - sample size
* @param {Function} rand - PRNG for generating uniformly distributed numbers
* @param {ProbabilityArray} probabilities - element probabilities
* @returns {Array} sample
*/
function vose( x, size, rand, probabilities ) {
	var small;
	var large;
	var probs;
	var alias;
	var out;
	var N;
	var p;
	var g;
	var i;
	var l;

	probs = probabilities.slice();
	N = x.length;

	small = [];
	large = [];
	for ( i = 0; i < N; i++ ) {
		probs[ i ] *= N;
		if ( probs[ i ] < 1.0 ) {
			small.push( i );
		} else {
			large.push( i );
		}
	}
	alias = new Array( N );
	p = new Array( N );
	while ( small.length !== 0 && large.length !== 0 ) {
		l = small.shift();
		g = large.shift();
		p[ l ] = probs[ l ];
		alias[ l ] = g;
		probs[ g ] = probs[ g ] + probs[ l ] - 1.0;
		if ( probs[ g ] < 1.0 ) {
			small.push( g );
		} else {
			large.push( g );
		}
	}
	for ( i = 0; i < large.length; i++ ) {
		p[ large[ i ] ] = 1.0;
	}
	for ( i = 0; i < small.length; i++ ) {
		p[ small[ i ] ] = 1.0;
	}
	out = new Array( size );
	for ( i = 0; i < size; i++ ) {
		l = floor( N*rand() );
		if ( rand() < p[ l ] ) {
			out[ i ] = x[ l ];
		} else {
			out[ i ] = x[ alias[ l ] ];
		}
	}
	return out;
}


// EXPORTS //

module.exports = vose;
