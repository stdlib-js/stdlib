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
		return 0.0;
	}
	if ( x < 0.0 ) {
		ax = -x;
	} else {
		ax = x;
	}
	if ( ax <= 1.0 ) {
		s1 = 0.0 + (x * (0.5 + (x * (0.34562566988545623 + (x * (9.628954993608422 + (x * (3.5936085382439025 + (x * (49.45959911843888 + (x * (7.775192373218939 + (x * (74.4536074488178 + (x * (2.7520934039706906 + (x * (23.92923597114717 + (x * 0.0))))))))))))))))))); // eslint-disable-line max-len
		s2 = 1.0 + (x * (0.3579180064375791 + (x * (19.138603985070986 + (x * (0.8743490814641436 + (x * (98.65160974348555 + (x * (-16.10519728333829 + (x * (154.31686021625373 + (x * (-40.2026880424379 + (x * (60.167913667426475 + (x * (-13.341484462225642 + (x * 2.537956362006499))))))))))))))))))); // eslint-disable-line max-len
	} else {
		x = 1.0 / x;
		s1 = 0.0 + (x * (23.92923597114717 + (x * (2.7520934039706906 + (x * (74.4536074488178 + (x * (7.775192373218939 + (x * (49.45959911843888 + (x * (3.5936085382439025 + (x * (9.628954993608422 + (x * (0.34562566988545623 + (x * (0.5 + (x * 0.0))))))))))))))))))); // eslint-disable-line max-len
		s2 = 2.537956362006499 + (x * (-13.341484462225642 + (x * (60.167913667426475 + (x * (-40.2026880424379 + (x * (154.31686021625373 + (x * (-16.10519728333829 + (x * (98.65160974348555 + (x * (0.8743490814641436 + (x * (19.138603985070986 + (x * (0.3579180064375791 + (x * 1.0))))))))))))))))))); // eslint-disable-line max-len
	}
	return s1 / s2;
}


// EXPORTS //

module.exports = evalrational;
