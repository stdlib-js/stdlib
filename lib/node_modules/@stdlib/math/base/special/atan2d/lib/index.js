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

/**
* Compute the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @module @stdlib/math/base/special/atan2d
*
* @example
* var atan2d = require( '@stdlib/math/base/special/atan2d' );
*
* var v = atan2d( 2.0, 2.0 ); // => atand(1.0)
* // returns ~45.0
*
* v = atan2d( 6.0, 2.0 ); // => atand(3.0)
* // returns ~71.565
*
* v = atan2d( -1.0, -1.0 ); // => atand(1.0) - 180.0
* // returns ~-135.0
*
* v = atan2d( 3.0, 0.0 );
* // returns 90.0
*
* v = atan2d( -2.0, 0.0 );
* // returns -90.0
*
* v = atan2d( 0.0, 0.0 );
* // returns 0.0
*
* v = atan2d( 3.0, NaN );
* // returns NaN
*
* v = atan2d( NaN, 2.0 );
* // returns NaN
*/

// MODULES //

var atan2d = require( './main.js' );


// EXPORTS //

module.exports = atan2d;
