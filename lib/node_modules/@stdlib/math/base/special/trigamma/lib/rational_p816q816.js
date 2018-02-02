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
		return -1.848283152741466e-20;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -1.848283152741466e-20 + (x * (0.5 + (x * (3.0253386524731334 + (x * (13.599592751745737 + (x * (35.31322242830879 + (x * (67.16394245507142 + (x * (83.5767733658514 + (x * (71.07349121223571 + (x * (35.86215156147256 + (x * 8.721522316399835))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (5.717343971612935 + (x * (25.29340417962044 + (x * (62.26197679674682 + (x * (113.955048909239 + (x * (130.80713832893898 + (x * (102.42314690233765 + (x * (44.04247728052452 + (x * (8.89898032477904 + (x * -0.029662733687204))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 8.721522316399835 + (x * (35.86215156147256 + (x * (71.07349121223571 + (x * (83.5767733658514 + (x * (67.16394245507142 + (x * (35.31322242830879 + (x * (13.599592751745737 + (x * (3.0253386524731334 + (x * (0.5 + (x * -1.848283152741466e-20))))))))))))))))); // eslint-disable-line max-len
		s2 = -0.029662733687204 + (x * (8.89898032477904 + (x * (44.04247728052452 + (x * (102.42314690233765 + (x * (130.80713832893898 + (x * (113.955048909239 + (x * (62.26197679674682 + (x * (25.29340417962044 + (x * (5.717343971612935 + (x * 1.0))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
