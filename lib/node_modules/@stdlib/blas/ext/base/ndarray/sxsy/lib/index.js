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
* Subtract the elements of an output one-dimensional single-precision floating-point ndarray from the corresponding elements in an input one-dimensional single-precision floating-point ndarray and assign the results to the output ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/sxsy
*
* @example
* var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
* var sxsy = require( '@stdlib/blas/ext/base/ndarray/sxsy' );
*
* var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Vector( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
*
* var out = sxsy( [ x, y ] );
* // returns <ndarray>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
