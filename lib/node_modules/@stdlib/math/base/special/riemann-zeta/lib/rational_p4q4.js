/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates a rational function (i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\)).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
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
		return -2.497101906022594;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -2.497101906022594 + (x * (-2.600133018094757 + (x * (-0.9392604353771099 + (x * (-0.13844861799574154 + (x * (-0.007017212405498024 + (x * (-0.000022925731059489392 + (x * (0.0 + (x * (0.0 + (x * 0.0))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.7060390259377451 + (x * (0.15739599649558628 + (x * (0.010611795097684508 + (x * (-0.000036910273311764616 + (x * (0.0000049340956392759 + (x * (-2.3405548702528722e-7 + (x * (7.188337293654598e-9 + (x * -1.1292001134749475e-10))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.0 + (x * (0.0 + (x * (-0.000022925731059489392 + (x * (-0.007017212405498024 + (x * (-0.13844861799574154 + (x * (-0.9392604353771099 + (x * (-2.600133018094757 + (x * -2.497101906022594))))))))))))))); // eslint-disable-line max-len
		s2 = -1.1292001134749475e-10 + (x * (7.188337293654598e-9 + (x * (-2.3405548702528722e-7 + (x * (0.0000049340956392759 + (x * (-0.000036910273311764616 + (x * (0.010611795097684508 + (x * (0.15739599649558628 + (x * (0.7060390259377451 + (x * 1.0))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
