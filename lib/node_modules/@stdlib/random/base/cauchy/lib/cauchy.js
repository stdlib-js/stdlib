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

var tan = require( '@stdlib/math/base/special/tan' );
var PI = require( '@stdlib/constants/float64/pi' );


// MAIN //

/**
* Returns a pseudorandom number drawn from a Cauchy distribution.
*
* @private
* @param {PRNG} randn - PRNG for normally distributed numbers
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {number} pseudorandom number
*/
function cauchy( randn, x0, gamma ) {
	return x0 + ( gamma*tan( PI*( randn()-0.5 ) ) );
}


// EXPORTS //

module.exports = cauchy;
