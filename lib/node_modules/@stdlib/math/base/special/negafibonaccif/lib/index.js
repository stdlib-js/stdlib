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
* Compute the nth negaFibonacci number as a single-precision floating-point number.
*
* @module @stdlib/math/base/special/negafibonaccif
*
* @example
* var negafibonaccif = require( '@stdlib/math/base/special/negafibonaccif' );
*
* var y = negafibonaccif( 0 );
* // returns 0
*
* y = negafibonaccif( -1 );
* // returns 1
*
* y = negafibonaccif( -2 );
* // returns -1
*
* y = negafibonaccif( -3 );
* // returns 2
*
* y = negafibonaccif( -4 );
* // returns -3
*
* y = negafibonaccif( -5 );
* // returns 5
*
* y = negafibonaccif( -6 );
* // returns -8
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
