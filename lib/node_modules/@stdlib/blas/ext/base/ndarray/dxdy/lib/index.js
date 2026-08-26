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
* Divide elements of a one-dimensional double-precision floating-point ndarray by the corresponding elements of a second one-dimensional double-precision floating-point ndarray and assign the results to the second ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/dxdy
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var dxdy = require( '@stdlib/blas/ext/base/ndarray/dxdy' );
*
* var x = new Float64Vector( [ 6.0, 12.0, 20.0, 30.0, 42.0 ] );
* var y = new Float64Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = dxdy( [ x, y ] );
* // returns <ndarray>[ 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
