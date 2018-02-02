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
		return 9.70507110881952e-14;
	}
	return 9.70507110881952e-14 + (x * (9.41779576128513e-11 + (x * (3.200927900910049e-8 + (x * (0.0000048621543082645475 + (x * (0.00034955644244785906 + (x * (0.01160642294081244 + (x * (0.16030015822231947 + (x * (0.7137152741001467 + (x * 0.4558808734704653))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
