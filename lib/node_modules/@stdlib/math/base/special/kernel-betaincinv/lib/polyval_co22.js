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
		return 0.0005422926281312969;
	}
	return 0.0005422926281312969 + (x * (-0.0003694266780000966 + (x * (-0.00010230378073700413 + (x * (0.00035764655430568635 + (x * (-0.00028690924218514614 + (x * (0.00012645437628698076 + (x * (-0.000033202652391372056 + (x * (0.000004890304529197534 + (x * (-3.123956959982987e-7 + (x * 8.22063524662433e-18))))))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
