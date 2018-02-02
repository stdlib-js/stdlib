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
		return 1.6662611269702147e-17;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 1.6662611269702147e-17 + (x * (0.4999999999999977 + (x * (6.402709450190538 + (x * (41.38333741550006 + (x * (166.8033418545628 + (x * (453.39964786925367 + (x * (851.153712317697 + (x * (1097.7065756728507 + (x * (938.4312324784553 + (x * (487.26800160465194 + (x * 119.95344524233573))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (12.472085567047449 + (x * (78.60931297532986 + (x * (307.47024605031834 + (x * (805.1406861011516 + (x * (1439.1201976029215 + (x * (1735.6105285756048 + (x * (1348.3250071285634 + (x * (607.2259858605709 + (x * (119.95231785727705 + (x * 0.00014016591835503607))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 119.95344524233573 + (x * (487.26800160465194 + (x * (938.4312324784553 + (x * (1097.7065756728507 + (x * (851.153712317697 + (x * (453.39964786925367 + (x * (166.8033418545628 + (x * (41.38333741550006 + (x * (6.402709450190538 + (x * (0.4999999999999977 + (x * 1.6662611269702147e-17))))))))))))))))))); // eslint-disable-line max-len
		s2 = 0.00014016591835503607 + (x * (119.95231785727705 + (x * (607.2259858605709 + (x * (1348.3250071285634 + (x * (1735.6105285756048 + (x * (1439.1201976029215 + (x * (805.1406861011516 + (x * (307.47024605031834 + (x * (78.60931297532986 + (x * (12.472085567047449 + (x * 1.0))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
