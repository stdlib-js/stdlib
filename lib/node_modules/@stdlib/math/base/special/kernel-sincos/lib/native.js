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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Simultaneously computes the sine and cosine of an angle measured in radians on the interval \\( \approx \[-\pi/4, \pi/4\] \\) (except for \\(-0\\)), where \\( \pi/4 \approx 0.7854 \\).
*
* @private
* @param {number} x - input value (in radians, assumed to be bounded by `~π/4` in magnitude)
* @param {number} y - tail of `x`
* @returns {Array<number>} sine and cosine
*
* @example
* var v = kernelSincos( 0.0, 0.0 );
* // returns <Float64Array>[ ~0.0, ~1.0 ]
*
* @example
* var v = kernelSincos( 3.141592653589793/2.0, 0.0 );
* // returns <Float64Array>[ ~1.0, ~0.0 ]
*
* @example
* var v = kernelSincos( -3.141592653589793/6.0, 0.0 );
* // returns <Float64Array>[ ~-0.5, ~0.866 ]
*
* @example
* var v = kernelSincos( NaN, 0.0 );
* // returns <Float64Array>[ NaN, NaN ]
*/
function kernelSincos( x, y ) {
	var out = new Float64Array( 2 );
	addon( x, y, out );
	return out;
}


// EXPORTS //

module.exports = kernelSincos;
