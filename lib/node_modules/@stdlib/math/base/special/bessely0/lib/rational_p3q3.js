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
		return -0.023356489432789604;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -8072872690515021.0 + (x * (670166418691732.4 + (x * (-128299123640.88687 + (x * (-193630512667.72083 + (x * (2195882717.0518103 + (x * (-10085539.923498211 + (x * (21363.5341693139 + (x * -17.439661319197498))))))))))))); // eslint-disable-line max-len
		s2 = 345637246288464600.0 + (x * (3927242556964031.0 + (x * (22598377924042.9 + (x * (86926121104.20982 + (x * (247272194.75672302 + (x * (539247.3920976806 + (x * (879.0336216812844 + (x * 1.0))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -17.439661319197498 + (x * (21363.5341693139 + (x * (-10085539.923498211 + (x * (2195882717.0518103 + (x * (-193630512667.72083 + (x * (-128299123640.88687 + (x * (670166418691732.4 + (x * -8072872690515021.0))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (879.0336216812844 + (x * (539247.3920976806 + (x * (247272194.75672302 + (x * (86926121104.20982 + (x * (22598377924042.9 + (x * (3927242556964031.0 + (x * 345637246288464600.0))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
