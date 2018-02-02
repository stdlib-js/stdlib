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
		return 0.13187550549740895;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 40535726612579.55 + (x * (5470861171652.543 + (x * (-375959744978.196 + (x * (7214454821.450256 + (x * (-59157479.9974084 + (x * (221579.5322228026 + (x * -317.1442466004613))))))))))); // eslint-disable-line max-len
		s2 = 307378739210792.9 + (x * (4127228620040.646 + (x * (27800352738.690586 + (x * (122504351.22182964 + (x * (381364.70753052575 + (x * (820.7990816839387 + (x * 1.0))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -317.1442466004613 + (x * (221579.5322228026 + (x * (-59157479.9974084 + (x * (7214454821.450256 + (x * (-375959744978.196 + (x * (5470861171652.543 + (x * 40535726612579.55))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (820.7990816839387 + (x * (381364.70753052575 + (x * (122504351.22182964 + (x * (27800352738.690586 + (x * (4127228620040.646 + (x * 307378739210792.9))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
