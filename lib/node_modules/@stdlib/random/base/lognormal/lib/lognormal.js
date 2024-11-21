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

var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Returns a log-normally distributed pseudorandom number.
*
* @private
* @param {PRNG} randn - PRNG for standard normally distributed numbers
* @param {number} mu - location parameter
* @param {PositiveNumber} sigma - scale parameter
* @returns {PositiveNumber} pseudorandom number
*/
function lognormal( randn, mu, sigma ) {
	return exp( mu + (sigma*randn()) );
}


// EXPORTS //

module.exports = lognormal;
