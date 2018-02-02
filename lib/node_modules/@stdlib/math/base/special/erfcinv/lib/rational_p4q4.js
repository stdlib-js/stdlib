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
		return -0.0350353787183178;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -0.0350353787183178 + (x * (-0.0022242652921344794 + (x * (0.018557330651423107 + (x * (0.009508047013259196 + (x * (0.0018712349281955923 + (x * (0.00015754461742496055 + (x * (0.00000460469890584318 + (x * (-2.304047769118826e-10 + (x * 2.6633922742578204e-12))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (1.3653349817554064 + (x * (0.7620591645536234 + (x * (0.22009110576413124 + (x * (0.03415891436709477 + (x * (0.00263861676657016 + (x * (0.00007646752923027944 + (x * (0.0 + (x * 0.0))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 2.6633922742578204e-12 + (x * (-2.304047769118826e-10 + (x * (0.00000460469890584318 + (x * (0.00015754461742496055 + (x * (0.0018712349281955923 + (x * (0.009508047013259196 + (x * (0.018557330651423107 + (x * (-0.0022242652921344794 + (x * -0.0350353787183178))))))))))))))); // eslint-disable-line max-len
		s2 = 0.0 + (x * (0.0 + (x * (0.00007646752923027944 + (x * (0.00263861676657016 + (x * (0.03415891436709477 + (x * (0.22009110576413124 + (x * (0.7620591645536234 + (x * (1.3653349817554064 + (x * 1.0))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
