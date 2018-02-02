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
		return 0.021593919914419626;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 11514276357909012000.0 + (x * (-5680809457472421000.0 + (x * (-23638408497043136.0 + (x * (4068627528980474.5 + (x * (-59530713129741.984 + (x * (374536739624.3849 + (x * (-1195796191.2070618 + (x * (1915380.6858264203 + (x * -1233.7180442012952))))))))))))))); // eslint-disable-line max-len
		s2 = 533218443133161800000.0 + (x * (5696819882285718000.0 + (x * (30837179548112880.0 + (x * (111870100658569.7 + (x * (302217668529.60406 + (x * (635503180.8708892 + (x * (1045374.8201934079 + (x * (1285.516484932161 + (x * 1.0))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = -1233.7180442012952 + (x * (1915380.6858264203 + (x * (-1195796191.2070618 + (x * (374536739624.3849 + (x * (-59530713129741.984 + (x * (4068627528980474.5 + (x * (-23638408497043136.0 + (x * (-5680809457472421000.0 + (x * 11514276357909012000.0))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (1285.516484932161 + (x * (1045374.8201934079 + (x * (635503180.8708892 + (x * (302217668529.60406 + (x * (111870100658569.7 + (x * (30837179548112880.0 + (x * (5696819882285718000.0 + (x * 533218443133161800000.0))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
