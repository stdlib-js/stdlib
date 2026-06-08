/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Multiply a single-precision floating-point ndarray by a scalar constant and add the result to a second single-precision floating-point ndarray multiplied by a scalar constant.
*
* @module @stdlib/blas/ext/base/ndarray/saxpby
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var saxpby = require( '@stdlib/blas/ext/base/ndarray/saxpby' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var alpha = scalar2ndarray( 5.0, {
*     'dtype': 'float32'
* });
*
* var beta = scalar2ndarray( 2.0, {
*     'dtype': 'float32'
* });
*
* var out = saxpby( [ x, y, alpha, beta ] );
* // returns <ndarray>[ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
