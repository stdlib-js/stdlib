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
* Return a boolean indicating if the sign bit is on (true) or off (false).
*
* @module @stdlib/number/float32/base/signbit
*
* @example
* var signbitf = require( '@stdlib/number/float32/base/signbit' );
* var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
*
* var bool = signbitf( toFloat32( 4.0 ) );
* // returns false
*
* bool = signbitf( toFloat32( -9.14e-34 ) );
* // returns true
*
* bool = signbitf( 0.0 );
* // returns false
*
* bool = signbitf( -0.0 );
* // returns true
*/

// MODULES //

var signbitf = require( './main.js' );


// EXPORTS //

module.exports = signbitf;
