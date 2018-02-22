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
* Convert an angle from radians to degrees.
*
* @module @stdlib/math/base/special/rad2deg
*
* @example
* var rad2deg = require( '@stdlib/math/base/special/rad2deg' );
*
* var d = rad2deg( 3.141592653589793/2.0 );
* // returns 90.0
*
* d = rad2deg( -3.141592653589793/4.0 );
* // returns -45.0
*
* d = rad2deg( NaN );
* // returns NaN
*/

// MODULES //

var rad2deg = require( './rad2deg.js' );


// EXPORTS //

module.exports = rad2deg;
