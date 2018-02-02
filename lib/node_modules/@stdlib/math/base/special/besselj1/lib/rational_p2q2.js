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
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
	var ax;
	var s1;
	var s2;
	if ( x === 0.0 ) {
		return -0.010158790774176108;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -17527881995806512.0 + (x * (1660853173129901.8 + (x * (-36658018905416.664 + (x * (355806656709.1062 + (x * (-1811393126.9860668 + (x * (5079326.614801118 + (x * (-7502.334222078161 + (x * 4.6179191852758255))))))))))))); // eslint-disable-line max-len
		s2 = 1725390588844768000.0 + (x * (17128800897135812.0 + (x * (84899346165481.42 + (x * (276227772862.44086 + (x * (648725028.9959639 + (x * (1126712.5065029138 + (x * (1388.6978985861358 + (x * 1.0))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 4.6179191852758255 + (x * (-7502.334222078161 + (x * (5079326.614801118 + (x * (-1811393126.9860668 + (x * (355806656709.1062 + (x * (-36658018905416.664 + (x * (1660853173129901.8 + (x * -17527881995806512.0))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (1388.6978985861358 + (x * (1126712.5065029138 + (x * (648725028.9959639 + (x * (276227772862.44086 + (x * (84899346165481.42 + (x * (17128800897135812.0 + (x * 1725390588844768000.0))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
