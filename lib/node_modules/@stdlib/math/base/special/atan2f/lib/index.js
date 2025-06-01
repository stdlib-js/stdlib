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
* Compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)` as a single-precision floating-point number.
*
* @module @stdlib/math/base/special/atan2f
*
* @example
* var atan2f = require( '@stdlib/math/base/special/atan2f' );
*
* var v = atan2f( 2.0, 2.0 ); // => atanf( 1.0 )
* // returns ~0.785
*
* v = atan2f( 6.0, 2.0 ); // => atanf( 3.0 )
* // returns ~1.249
*
* v = atan2f( -1.0, -1.0 ); // => atanf( 1.0 ) - π
* // returns ~-2.356
*
* v = atan2f( 3.0, 0.0 ); // => π/2
* // returns ~1.571
*
* v = atan2f( -2.0, 0.0 ); // => -π/2
* // returns ~-1.571
*
* v = atan2f( 0.0, 0.0 );
* // returns 0.0
*
* v = atan2f( 3.0, NaN );
* // returns NaN
*
* v = atan2f( NaN, 2.0 );
* // returns NaN
*/

// MODULES //

var atan2f = require( './main.js' );


// EXPORTS //

module.exports = atan2f;
