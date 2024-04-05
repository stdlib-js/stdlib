/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// 180.0 / π
var CONST_180_DIV_PI = float64ToFloat32( 57.29577951308232 );


// MAIN //

/**
* Converts an angle from radians to degrees (single-precision).
*
* @param {number} x - angle in radians
* @returns {number} angle in degrees
*
* @example
* var d = rad2degf( 3.141592653589793 / 2.0 );
* // returns 90.0
*
* @example
* var d = rad2degf( -3.141592653589793 / 4.0 );
* // returns -45.0
*
* @example
* var d = rad2degf( NaN );
* // returns NaN
*/
function rad2degf( x ) {
	return float64ToFloat32( float64ToFloat32( x ) * CONST_180_DIV_PI );
}


// EXPORTS //

module.exports = rad2degf;
