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
		return 0.0009647274732138864;
	}
	return 0.0009647274732138864 + (x * (-0.0003110108632631878 + (x * (-0.00036307660358786886 + (x * (0.0005140660578834113 + (x * (-0.00029133414466938067 + (x * (0.00009086710793521991 + (x * (-0.000015303004486655377 + (x * (0.0000010914179173496788 + (x * 2.8114572543455206e-15))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
