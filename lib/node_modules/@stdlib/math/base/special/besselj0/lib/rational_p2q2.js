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
		return 0.005119512965174424;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -1831.9397969392085 + (x * (-12254.07816137899 + (x * (-7287.970246446462 + (x * (10341.910641583727 + (x * (11725.046279757104 + (x * (4417.670702532509 + (x * (743.2119668062425 + (x * 48.5917033559165))))))))))))); // eslint-disable-line max-len
		s2 = -357834.78026152303 + (x * (245991.0226258631 + (x * (-84055.06259116957 + (x * (18680.99000835919 + (x * (-2945.876654550934 + (x * (333.07310774649073 + (x * (-25.258076240801554 + (x * 1.0))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 48.5917033559165 + (x * (743.2119668062425 + (x * (4417.670702532509 + (x * (11725.046279757104 + (x * (10341.910641583727 + (x * (-7287.970246446462 + (x * (-12254.07816137899 + (x * -1831.9397969392085))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (-25.258076240801554 + (x * (333.07310774649073 + (x * (-2945.876654550934 + (x * (18680.99000835919 + (x * (-84055.06259116957 + (x * (245991.0226258631 + (x * -357834.78026152303))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
