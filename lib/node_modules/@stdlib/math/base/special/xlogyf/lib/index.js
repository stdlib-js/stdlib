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

/**
* Compute `x * ln(y)` so that the result is `0` if `x = 0` for single-precision floating-point numbers `x` and `y`.
*
* @module @stdlib/math/base/special/xlogyf
*
* @example
* var xlogyf = require( '@stdlib/math/base/special/xlogyf' );
*
* var out = xlogyf( 3.0, 2.0 );
* // returns ~2.079
*
* out = xlogyf( 1.5, 5.9 );
* // returns ~2.662
*
* out = xlogyf( 0.9, 1.0 );
* // returns 0.0
*
* out = xlogyf( 0.0, -2.0 );
* // returns 0.0
*
* out = xlogyf( 1.5, NaN );
* // returns NaN
*
* out = xlogyf( 0.0, NaN );
* // returns NaN
*
* out = xlogyf( NaN, 2.3 );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
