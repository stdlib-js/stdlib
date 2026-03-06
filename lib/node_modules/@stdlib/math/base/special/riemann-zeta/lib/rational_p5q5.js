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
		return -4.785580284951356;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -4.785580284951356 + (x * (-1.8919736488197254 + (x * (-0.21140713487441282 + (x * (-0.0001892047582600767 + (x * (0.0011514092388917874 + (x * (0.00006399492042131645 + (x * (0.000001393489324453249 + (x * (0.0 + (x * 0.0))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.24434533737818856 + (x * (0.008733707544922887 + (x * (-0.0011759276533443448 + (x * (-0.00007437436828999331 + (x * (-0.0000021750464515767985 + (x * (4.710012640030765e-9 + (x * (-8.333784406253855e-11 + (x * 6.998415452048457e-13))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.0 + (x * (0.000001393489324453249 + (x * (0.00006399492042131645 + (x * (0.0011514092388917874 + (x * (-0.0001892047582600767 + (x * (-0.21140713487441282 + (x * (-1.8919736488197254 + (x * -4.785580284951356))))))))))))))); // eslint-disable-line max-len
		s2 = 6.998415452048457e-13 + (x * (-8.333784406253855e-11 + (x * (4.710012640030765e-9 + (x * (-0.0000021750464515767985 + (x * (-0.00007437436828999331 + (x * (-0.0011759276533443448 + (x * (0.008733707544922887 + (x * (0.24434533737818856 + (x * 1.0))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
