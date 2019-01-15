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
		return 1.8138839368169826;
	}
	return 1.8138839368169826 + (x * (0.7631632457005573 + (x * (0.7619286053215958 + (x * (0.9510746536684279 + (x * (1.315180671703161 + (x * (1.9285606934774109 + (x * (2.9375093425313787 + (x * (4.594894405442878 + (x * (7.33007122188172 + (x * (11.871512597425301 + (x * (19.45851374822938 + (x * (32.20638657246427 + (x * (53.73749198700555 + (x * 90.27388602941))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
