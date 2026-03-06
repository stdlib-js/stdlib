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

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a random number drawn from Kumaraswamy's double bounded distribution.
*
* @private
* @param {PRNG} rand - pseudorandom number generator for uniformly distributed numbers
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {Probability} pseudorandom number
*/
function sample( rand, a, b ) {
	var u = rand();
	return pow( 1.0 - pow( 1.0-u, 1.0/b ), 1.0/a );
}


// EXPORTS //

module.exports = sample;
