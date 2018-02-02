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
		return 2.999999999999634;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 3.763297112699879e-20 + (x * (1.3428327623306275e-16 + (x * (1.7201074326816183e-13 + (x * (1.0230451416490724e-10 + (x * (3.055689837902576e-8 + (x * (0.0000046361374928786735 + (x * (0.000345017939782574 + (x * (0.011522095507358577 + (x * (0.1434079197807589 + (x * (0.4215435550436775 + (x * 0.0))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.2544323709001127e-20 + (x * (4.5200143407412973e-17 + (x * (5.887545336215784e-14 + (x * (3.6014002958937136e-11 + (x * (1.1269922476399903e-8 + (x * (0.0000018462756734893055 + (x * (0.00015593440916415301 + (x * (0.0064405152650885865 + (x * (0.11688892585919138 + (x * (0.7515863983533789 + (x * 1.0))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.4215435550436775 + (x * (0.1434079197807589 + (x * (0.011522095507358577 + (x * (0.000345017939782574 + (x * (0.0000046361374928786735 + (x * (3.055689837902576e-8 + (x * (1.0230451416490724e-10 + (x * (1.7201074326816183e-13 + (x * (1.3428327623306275e-16 + (x * 3.763297112699879e-20))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.7515863983533789 + (x * (0.11688892585919138 + (x * (0.0064405152650885865 + (x * (0.00015593440916415301 + (x * (0.0000018462756734893055 + (x * (1.1269922476399903e-8 + (x * (3.6014002958937136e-11 + (x * (5.887545336215784e-14 + (x * (4.5200143407412973e-17 + (x * 1.2544323709001127e-20))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
