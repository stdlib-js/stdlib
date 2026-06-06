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
* BLAS level 1 routine to copy values from a one-dimensional single-precision complex floating-point ndarray `x` into a one-dimensional single-precision complex floating-point ndarray `y`.
*
* @module @stdlib/blas/base/ndarray/ccopy
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var ccopy = require( '@stdlib/blas/base/ndarray/ccopy' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var z = ccopy( [ x, y ] );
* // returns <ndarray>[ <Complex64>[ 1.0, 2.0 ], <Complex64>[ 3.0, 4.0 ], <Complex64>[ 5.0, 6.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
