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
* BLAS level 1 routine to multiply a one-dimensional double-precision complex floating-point ndarray `x` by a constant `alpha` and add the result to a one-dimensional double-precision complex floating-point ndarray `y`.
*
* @module @stdlib/blas/base/ndarray/zaxpy
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var zaxpy = require( '@stdlib/blas/base/ndarray/zaxpy' );
*
* var x = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var y = new Complex128Vector( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* var alpha = scalar2ndarray( new Complex128( 1.0, 2.0 ), {
*     'dtype': 'complex128'
* });
*
* var z = zaxpy( [ x, y, alpha ] );
* // returns <ndarray>[ <Complex128>[ -2.0, 5.0 ], <Complex128>[ -4.0, 11.0 ], <Complex128>[ -6.0, 17.0 ], <Complex128>[ -8.0, 23.0 ], <Complex128>[ -10.0, 29.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
