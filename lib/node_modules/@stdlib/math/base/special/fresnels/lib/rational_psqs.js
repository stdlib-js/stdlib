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
		return 0.5235987755982989;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 318016297876.5678 + (x * (-44297951805.96978 + (x * (2548908805.7337637 + (x * (-62974148.62058625 + (x * (708840.0452577386 + (x * (-2991.8191940101983 + (x * 0.0))))))))))); // eslint-disable-line max-len
		s2 = 607366389490.0846 + (x * (22441179564.534092 + (x * (419320245.8981112 + (x * (5173438.887700964 + (x * (45584.78108065326 + (x * (281.3762688899943 + (x * 1.0))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (-2991.8191940101983 + (x * (708840.0452577386 + (x * (-62974148.62058625 + (x * (2548908805.7337637 + (x * (-44297951805.96978 + (x * 318016297876.5678))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (281.3762688899943 + (x * (45584.78108065326 + (x * (5173438.887700964 + (x * (419320245.8981112 + (x * (22441179564.534092 + (x * 607366389490.0846))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
