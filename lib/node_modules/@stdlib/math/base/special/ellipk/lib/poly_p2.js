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
		return 1.63525673226458;
	}
	return 1.63525673226458 + (x * (0.4711906261487323 + (x * (0.3097284108314996 + (x * (0.2522083117731357 + (x * (0.22672562321968465 + (x * (0.21577444672958598 + (x * (0.21310877187734892 + (x * (0.21602912460518828 + (x * (0.2232558316330579 + (x * (0.23418050129420992 + (x * (0.24855768297226408 + (x * 0.26636380989261754))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
