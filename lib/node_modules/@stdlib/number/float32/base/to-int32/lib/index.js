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
* Convert a single-precision floating-point number to a signed 32-bit integer.
*
* @module @stdlib/number/float32/base/to-int32
*
* @example
* var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
* var float32ToInt32 = require( '@stdlib/number/float32/base/to-int32' );
*
* var y = float32ToInt32( float64ToFloat32( 4294967295.0 ) );
* // returns 0
*
* y = float32ToInt32( float64ToFloat32( 3.14 ) );
* // returns 3
*
* y = float32ToInt32( float64ToFloat32( -3.14 ) );
* // returns -3
*
* y = float32ToInt32( float64ToFloat32( NaN ) );
* // returns 0
*
* y = float32ToInt32( float64ToFloat32( Infinity ) );
* // returns 0
*
* y = float32ToInt32( float64ToFloat32( -Infinity ) );
* // returns 0
*/

// MODULES //

var float32ToInt32 = require( './main.js' );


// EXPORTS //

module.exports = float32ToInt32;
