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
* Add elements of a double-precision floating-point ndarray to the corresponding elements of a second double-precision floating-point ndarray and assign the results to the second ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/dxpy
*
* @example
* var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
* var dxpy = require( '@stdlib/blas/ext/base/ndarray/dxpy' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Vector( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = dxpy( [ x, y ] );
* // returns <ndarray>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
