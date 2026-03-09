/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


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
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/
function evalpoly( x ) {
	if ( x === 0.0 ) {
		return 2.999401807785034;
	}
	return float64ToFloat32(2.999401807785034 + float64ToFloat32(x * float64ToFloat32(-103.28775787353516 + float64ToFloat32(x * float64ToFloat32(8560.515625 + float64ToFloat32(x * float64ToFloat32(-873235.6875 + float64ToFloat32(x * float64ToFloat32(73438488.0 + float64ToFloat32(x * float64ToFloat32(-4158143232.0 + float64ToFloat32(x * float64ToFloat32(135594237952.0 + float64ToFloat32(x * -1903009857536.0)))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
