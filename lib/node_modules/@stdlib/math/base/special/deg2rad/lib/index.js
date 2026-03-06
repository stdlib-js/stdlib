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
* Convert an angle from degrees to radians.
*
* @module @stdlib/math/base/special/deg2rad
*
* @example
* var deg2rad = require( '@stdlib/math/base/special/deg2rad' );
*
* var r = deg2rad( 90.0 );
* // returns ~1.571
*
* r = deg2rad( -45.0 );
* // returns ~-0.785
*
* r = deg2rad( NaN );
* // returns NaN
*/

// MODULES //

var deg2rad = require( './main.js' );


// EXPORTS //

module.exports = deg2rad;
