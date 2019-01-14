/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
		return 2.473596173751344;
	}
	return 2.473596173751344 + (x * (3.727624244118099 + (x * (15.607393035549306 + (x * (84.12850842805888 + (x * (506.98181970406137 + (x * (3252.2770581451236 + (x * (21713.242419574344 + (x * (149037.04518909327 + (x * (1043999.3310899908 + (x * (7427974.817042039 + (x * (53503839.67558661 + (x * (389249886.99487084 + (x * (2855288351.1008105 + (x * (21090077038.76684 + (x * (156699833947.7902 + (x * (1170222242422.44 + (x * (8777948323668.9375 + (x * (66101242752484.95 + (x * (499488053713388.8 + (x * 37859743397240296.0))))))))))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
