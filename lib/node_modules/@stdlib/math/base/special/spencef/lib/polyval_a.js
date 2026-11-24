/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
		return 1.0;
	}
	return float64ToFloat32(1.0 + float64ToFloat32(x * float64ToFloat32(3.2977135181427 + float64ToFloat32(x * float64ToFloat32(4.25697135925293 + float64ToFloat32(x * float64ToFloat32(2.711498498916626 + float64ToFloat32(x * float64ToFloat32(0.8796913027763367 + float64ToFloat32(x * float64ToFloat32(0.13384763896465302 + float64ToFloat32(x * float64ToFloat32(0.007315890397876501 + float64ToFloat32(x * 0.00004651285780710168)))))))))))))); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = evalpoly;
