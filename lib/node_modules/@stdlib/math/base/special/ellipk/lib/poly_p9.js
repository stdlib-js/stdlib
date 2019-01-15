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
		return 2.3181226217125106;
	}
	return 2.3181226217125106 + (x * (2.6169201502912327 + (x * (7.897935075731356 + (x * (30.502397154466724 + (x * (131.48693655235286 + (x * (602.9847637356492 + (x * (2877.024617809973 + (x * (14110.519919151804 + (x * (70621.4408815654 + (x * (358977.266582531 + (x * (1847238.2637239718 + (x * (9600515.416049214 + (x * (50307677.08502367 + (x * (265444188.6527128 + (x * (1408862325.0287027 + (x * 7515687935.373775))))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
