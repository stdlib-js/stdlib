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

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the tangent of a number on \\( \[-\pi/4, \pi/4] \\) in single-precision floating-point format, where \\( \pi/4 \approx 0.785398164 \\).
*
* @private
* @param {number} x - input value (in radians, assumed to be bounded by ~π/4 in magnitude)
* @param {integer} iy - indicates whether tan (if iy = 1) or -1/tan (if iy = -1) is returned
* @returns {number} tangent
*
* @example
* var out = kernelTanf( 3.141592653589793/4.0, 1 );
* // returns ~1.0
*
* @example
* var out = kernelTanf( 3.141592653589793/4.0, -1 );
* // returns ~-1.0
*
* @example
* var out = kernelTanf( 3.141592653589793/6.0, 1 );
* // returns ~0.577
*
* @example
* var out = kernelTanf( 0.664, 1 );
* // returns ~0.783
*
* @example
* var out = kernelTanf( NaN, 1 );
* // returns NaN
*/
function kernelTanf( x, iy ) {
	return addon( x, iy );
}


// EXPORTS //

module.exports = kernelTanf;
