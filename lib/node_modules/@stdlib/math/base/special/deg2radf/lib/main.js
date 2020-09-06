/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

// π / 180.0
var PI_DIV_180 = float64ToFloat32( 1.7453292519943295e-2 );


// MAIN //

/**
* Converts an angle from degrees to radians (single-precision).
*
* @param {number} x - angle in degrees
* @returns {number} angle in radians
*
* @example
* var r = deg2radf( 90.0 );
* // returns ~1.571
*
* @example
* var r = deg2radf( -45.0 );
* // returns ~-0.785
*
* @example
* var r = deg2radf( NaN );
* // returns NaN
*/
function deg2radf( x ) {
	return float64ToFloat32( x * PI_DIV_180 );
}


// EXPORTS //

module.exports = deg2radf;
