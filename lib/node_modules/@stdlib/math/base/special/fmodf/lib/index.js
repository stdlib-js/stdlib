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
* Evaluate the modulus function for single-precision floating-point numbers.
*
* @module @stdlib/math/base/special/fmodf
*
* @example
* var fmodf = require( '@stdlib/math/base/special/fmodf' );
*
* var v = fmodf( 8.0, 3.0 );
* // returns 2.0
*
* var v = fmodf( 9.0, 3.0 );
* // returns 0.0
*
* var v = fmodf( 8.9, 3.0 );
* // returns 2.9
*
* var v = fmodf( NaN, 3.0 );
* // returns NaN
*
* var v = fmodf( 5.0, NaN );
* // returns NaN
*
* var v = fmodf( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
