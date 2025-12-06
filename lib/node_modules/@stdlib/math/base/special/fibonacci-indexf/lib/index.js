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
* Compute the Fibonacci number index of a single-precision floating-point number.
*
* @module @stdlib/math/base/special/fibonacci-indexf
*
* @example
* var fibonacciIndexf = require( '@stdlib/math/base/special/fibonacci-indexf' );
*
* var n = fibonacciIndexf( 0 );
* // returns NaN
*
* n = fibonacciIndexf( 1 );
* // returns NaN
*
* n = fibonacciIndexf( 2 );
* // returns 3
*
* n = fibonacciIndexf( 3 );
* // returns 4
*
* n = fibonacciIndexf( 5 );
* // returns 5
*
* n = fibonacciIndexf( 8 );
* // returns 6
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
