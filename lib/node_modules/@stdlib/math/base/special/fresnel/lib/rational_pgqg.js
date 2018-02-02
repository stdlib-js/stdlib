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
		s1 = 1.8695871016278324e-22 + (x * (8.363544356306774e-19 + (x * (1.375554606332618e-15 + (x * (1.0826804113902088e-12 + (x * (4.4534441586175015e-10 + (x * (9.828524436884223e-8 + (x * (0.000011513882611188428 + (x * (0.0006840793809153931 + (x * (0.018764858409257526 + (x * (0.1971028335255234 + (x * (0.5044420736433832 + (x * 0.0))))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.8695871016278324e-22 + (x * (8.391588162831187e-19 + (x * (1.3879653125957886e-15 + (x * (1.1027321506624028e-12 + (x * (4.6068072814652043e-10 + (x * (1.0431458965757199e-7 + (x * (0.000012754507566772912 + (x * (0.0008146791071843061 + (x * (0.02536037414203388 + (x * (0.33774898912002 + (x * (1.4749575992512833 + (x * 1.0))))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.5044420736433832 + (x * (0.1971028335255234 + (x * (0.018764858409257526 + (x * (0.0006840793809153931 + (x * (0.000011513882611188428 + (x * (9.828524436884223e-8 + (x * (4.4534441586175015e-10 + (x * (1.0826804113902088e-12 + (x * (1.375554606332618e-15 + (x * (8.363544356306774e-19 + (x * 1.8695871016278324e-22))))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (1.4749575992512833 + (x * (0.33774898912002 + (x * (0.02536037414203388 + (x * (0.0008146791071843061 + (x * (0.000012754507566772912 + (x * (1.0431458965757199e-7 + (x * (4.6068072814652043e-10 + (x * (1.1027321506624028e-12 + (x * (1.3879653125957886e-15 + (x * (8.391588162831187e-19 + (x * 1.8695871016278324e-22))))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
