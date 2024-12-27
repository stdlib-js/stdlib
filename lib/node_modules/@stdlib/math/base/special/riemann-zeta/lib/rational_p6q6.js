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
		return -10.39489505733089;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -10.39489505733089 + (x * (-2.858272196711067 + (x * (-0.34772826653924577 + (x * (-0.025115606465534634 + (x * (-0.001194591734169687 + (x * (-0.00003825293235079675 + (x * (-7.855236337967234e-7 + (x * -8.214657090954655e-9))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.2081963335726719 + (x * (0.019568765731720502 + (x * (0.0011107963810248593 + (x * (0.000040850774626603926 + (x * (9.555611230656935e-7 + (x * (1.185071534740229e-8 + (x * 2.226094836273526e-15))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -8.214657090954655e-9 + (x * (-7.855236337967234e-7 + (x * (-0.00003825293235079675 + (x * (-0.001194591734169687 + (x * (-0.025115606465534634 + (x * (-0.34772826653924577 + (x * (-2.858272196711067 + (x * -10.39489505733089))))))))))))); // eslint-disable-line max-len
		s2 = 2.226094836273526e-15 + (x * (1.185071534740229e-8 + (x * (9.555611230656935e-7 + (x * (0.000040850774626603926 + (x * (0.0011107963810248593 + (x * (0.019568765731720502 + (x * (0.2081963335726719 + (x * 1.0))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
