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
* Evaluate the exponential function for a single-precision floating-point number.
*
* @module @stdlib/math/base/special/powf
*
* @example
* var powf = require( '@stdlib/math/base/special/powf' );
*
* var v = powf( 2.0, 3.0 );
* // returns 8.0
*
* v = powf( 4.0, 0.5 );
* // returns 2.0
*
* v = powf( 100.0, 0.0 );
* // returns 1.0
*
* v = powf( 3.1415927410125732, 5.0 );
* // returns ~306.0197
*
* v = powf( 3.1415927410125732, -0.2 );
* // returns ~0.7954
*
* v = powf( NaN, 3.0 );
* // returns NaN
*
* v = powf( 5.0, NaN );
* // returns NaN
*
* v = powf( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
