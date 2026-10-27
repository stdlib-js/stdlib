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
* Multiply each element in a one-dimensional double-precision complex floating-point ndarray by a scalar constant and add a scalar constant to each result.
*
* @module @stdlib/blas/ext/base/ndarray/zaxpb
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zaxpb = require( '@stdlib/blas/ext/base/ndarray/zaxpb' );
*
* var x = new Complex128Vector( [ -2.0, 1.0, 3.0, -5.0 ] );
*
* var alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
*     'dtype': 'complex128'
* });
*
* var beta = scalar2ndarray( new Complex128( 1.0, 0.0 ), {
*     'dtype': 'complex128'
* });
*
* var out = zaxpb( [ x, alpha, beta ] );
* // returns <ndarray>[ <Complex128>[ -3.0, 2.0 ], <Complex128>[ 7.0, -10.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
