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

/**
* Returns a pseudorandom number from an F distribution with parameters `d1` and `d2`.
*
* @private
* @param {PRNG} rchisq - PRNG for chi-square distributed numbers
* @param {PositiveNumber} d1 - degrees of freedom
* @param {PositiveNumber} d2 - degrees of freedom
* @returns {NonNegativeNumber} pseudorandom number
*/
function f( rchisq, d1, d2 ) {
	var x1 = rchisq( d1 ) / d1;
	var x2 = rchisq( d2 ) / d2;
	return x1 / x2;
}


// EXPORTS //

module.exports = f;
