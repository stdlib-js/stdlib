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
		return 1.2707074796501499;
	}
	return 1.2707074796501499 + (x * (-0.5668391682878666 + (x * (-0.2621607934324926 + (x * (-0.2922441735330774 + (x * (-0.4403978408504232 + (x * (-0.7749476413813975 + (x * (-1.498870837987561 + (x * (-3.089708310445187 + (x * (-6.6675959033810015 + (x * (-14.89436036517319 + (x * (-34.18120574251449 + (x * (-80.15895841905397 + (x * (-191.34894807629848 + (x * (-463.5938853480342 + (x * -1137.38082216936))))))))))))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
