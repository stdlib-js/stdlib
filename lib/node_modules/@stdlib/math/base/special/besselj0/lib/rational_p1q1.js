/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/
function evalrational( x ) {
	var ax;
	var s1;
	var s2;
	if ( x === 0.0 ) {
		return -0.17291506903064494;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -412986685009.9087 + (x * (27282507878.60594 + (x * (-621407004.2354012 + (x * (6630299.79048338 + (x * (-36629.81465510709 + (x * (103.44222815443189 + (x * -0.12117036164593528))))))))))); // eslint-disable-line max-len
		s2 = 2388378799633.229 + (x * (26328198300.85965 + (x * (139850973.72263435 + (x * (456126.9622421994 + (x * (936.1402239233771 + (x * (1.0 + (x * 0.0))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -0.12117036164593528 + (x * (103.44222815443189 + (x * (-36629.81465510709 + (x * (6630299.79048338 + (x * (-621407004.2354012 + (x * (27282507878.60594 + (x * -412986685009.9087))))))))))); // eslint-disable-line max-len
		s2 = 0.0 + (x * (1.0 + (x * (936.1402239233771 + (x * (456126.9622421994 + (x * (139850973.72263435 + (x * (26328198300.85965 + (x * 2388378799633.229))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
