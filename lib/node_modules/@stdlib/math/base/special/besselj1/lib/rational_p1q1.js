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
		return -0.03405537391318949;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -142585098013.66644 + (x * (6678104126.14924 + (x * (-115486967.64841276 + (x * (980629.0409895825 + (x * (-4461.579298277507 + (x * (10.650724020080236 + (x * -0.010767857011487301))))))))))); // eslint-disable-line max-len
		s2 = 4186860446082.0176 + (x * (42091902282.58013 + (x * (202283751.40097034 + (x * (591176.1449417479 + (x * (1074.227223951738 + (x * (1.0 + (x * 0.0))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -0.010767857011487301 + (x * (10.650724020080236 + (x * (-4461.579298277507 + (x * (980629.0409895825 + (x * (-115486967.64841276 + (x * (6678104126.14924 + (x * -142585098013.66644))))))))))); // eslint-disable-line max-len
		s2 = 0.0 + (x * (1.0 + (x * (1074.227223951738 + (x * (591176.1449417479 + (x * (202283751.40097034 + (x * (42091902282.58013 + (x * 4186860446082.0176))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
