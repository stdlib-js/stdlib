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
* BLAS level 1 routine to multiply a one-dimensional single-precision complex floating-point ndarray by a scalar constant.
*
* @module @stdlib/blas/base/ndarray/cscal
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var cscal = require( '@stdlib/blas/base/ndarray/cscal' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
*     'dtype': 'complex64'
* });
*
* var y = cscal( [ x, alpha ] );
* // returns <ndarray>[ <Complex64>[ 2.0, 4.0 ], <Complex64>[ 6.0, 8.0 ], <Complex64>[ 10.0, 12.0 ] ]
*
* var bool = ( y === x );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
