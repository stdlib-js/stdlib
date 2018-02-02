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
		return 1.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -4435757.816794128 + (x * (-9942246.505077641 + (x * (-6603373.248364939 + (x * (-1523529.3511811374 + (x * (-109824.05543459347 + (x * (-1611.6166443246102 + (x * 0.0))))))))))); // eslint-disable-line max-len
		s2 = -4435757.816794128 + (x * (-9934124.389934586 + (x * (-6585339.4797230875 + (x * (-1511809.5066341609 + (x * (-107263.8599110382 + (x * (-1455.0094401904962 + (x * 1.0))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (-1611.6166443246102 + (x * (-109824.05543459347 + (x * (-1523529.3511811374 + (x * (-6603373.248364939 + (x * (-9942246.505077641 + (x * -4435757.816794128))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (-1455.0094401904962 + (x * (-107263.8599110382 + (x * (-1511809.5066341609 + (x * (-6585339.4797230875 + (x * (-9934124.389934586 + (x * -4435757.816794128))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
