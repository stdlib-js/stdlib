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

// MAIN //

/**
* Returns a random number drawn from a beta prime distribution.
*
* @private
* @param {PRNG} rgamma - pseudorandom number generator for gamma distributed numbers
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {PositiveNumber} pseudorandom number
*/
function sample( rgamma, alpha, beta ) {
	return rgamma( alpha, 1.0 ) / rgamma( beta, 1.0 );
}


// EXPORTS //

module.exports = sample;
