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
* Samples from a discrete uniform distribution (equal probabilities and with replacement).
*
* @private
* @param {ArrayLike} x - array-like object from which to sample
* @param {NonNegativeInteger} size - sample size
* @param {Function} rand - PRNG for generating uniformly distributed numbers
* @returns {Array} sample
*/
function discreteUniform( x, size, rand ) {
	var pos;
	var out;
	var N;
	var i;

	N = x.length;
	out = new Array( size );
	for ( i = 0; i < size; i++ ) {
		pos = floor( N * rand() );
		out[ i ] = x[ pos ];
	}
	return out;
}


// EXPORTS //

module.exports = discreteUniform;
