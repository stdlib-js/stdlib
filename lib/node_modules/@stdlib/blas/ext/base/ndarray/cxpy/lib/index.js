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
* Add elements of a one-dimensional single-precision complex floating-point ndarray to the corresponding elements of a second one-dimensional single-precision complex floating-point ndarray and assign the results to the second ndarray.
*
* @module @stdlib/blas/ext/base/ndarray/cxpy
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var cxpy = require( '@stdlib/blas/ext/base/ndarray/cxpy' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex64Vector( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var out = cxpy( [ x, y ] );
* // returns <ndarray>[ <Complex64>[ 3.0, 3.0 ], <Complex64>[ 2.0, 2.0 ], <Complex64>[ 4.0, 1.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
