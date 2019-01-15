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
		return 2.0075983984243764;
	}
	return 2.0075983984243764 + (x * (1.2484572312123474 + (x * (1.9262346570764797 + (x * (3.7512896400875877 + (x * (8.119944554932045 + (x * (18.665721308735552 + (x * (44.603924842914374 + (x * (109.50920543094983 + (x * (274.2779548232414 + (x * (697.5598008606327 + (x * (1795.7160145002472 + (x * (4668.38171679039 + (x * (12235.762468136643 + (x * (32290.17809718321 + (x * (85713.07608195965 + (x * (228672.1890493117 + (x * 612757.2711915852))))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
