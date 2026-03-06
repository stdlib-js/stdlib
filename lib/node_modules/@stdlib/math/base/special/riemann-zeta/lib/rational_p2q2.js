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
		return 0.5772156649015329;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.5772156649015329 + (x * (0.24321064694010716 + (x * (0.04173646739882165 + (x * (0.003902520870728433 + (x * (0.0002496063671518772 + (x * 0.00001101084409767329))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.29520127712663174 + (x * (0.043460910607305496 + (x * (0.004349305820858264 + (x * (0.0002557842261404885 + (x * 0.000010991819782396113))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.00001101084409767329 + (x * (0.0002496063671518772 + (x * (0.003902520870728433 + (x * (0.04173646739882165 + (x * (0.24321064694010716 + (x * 0.5772156649015329))))))))); // eslint-disable-line max-len
		s2 = 0.000010991819782396113 + (x * (0.0002557842261404885 + (x * (0.004349305820858264 + (x * (0.043460910607305496 + (x * (0.29520127712663174 + (x * 1.0))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
