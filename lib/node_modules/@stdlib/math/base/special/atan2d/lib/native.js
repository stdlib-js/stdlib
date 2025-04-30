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

/**
* Computes the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @private
* @param {number} y - `y` coordinate
* @param {number} x - `x` coordinate
* @returns {number} angle (in degrees)
*
* @example
* var v = atan2d( 2.0, 2.0 ); // => atand(1.0)
* // returns ~45.0
*
* @example
* v = atan2d( 6.0, 2.0 ); // => atand(3.0)
* // returns ~71.565
*
* @example
* v = atan2d( 3.0, 0.0 );
* // returns 90.0
*
* @example
* v = atan2d( 3.0, NaN );
* // returns NaN
*/
function atan2d( y, x ) {
	return addon( y, x );
}


// EXPORTS //

module.exports = atan2d;
