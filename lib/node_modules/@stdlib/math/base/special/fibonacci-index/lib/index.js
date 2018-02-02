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
* Compute the Fibonacci number index.
*
* @module @stdlib/math/base/special/fibonacci-index
*
* @example
* var fibonacciIndex = require( '@stdlib/math/base/special/fibonacci-index' );
*
* var n = fibonacciIndex( 0 );
* // returns NaN
*
* n = fibonacciIndex( 1 );
* // returns NaN
*
* n = fibonacciIndex( 2 );
* // returns 3
*
* n = fibonacciIndex( 3 );
* // returns 4
*
* n = fibonacciIndex( 5 );
* // returns 5
*
* n = fibonacciIndex( 8 );
* // returns 6
*/

// MODULES //

var fibonacciIndex = require( './main.js' );


// EXPORTS //

module.exports = fibonacciIndex;
