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
		return 1.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 22779.090197304686 + (x * (41345.38663958076 + (x * (21170.523380864943 + (x * (3480.648644324927 + (x * (153.76201909008356 + (x * 0.8896154842421046))))))))); // eslint-disable-line max-len
		s2 = 22779.090197304686 + (x * (41370.41249551042 + (x * (21215.350561880117 + (x * (3502.8735138235606 + (x * (157.11159858080893 + (x * 1.0))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.8896154842421046 + (x * (153.76201909008356 + (x * (3480.648644324927 + (x * (21170.523380864943 + (x * (41345.38663958076 + (x * 22779.090197304686))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (157.11159858080893 + (x * (3502.8735138235606 + (x * (21215.350561880117 + (x * (41370.41249551042 + (x * 22779.090197304686))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
