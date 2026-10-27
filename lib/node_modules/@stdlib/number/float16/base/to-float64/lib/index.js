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
* Convert a half-precision floating-point number to the nearest double-precision floating-point number.
*
* @module @stdlib/number/float16/base/to-float64
*
* @example
* var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
* var float16ToFloat64 = require( '@stdlib/number/float16/base/to-float64' );
*
* var y = float16ToFloat64( float64ToFloat16( 1.337 ) );
* // returns 1.3369140625
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
