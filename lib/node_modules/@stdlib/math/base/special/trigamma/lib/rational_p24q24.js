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
		return -2.5584373473990794;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = -2.5584373473990794 + (x * (-12.283020824054201 + (x * (-23.9195022162768 + (x * (-24.925643150482347 + (x * (-14.797912276547878 + (x * (-4.466544539286106 + (x * (-0.01914390334056497 + (x * (0.5154120525543513 + (x * (0.1953783487860643 + (x * (0.03347612826241743 + (x * (0.0023736652059422065 + (x * 0.0))))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (4.800985584544199 + (x * (9.992207278431701 + (x * (11.889614616763133 + (x * (8.966132566838091 + (x * (4.4725413614962415 + (x * (1.4860098202819654 + (x * (0.31957073576676426 + (x * (0.040735834578768094 + (x * (0.0023736652059327163 + (x * (2.3955488790352614e-16 + (x * -2.9474924474061867e-18))))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (0.0023736652059422065 + (x * (0.03347612826241743 + (x * (0.1953783487860643 + (x * (0.5154120525543513 + (x * (-0.01914390334056497 + (x * (-4.466544539286106 + (x * (-14.797912276547878 + (x * (-24.925643150482347 + (x * (-23.9195022162768 + (x * (-12.283020824054201 + (x * -2.5584373473990794))))))))))))))))))))); // eslint-disable-line max-len
		s2 = -2.9474924474061867e-18 + (x * (2.3955488790352614e-16 + (x * (0.0023736652059327163 + (x * (0.040735834578768094 + (x * (0.31957073576676426 + (x * (1.4860098202819654 + (x * (4.4725413614962415 + (x * (8.966132566838091 + (x * (11.889614616763133 + (x * (9.992207278431701 + (x * (4.800985584544199 + (x * 1.0))))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
