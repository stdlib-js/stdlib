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

var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns pseudorandom number drawn from a logistic distribution.
*
* @private
* @param {PRNG} rand - PRNG for uniformly distributed numbers
* @param {number} mu - mean
* @param {PositiveNumber} s - scale parameter
* @returns {number} pseudorandom number
*/
function logistic( rand, mu, s ) {
	var u = rand();
	return mu + ( s*ln( u / (1.0-u) ) );
}


// EXPORTS //

module.exports = logistic;
