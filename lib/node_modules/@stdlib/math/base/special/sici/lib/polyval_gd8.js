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
	return 3.1404009894636335e-15 + (x * (3.878301660239547e-12 + (x * (1.7269374896631615e-9 + (x * (3.5704322344374083e-7 + (x * (0.00003684755044425611 + (x * (0.0019028442667439953 + (x * (0.04679131942596258 + (x * (0.48785225869530496 + (x * (1.6854889881101165 + (x * 1.0))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
