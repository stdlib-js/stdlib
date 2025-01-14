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
		return -0.053725830002359504;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.053725830002359504 + (x * (0.04451634732923656 + (x * (0.012867767353451996 + (x * (0.0009754177045739176 + (x * (0.00007698751015736541 + (x * (0.000003280325100003831 + (x * 0.0))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.3338319455303405 + (x * (0.048779843129140764 + (x * (0.0047903970857355845 + (x * (0.00027077670395633634 + (x * (0.000010695186753205734 + (x * 2.3627662397497864e-8))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.000003280325100003831 + (x * (0.00007698751015736541 + (x * (0.0009754177045739176 + (x * (0.012867767353451996 + (x * (0.04451634732923656 + (x * -0.053725830002359504))))))))))); // eslint-disable-line max-len
		s2 = 2.3627662397497864e-8 + (x * (0.000010695186753205734 + (x * (0.00027077670395633634 + (x * (0.0047903970857355845 + (x * (0.048779843129140764 + (x * (0.3338319455303405 + (x * 1.0))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
