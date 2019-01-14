/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
	if ( x === 0.0 ) {
		return 2.1565156474996434;
	}
	return 2.1565156474996434 + (x * (1.7918056418494632 + (x * (3.8267512874657132 + (x * (10.386724683637972 + (x * (31.403314054680703 + (x * (100.92370394986955 + (x * (337.3268282632273 + (x * (1158.7079305678278 + (x * (4060.9907421936323 + (x * (14454.001840343448 + (x * (52076.661075994045 + (x * (189493.65914621568 + (x * (695184.5762413896 + (x * (2567994.048255285 + (x * (9541921.966748387 + (x * (35634927.44218076 + (x * (133669298.46120408 + (x * (503352186.68662846 + (x * (1901975729.53866 + (x * 7208915015.330104))))))))))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
