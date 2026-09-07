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
* Compute the standard deviation of a one-dimensional single-precision floating-point ndarray using a one-pass algorithm proposed by Youngs and Cramer.
*
* @module @stdlib/stats/base/ndarray/sstdevyc
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var sstdevyc = require( '@stdlib/stats/base/ndarray/sstdevyc' );
*
* var x = new Float32Vector( [ 1.0, -2.0, 2.0 ] );
* var correction = scalar2ndarray( 1.0, {
*     'dtype': 'float32'
* });
*
* var v = sstdevyc( [ x, correction ] );
* // returns ~2.0817
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
