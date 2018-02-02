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

/* This is a generated file. Do not edit directly. */
'use strict';

// MAIN //

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
	if ( x === 0.0 ) {
		return 3.1404009894636335e-15;
	}
	return 3.1404009894636335e-15 + (x * (3.859459254302766e-12 + (x * (1.7040445278204452e-9 + (x * (3.471311670841167e-7 + (x * (0.000034894116550227946 + (x * (0.001717182390523479 + (x * (0.03848787676499743 + (x * (0.33041097930563207 + (x * 0.6973599534432762))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
