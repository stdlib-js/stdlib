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

'use strict';

/**
* Compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @module @stdlib/math/base/special/atan2
*
* @example
* var atan2 = require( '@stdlib/math/base/special/atan2' );
*
* var v = atan2( 2.0, 2.0 ); // => atan(1.0)
* // returns ~0.785
*
* v = atan2( 6.0, 2.0 ); // => atan(3.0)
* // returns ~1.249
*
* v = atan2( -1.0, -1.0 ); // => atan(1.0) - π
* // returns ~-2.356
*
* v = atan2( 3.0, 0.0 ); // => π/2
* // returns ~1.571
*
* v = atan2( -2.0, 0.0 ); // => -π/2
* // returns ~-1.571
*
* v = atan2( 0.0, 0.0 );
* // returns 0.0
*
* v = atan2( 3.0, NaN );
* // returns NaN
*
* v = atan2( NaN, 2.0 );
* // returns NaN
*/

// MODULES //

var atan2 = require( './main.js' );


// EXPORTS //

module.exports = atan2;
