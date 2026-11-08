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
		return 0.9999842047691345;
	}
	return float64ToFloat32(0.9999842047691345 + float64ToFloat32(x * float64ToFloat32(-14.934393882751465 + float64ToFloat32(x * float64ToFloat32(860.2931518554688 + float64ToFloat32(x * float64ToFloat32(-77877.8984375 + float64ToFloat32(x * float64ToFloat32(6492611.5 + float64ToFloat32(x * float64ToFloat32(-377938784.0 + float64ToFloat32(x * float64ToFloat32(12783506432.0 + float64ToFloat32(x * -186084392960.0)))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
