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
		return 1.685750354812596;
	}
	return 1.685750354812596 + (x * (0.5417318486132803 + (x * (0.40152443839069024 + (x * (0.3696424734208891 + (x * (0.37606071535458363 + (x * (0.4052358870851259 + (x * (0.45329438175399905 + (x * (0.5205189476511842 + (x * (0.609426039204995 + (x * (0.7242635222829089 + (x * (0.8710138477098124 + (x * 1.057652872753547))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
