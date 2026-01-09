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
* Multiply two half-precision floating-point numbers.
*
* @module @stdlib/number/float16/base/mul
*
* @example
* var mul = require( '@stdlib/number/float16/base/mul' );
*
* var v = mul( -1.0, 5.0 );
* // returns -5.0
*
* v = mul( 2.0, 5.0 );
* // returns 10.0
*
* v = mul( 0.0, 5.0 );
* // returns 0.0
*
* v = mul( -0.0, 0.0 );
* // returns -0.0
*
* v = mul( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
