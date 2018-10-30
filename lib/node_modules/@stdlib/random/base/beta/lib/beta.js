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
var sample3 = require( './sample3.js' );


// MAIN //

/**
* Returns a random number drawn from a beta distribution.
*
* @private
* @param {PRNG} randu - pseudorandom number generator for uniformly distributed numbers
* @param {PRNG} randn - pseudorandom number generator for normally distributed numbers
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {Probability} pseudorandom number
*/
function sample( randu, randn, alpha, beta ) {
	if ( alpha === beta && alpha > 1.5 ) {
		return sample1( randu, randn, alpha );
	}
	if ( alpha > 1.0 && beta > 1.0 ) {
		return sample2( randu, randn, alpha, beta );
	}
	return sample3( randu, alpha, beta );
}


// EXPORTS //

module.exports = sample;
