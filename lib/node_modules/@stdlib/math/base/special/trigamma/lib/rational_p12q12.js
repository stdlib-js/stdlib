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
		return -0.9999999999999991;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.9999999999999991 + (x * (-4.712373111208652 + (x * (-7.94125711970499 + (x * (-5.746577466976647 + (x * (-0.4042133494563989 + (x * (2.4787778117864288 + (x * (2.0771415170245513 + (x * (0.8588778991623601 + (x * (0.20499222604410033 + (x * (0.027210314034819473 + (x * 0.001576484902087695))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (4.712373111208634 + (x * (9.586191186553398 + (x * (11.094006726982938 + (x * (8.090754247493278 + (x * (3.877058901598914 + (x * (1.2275867870191448 + (x * (0.249092040606385 + (x * (0.02957504139006556 + (x * (0.0015764849020049815 + (x * 1.6126405034405948e-15))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.001576484902087695 + (x * (0.027210314034819473 + (x * (0.20499222604410033 + (x * (0.8588778991623601 + (x * (2.0771415170245513 + (x * (2.4787778117864288 + (x * (-0.4042133494563989 + (x * (-5.746577466976647 + (x * (-7.94125711970499 + (x * (-4.712373111208652 + (x * -0.9999999999999991))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.6126405034405948e-15 + (x * (0.0015764849020049815 + (x * (0.02957504139006556 + (x * (0.249092040606385 + (x * (1.2275867870191448 + (x * (3.877058901598914 + (x * (8.090754247493278 + (x * (11.094006726982938 + (x * (9.586191186553398 + (x * (4.712373111208634 + (x * 1.0))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
