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
* BLAS level 2 routine to perform one of the matrix-vector operations `y = alpha*A*x + beta*y`, `y = alpha*A^T*x + beta*y`, or `y = alpha*A^H*x + beta*y`.
*
* @module @stdlib/blas/base/ndarray/cgemv
*
* @example
* var Complex64Matrix = require( '@stdlib/ndarray/matrix/complex64' );
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var resolveEnum = require( '@stdlib/blas/base/transpose-operation-resolve-enum' );
* var cgemv = require( '@stdlib/blas/base/ndarray/cgemv' );
*
* var A = new Complex64Matrix( [ [ 1.0, 2.0, 3.0, 4.0 ], [ 5.0, 6.0, 7.0, 8.0 ] ] );
* var x = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var trans = scalar2ndarray( resolveEnum( 'no-transpose' ), {
*     'dtype': 'int8'
* });
* var alpha = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
*     'dtype': 'complex64'
* });
* var beta = scalar2ndarray( new Complex64( 1.0, 0.0 ), {
*     'dtype': 'complex64'
* });
*
* var out = cgemv( [ A, x, y, trans, alpha, beta ] );
* // returns <ndarray>[ <Complex64>[ -9.0, 30.0 ], <Complex64>[ -15.0, 72.0 ] ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
